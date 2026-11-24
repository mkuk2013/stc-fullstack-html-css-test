// ===== STC Test - Central Results API (Netlify Functions + Blobs) =====
// Routes (config path): /api/results
//  GET  ?action=check&key=<studentKey>        -> { exists, record? }   (public, one-time check)
//  GET  ?action=list&pw=<admin password>      -> { results: [...] }    (admin only)
//  POST { action:"save",   record }           -> save result (409 if the student already has one)
//  POST { action:"delete", key, pw }          -> delete one result     (admin only)
//  POST { action:"clear",  pw }               -> delete all results    (admin only)
import { getStore } from "@netlify/blobs";

const STORE_NAME = "stc-results";
const adminPw = () => process.env.ADMIN_PASSWORD || ""; // fail-closed: no env var set = no admin access
const enc = (k) => encodeURIComponent(String(k || ""));

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}

// Tombstones: admin ne jo record delete ki, us ki nishani - taake student side
// "admin ne delete kiya (retake allowed)" aur "record server tak pohancha hi nahi (recover karo)"
// mein farq kar sake. Key = enc(student key).
async function loadTombs(store) { return (await store.get("__tombstones__", { type: "json" }).catch(() => null)) || {}; }
async function saveTombs(store, t) { await store.setJSON("__tombstones__", t); }

export default async (req) => {
  const store = getStore({ name: STORE_NAME, consistency: "strong" });
  const url = new URL(req.url);
  const action = url.searchParams.get("action") || "";
  try {
    if (req.method === "GET" && action === "status") {
      const st = await store.get("__settings__", { type: "json" }).catch(() => null);
      return json({ open: !!(st && st.open === true) });
    }
    if (req.method === "GET" && action === "verify") {
      if (!adminPw() || (url.searchParams.get("pw") || "") !== adminPw()) return json({ error: "unauthorized" }, 401);
      return json({ ok: true });
    }
    if (req.method === "GET" && action === "check") {
      const key = url.searchParams.get("key") || "";
      if (!key) return json({ exists: false });
      const rec = await store.get(enc(key), { type: "json" }).catch(() => null);
      const tombs = await loadTombs(store);
      return json({
        deleted: !!tombs[enc(key)],
        exists: !!rec,
        record: rec ? { name: rec.name, status: rec.status, score: rec.score, total: rec.total, date: rec.date } : null
      });
    }
    if (req.method === "GET" && action === "list") {
      if ((url.searchParams.get("pw") || "") !== adminPw()) return json({ error: "unauthorized" }, 401);
      const { blobs } = await store.list();
      const out = [];
      for (const b of blobs) {
        if (b.key === "__settings__" || b.key === "__tombstones__") continue;
        const r = await store.get(b.key, { type: "json" }).catch(() => null);
        if (r) out.push(r);
      }
      out.sort((a, b) => (a.ts || 0) - (b.ts || 0));
      return json({ results: out });
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      const act = body.action || action || "save";
      if (act === "save") {
        const rec = body.record;
        if (!rec || !rec.key || !rec.name) return json({ error: "bad record" }, 400);
        const existing = await store.get(enc(rec.key), { type: "json" }).catch(() => null);
        if (existing) return json({ error: "exists", record: existing }, 409);
        rec.ts = Date.now();
        await store.setJSON(enc(rec.key), rec);
        const tombs = await loadTombs(store);
        if (tombs[enc(rec.key)]) { delete tombs[enc(rec.key)]; await saveTombs(store, tombs); }
        return json({ ok: true });
      }
      if (act === "set-status") {
        if (body.pw !== adminPw()) return json({ error: "unauthorized" }, 401);
        await store.setJSON("__settings__", { open: body.open === true, ts: Date.now() });
        return json({ ok: true, open: body.open === true });
      }
      if (act === "set-practical") {
        if (body.pw !== adminPw()) return json({ error: "unauthorized" }, 401);
        if (!body.key) return json({ error: "no key" }, 400);
        const rec = await store.get(enc(body.key), { type: "json" }).catch(() => null);
        if (!rec) return json({ error: "not found" }, 404);
        if (body.practical === null || body.practical === "" || body.practical === undefined) {
          delete rec.practical;
        } else {
          const p = Number(body.practical);
          if (isNaN(p) || p < 0 || p > 50) return json({ error: "practical must be 0-50" }, 400);
          rec.practical = p;
        }
        await store.setJSON(enc(body.key), rec);
        return json({ ok: true, practical: rec.practical === undefined ? null : rec.practical });
      }
      if (act === "set-record-status") {
        if (body.pw !== adminPw()) return json({ error: "unauthorized" }, 401);
        if (!body.key) return json({ error: "no key" }, 400);
        const allowed = ["Pending", "Cancelled", "Completed"];
        if (!allowed.includes(body.status)) return json({ error: "bad status" }, 400);
        const rec = await store.get(enc(body.key), { type: "json" }).catch(() => null);
        if (!rec) return json({ error: "not found" }, 404);
        rec.status = body.status;
        await store.setJSON(enc(body.key), rec);
        return json({ ok: true, status: rec.status });
      }
      if (act === "delete") {
        if (body.pw !== adminPw()) return json({ error: "unauthorized" }, 401);
        if (body.key) {
          await store.delete(enc(body.key));
          const tombs = await loadTombs(store);
          tombs[enc(body.key)] = Date.now();
          await saveTombs(store, tombs);
        }
        return json({ ok: true });
      }
      if (act === "clear") {
        if (body.pw !== adminPw()) return json({ error: "unauthorized" }, 401);
        const { blobs } = await store.list();
        const tombs = await loadTombs(store);
        let n = 0;
        for (const b of blobs) { if (b.key !== "__settings__" && b.key !== "__tombstones__") { tombs[b.key] = Date.now(); await store.delete(b.key); n++; } }
        await saveTombs(store, tombs);
        return json({ ok: true, deleted: n });
      }
      return json({ error: "unknown action" }, 400);
    }
    return json({ error: "method not allowed" }, 405);
  } catch (e) {
    return json({ error: String((e && e.message) || e) }, 500);
  }
};

export const config = { path: "/api/results" };
