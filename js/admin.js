// ===== Admin Panel - Results, Print, PDF (Save as PDF), CSV =====
(function(){
"use strict";
const $ = id => document.getElementById(id);
const COURSE_NAME = "Full Stack Web Development (6 Months)";
function getResults(){ try { return JSON.parse(localStorage.getItem(CONFIG.RESULTS_KEY)) || []; } catch(e){ return []; } }
function saveResults(r){ localStorage.setItem(CONFIG.RESULTS_KEY, JSON.stringify(r)); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

let currentList = [];
let remoteCache = null; // null = central list not loaded yet / unavailable (local fallback)
function adminPw(){ return sessionStorage.getItem("stc_admin_pw") || ""; }
function sourceResults(){ return remoteCache !== null ? remoteCache : getResults(); }
async function fetchCentralList(pw){
  const resp = await fetch(CONFIG.API + "?action=list&pw=" + encodeURIComponent(pw));
  if(!resp.ok) return null;
  const d = await resp.json();
  return d.results || [];
}
async function loadRemote(){
  const pw = adminPw(); if(!pw) return null;
  try {
    let list = await fetchCentralList(pw);
    if(list === null) return null;
    remoteCache = list; render();
    // Migrate results stored locally on THIS device (old system) into the central database
    const centralKeys = new Set(list.map(r => r.key));
    const locals = getResults().filter(r => !centralKeys.has(r.key));
    for(const rec of locals){ await apiPost({ action: "save", record: rec }); }
    if(locals.length){
      const updated = await fetchCentralList(pw);
      if(updated !== null){ remoteCache = updated; render(); }
    }
    return { total: remoteCache.length, migrated: locals.length };
  } catch(e){ return null; /* keep local fallback */ }
}
// Retrieve Data button: fetch everything from the central database into this panel
$("btn-retrieve") && $("btn-retrieve").addEventListener("click", async function(){
  const btn = $("btn-retrieve"), st = $("retrieve-status");
  const oldText = btn.textContent;
  btn.disabled = true; btn.textContent = "↻ Retrieving...";
  const res = await loadRemote();
  btn.disabled = false; btn.textContent = oldText;
  st.classList.remove("hidden");
  if(res){
    st.style.background = "#e7f8f0"; st.style.color = "#0b7a55";
    st.textContent = "✓ Data retrieved successfully — Total results in central database: " + res.total + (res.migrated ? " (" + res.migrated + " old result(s) from this device were also saved into the central database)" : "");
  } else {
    st.style.background = "#fdecec"; st.style.color = "#b42318";
    st.textContent = "⚠ Could not retrieve from the central database. Please check the internet connection and try again. Showing this device's local results for now.";
    render();
  }
});
async function apiPost(body){
  try { await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); } catch(e){}
}
if(sessionStorage.getItem("stc_admin")==="1"){ showPanel(); }
$("login-form").addEventListener("submit", async function(e){
  e.preventDefault();
  const pw = $("admin-pass").value;
  const er = $("login-err");
  try {
    const resp = await fetch(CONFIG.API + "?action=verify&pw=" + encodeURIComponent(pw));
    if (resp.ok){
      sessionStorage.setItem("stc_admin","1"); sessionStorage.setItem("stc_admin_pw", pw); showPanel();
    } else {
      er.textContent = "\u26D4 Incorrect password. Please try again."; er.style.display = "block";
    }
  } catch(ex){
    er.textContent = "Could not verify with the server. Check the internet connection and try again."; er.style.display = "block";
  }
});
$("btn-logout") && $("btn-logout").addEventListener("click", function(){ sessionStorage.removeItem("stc_admin"); sessionStorage.removeItem("stc_admin_pw"); location.reload(); });

function showPanel(){ $("admin-login").classList.add("hidden"); $("admin-panel").classList.remove("hidden"); render(); loadRemote(); loadTestStatus(); }
function setToggleUI(open){
  const t = $("test-toggle"); if(t) t.checked = open;
  const tx = $("test-status-text");
  if(tx){ tx.textContent = open ? "🟢 Test is OPEN — students can take the test right now." : "🔴 Test is CLOSED — students cannot take the test."; tx.style.color = open ? "#0b7a55" : "#b42318"; }
}
async function loadTestStatus(){
  try {
    const r = await fetch(CONFIG.API + "?action=status");
    if(r.ok){ const d = await r.json(); setToggleUI(!!d.open); return; }
  } catch(e){}
  const tx = $("test-status-text"); if(tx) tx.textContent = "Could not load the test status — check the internet connection.";
}
$("test-toggle") && $("test-toggle").addEventListener("change", async function(){
  const open = $("test-toggle").checked;
  const msg = open ? "OPEN the test for students?\nStudents will be able to start the test immediately." : "CLOSE the test for students?\nNo student will be able to start the test.";
  if(!confirm(msg)){ setToggleUI(!open); return; }
  const tx = $("test-status-text"); if(tx) tx.textContent = "Saving...";
  try {
    const resp = await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "set-status", open: open, pw: adminPw() }) });
    if(!resp.ok) throw new Error("failed");
    setToggleUI(open);
  } catch(e){
    setToggleUI(!open);
    alert("Status change failed. Please check the internet connection and try again.");
  }
});
// Combined official result: sirf nayi test (total 50) par - MCQ + Practical = Total /100
function combined(r){
  if(r.total!==50) return null;
  if(typeof r.practical !== "number") return { pending:true };
  const total = r.score + r.practical;
  return { pending:false, total:total, pct:total };
}
function sortKey(r){ const c = combined(r); return c ? (c.pending ? r.percent : c.total) : r.percent; }
function isPass(r){ if(r.status==="Cancelled") return false; const c = combined(r); if(c) return !c.pending && c.total >= CONFIG.PASS_PERCENT; return r.status==="Completed" && r.percent >= CONFIG.PASS_PERCENT; }
function gradeOfPct(p){
  if(p>=80) return {g:"A+", cls:"ga"};
  if(p>=70) return {g:"A", cls:"ga"};
  if(p>=60) return {g:"B", cls:"gb"};
  if(p>=50) return {g:"C", cls:"gc"};
  if(p>=40) return {g:"D", cls:"gd"};
  return {g:"F", cls:"gf"};
}
function gradeOf(r){
  const c = combined(r);
  if(c) return c.pending ? {g:"—", cls:"gx"} : gradeOfPct(c.pct);
  if(r.status!=="Completed") return {g:"—", cls:"gx"};
  return gradeOfPct(r.percent);
}
function sectionLabel(r){
  if(r.sectionName) return r.sectionName;
  if(r.section==="basic") return "Basic (HTML Only)";
  if(r.section==="htmlcss") return "HTML + CSS";
  if(r.section==="advanced") return "Advanced (HTML + CSS + JS)";
  return "Old Test (100 MCQ)";
}
function positionMap(all){
  // Merit positions are calculated separately within each section
  const map = {};
  const groups = {};
  all.filter(r=>r.status==="Completed" || r.status==="Pending").forEach(function(r){ const g = r.section || "legacy"; (groups[g] = groups[g] || []).push(r); });
  Object.keys(groups).forEach(function(g){
    const done = groups[g].slice().sort((a,b)=>sortKey(b)-sortKey(a));
    let lastScore=null, lastRank=0;
    done.forEach(function(r,i){ const sk = sortKey(r); if(sk!==lastScore){ lastRank=i+1; lastScore=sk; } map[r.key+"|"+r.date]=lastRank; });
  });
  return map;
}

function render(){
  const q = ($("search").value||"").toLowerCase();
  const f = $("filter-status").value;
  const fs = $("filter-section") ? $("filter-section").value : "";
  const all = sourceResults();
  // Stats (over the selected section scope - default: new sections only)
  const scopeForStats = all.filter(r => { const fsx = $("filter-section") ? $("filter-section").value : ""; return fsx ? (r.section || "legacy")===fsx : !!r.section; });
  $("st-total").textContent = scopeForStats.length;
  $("st-completed").textContent = scopeForStats.filter(r=>r.status==="Completed").length;
  $("st-cancelled").textContent = scopeForStats.filter(r=>r.status==="Cancelled").length;
  $("st-pass").textContent = scopeForStats.filter(isPass).length;
  $("st-avg").textContent = scopeForStats.length ? Math.round(scopeForStats.reduce((s,r)=>s+sortKey(r),0)/scopeForStats.length) + "%" : "0%";
  $("st-high").textContent = scopeForStats.length ? Math.max.apply(null, scopeForStats.map(function(r){ const c=combined(r); return c && !c.pending ? c.total : r.score; })) : 0;
  $("print-date").textContent = "Printed on: " + new Date().toLocaleString("en-GB",{timeZone:"Asia/Karachi"});
  $("print-summary").textContent = "Total Students: " + scopeForStats.length + "  •  Completed: " + scopeForStats.filter(r=>r.status==="Completed").length + "  •  Cancelled: " + scopeForStats.filter(r=>r.status==="Cancelled").length + "  •  Pass: " + scopeForStats.filter(isPass).length;

  // Section scope: by default ONLY the new 3-section results are shown.
  // Purane (Old Test) results sirf apne alag filter par nazar ate hain - naye sections mein mix nahi hote.
  const scoped = all.filter(r => fs ? (r.section || "legacy")===fs : !!r.section);
  const posMap = positionMap(scoped);
  currentList = scoped.filter(r => (!f || r.status===f) && (!q || r.name.toLowerCase().includes(q) || (r.roll||"").toLowerCase().includes(q)));
  const tb = $("results-body"); tb.innerHTML="";
  $("no-results").classList.toggle("hidden", scoped.length>0);
  currentList.forEach(function(r, i){
    const tr = document.createElement("tr");
    const pass = isPass(r);
    const c = combined(r);
    const pracPrint = r.total!==50 ? "—" : (typeof r.practical==="number" ? String(r.practical) : "Pending");
    const pracCell = r.total!==50
      ? "<td>—</td>"
      : "<td><span class='print-only'>"+pracPrint+"</span><span class='no-print prac-wrap'><input class='prac-input' type='number' min='0' max='50' placeholder='0-50' value='"+(typeof r.practical==="number" ? r.practical : "")+"'><button class='btn small' data-act='prac' data-i='"+i+"' title='Practical marks save karein (0-50)'>Save</button></span></td>";
    tr.innerHTML =
      "<td>"+(i+1)+"</td><td><b>"+esc(r.name)+"</b></td>"+
      "<td>"+esc(sectionLabel(r))+"</td>"+
      "<td style='font-size:12px'>"+COURSE_NAME+"</td>"+
      "<td><span class='print-only'><b>"+r.score+"</b> / "+r.total+"</span><span class='no-print prac-wrap'><input class='prac-input' type='number' min='0' max='"+r.total+"' value='"+r.score+"' style='width:52px' title='MCQ marks - galat hon to theek karke Save dabayein'><button class='btn small' data-act='score' data-i='"+i+"' title='MCQ marks save karein'>Save</button></span></td>"+
      pracCell+
      "<td>"+(c ? (c.pending ? "—" : "<b>"+c.total+"</b> / 100") : "<b>"+r.score+"</b> / "+r.total)+"</td>"+
      "<td><b>"+(c ? (c.pending ? "—" : c.pct+"%") : r.percent+"%")+"</b></td>"+
      (function(){ const gr=gradeOf(r); return "<td><span class='grade "+gr.cls+"'>"+gr.g+"</span></td>"; })()+
      (function(){ const p=posMap[r.key+"|"+r.date]; return "<td class='print-hide'>"+(p? "<span class='pos "+(p===1?"p1":p===2?"p2":p===3?"p3":"")+"'>"+p+"</span>" : "—")+"</td>"; })()+
      "<td>"+(r.status==="Cancelled" ? "<span style='color:var(--red);font-weight:800'>CANCELLED</span>" : (c && c.pending ? "<span style='color:#b45309;font-weight:800'>PENDING</span>" : (pass ? "<span style='color:var(--green);font-weight:800'>PASS</span>" : "<span style='color:var(--red);font-weight:800'>FAIL</span>")))+"</td>"+
      "<td class='print-hide'><span class='badge "+(r.status==="Completed"?"ok":r.status==="Pending"?"pend":"cancel")+"'>"+esc(r.status)+"</span>"+(r.reason && r.status==="Cancelled" ? "<div style='font-size:11px;color:var(--muted);max-width:170px'>"+esc(r.reason)+"</div>" : "")+"</td>"+
      "<td class='print-hide'>"+r.answered+"</td><td class='print-hide'>"+esc(r.timeUsed||"-")+"</td><td class='print-hide' style='white-space:nowrap'>"+esc(r.date)+"</td>"+
      "<td class='no-print' style='white-space:nowrap'>"+
        (r.status==="Cancelled" ? "<button class='btn small' data-act='pend' data-i='"+i+"' title='Status Cancelled se Pending kar dein - phir practical marks lag sakenge' style='background:linear-gradient(180deg,#f59e0b,#d97706);margin-right:5px'>⏳ Pending Karo</button>" : "")+
        "<button class='btn small red' data-act='del' data-i='"+i+"' title='Delete - the student can then retake the test'>🗑 Delete</button>"+
      "</td>";
    tb.appendChild(tr);
  });
  tb.querySelectorAll("button[data-act]").forEach(function(b){
    b.addEventListener("click", function(){
      const r = currentList[Number(b.dataset.i)];
      if(b.dataset.act==="del") delRecord(r);
      if(b.dataset.act==="pend") setRecordStatus(r, "Pending", b);
      if(b.dataset.act==="score"){ const inp2 = b.parentElement.querySelector("input"); saveScore(r, inp2, b); }
      if(b.dataset.act==="prac"){ const inp = b.parentElement.querySelector("input"); savePractical(r, inp, b); }
    });
  });
}
$("search").addEventListener("input", render);
$("filter-status").addEventListener("change", render);
$("filter-section") && $("filter-section").addEventListener("change", render);

// Practical marks save (central DB mein - refresh par zaya nahi hote)
async function savePractical(r, inp, btn){
  const v = (inp && inp.value || "").trim();
  let p = null;
  if(v !== ""){
    p = Number(v);
    if(isNaN(p) || p < 0 || p > 50){ alert("Practical marks 0 se 50 ke darmiyan hone chahiye."); return; }
  }
  btn.disabled = true; const old = btn.textContent; btn.textContent = "Saving...";
  try {
    const res = await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "set-practical", key: r.key, practical: p, pw: adminPw() }) });
    const data = await res.json().catch(() => ({}));
    if(!res.ok || !data.ok) throw new Error(data.error || res.status);
    const apply = function(x){ if(x.key === r.key){ if(p === null) delete x.practical; else x.practical = p; } };
    const local = getResults(); local.forEach(apply); saveResults(local);
    if(remoteCache) remoteCache.forEach(apply);
    render();
  } catch(e) {
    alert("Practical marks save nahi ho sake. Internet check karke dobara koshish karein.");
    btn.disabled = false; btn.textContent = old;
  }
}

// MCQ marks manually theek karo (masalan record mein 0 aya ho lekin asal marks aur hon)
async function saveScore(r, inp, btn){
  const v = (inp && inp.value || "").trim();
  const sc = Number(v);
  if(v === "" || isNaN(sc) || sc < 0 || sc > r.total){ alert("MCQ marks 0 se " + r.total + " ke darmiyan hone chahiye."); return; }
  if(sc === r.score) return;
  if(!confirm("'" + r.name + "' ke MCQ marks " + r.score + " se " + sc + " kar dein?\nPercentage aur combined result khud update ho jayega.")) return;
  btn.disabled = true; const old = btn.textContent; btn.textContent = "Saving...";
  try {
    const res = await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "set-score", key: r.key, score: sc, pw: adminPw() }) });
    const data = await res.json().catch(() => ({}));
    if(!res.ok || !data.ok) throw new Error(data.error || res.status);
    const apply = function(x){ if(x.key === r.key){ x.score = sc; x.correct = sc; x.percent = Math.round(sc / (x.total || 50) * 100); if(typeof x.answered === "number") x.wrong = Math.max(0, x.answered - sc); } };
    const local = getResults(); local.forEach(apply); saveResults(local);
    if(remoteCache) remoteCache.forEach(apply);
    render();
  } catch(e) {
    alert("MCQ marks save nahi ho sake. Internet check karke dobara koshish karein.");
    btn.disabled = false; btn.textContent = old;
  }
}

// Record ka status badlo (masalan Cancelled -> Pending) - central DB mein save hota hai
async function setRecordStatus(r, status, btn){
  if(!confirm("'" + r.name + "' ka status " + r.status + " se " + status + " kar dein?")) return;
  btn.disabled = true; const old = btn.textContent; btn.textContent = "Saving...";
  try {
    const res = await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "set-record-status", key: r.key, status: status, pw: adminPw() }) });
    const data = await res.json().catch(() => ({}));
    if(!res.ok || !data.ok) throw new Error(data.error || res.status);
    const apply = function(x){ if(x.key === r.key) x.status = status; };
    const local = getResults(); local.forEach(apply); saveResults(local);
    if(remoteCache) remoteCache.forEach(apply);
    render();
  } catch(e) {
    alert("Status change nahi ho saka. Internet check karke dobara koshish karein.");
    btn.disabled = false; btn.textContent = old;
  }
}

// Delete one (retake allow)
async function delRecord(r){
  if(!confirm("Delete the result of '" + r.name + "'?\nAfter this, the student will be able to take the test AGAIN.")) return;
  saveResults(getResults().filter(x => !(x.key===r.key && x.date===r.date)));
  if(remoteCache !== null){ remoteCache = remoteCache.filter(x => x.key !== r.key); }
  render();
  await apiPost({ action: "delete", key: r.key, pw: adminPw() });
  loadRemote();
}
// Clear all
$("btn-clear").addEventListener("click", async function(){
  if(!sourceResults().length) return;
  if(!confirm("Delete ALL results? They cannot be recovered.\nIt is better to save the CSV/PDF first.")) return;
  if(!confirm("Are you sure? ALL student records will be deleted.")) return;
  saveResults([]); remoteCache = []; render();
  await apiPost({ action: "clear", pw: adminPw() });
  loadRemote();
});

// Print All / PDF All -> print view (browser: Save as PDF)
function printAll(){ render(); setTimeout(function(){ window.print(); }, 60); }
$("btn-print-all").addEventListener("click", printAll);
$("btn-pdf-all").addEventListener("click", function(){
  alert("One single PDF will be created containing ALL students.\nIn the print window, select 'Save as PDF' as the Destination / Printer, then press Save.");
  printAll();
});

// CSV / Excel export
$("btn-csv").addEventListener("click", function(){
  const all = sourceResults();
  if(!all.length){ alert("There are no results to export."); return; }
  let csv = "S.No,Student Name,Section,Course,MCQ Marks,MCQ Total,Practical Marks,Total Marks,Percent,Grade,Position,Result,Status,Reason,Answered,Time Used,Date\n";
  all.forEach(function(r,i){
    const posMap2=positionMap(all); const cc=combined(r); const vals=[i+1,r.name,sectionLabel(r),COURSE_NAME,r.score,r.total,(r.total!==50?"-":(typeof r.practical==="number"?r.practical:"Pending")),(cc?(cc.pending?"-":cc.total):r.score),(cc?(cc.pending?"-":cc.pct+"%"):r.percent+"%"),gradeOf(r).g,(posMap2[r.key+"|"+r.date]||"-"),(r.status==="Cancelled"?"CANCELLED":(cc&&cc.pending?"PENDING":(isPass(r)?"PASS":"FAIL"))),r.status,(r.reason||""),r.answered,(r.timeUsed||""),r.date];
    csv += vals.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")+"\n";
  });
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));
  a.download="STC-FullStack-Results.csv"; a.click(); URL.revokeObjectURL(a.href);
});
})();
