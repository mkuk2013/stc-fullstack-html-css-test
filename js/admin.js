// ===== Admin Panel - Results, Print, PDF (Save as PDF), CSV =====
(function(){
"use strict";
const $ = id => document.getElementById(id);
function getResults(){ try { return JSON.parse(localStorage.getItem(CONFIG.RESULTS_KEY)) || []; } catch(e){ return []; } }
function saveResults(r){ localStorage.setItem(CONFIG.RESULTS_KEY, JSON.stringify(r)); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

let currentList = [];
let remoteCache = null; // null = central list not loaded yet / unavailable (local fallback)
function adminPw(){ return sessionStorage.getItem("stc_admin_pw") || ""; }
function sourceResults(){ return remoteCache !== null ? remoteCache : getResults(); }
async function loadRemote(){
  const pw = adminPw(); if(!pw) return;
  try {
    const resp = await fetch(CONFIG.API + "?action=list&pw=" + encodeURIComponent(pw));
    if(resp.ok){ const d = await resp.json(); remoteCache = d.results || []; render(); }
  } catch(e){ /* keep local fallback */ }
}
async function apiPost(body){
  try { await fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); } catch(e){}
}
if(sessionStorage.getItem("stc_admin")==="1"){ showPanel(); }
$("login-form").addEventListener("submit", function(e){
  e.preventDefault();
  if($("admin-pass").value === CONFIG.ADMIN_PASSWORD){
    sessionStorage.setItem("stc_admin","1"); sessionStorage.setItem("stc_admin_pw", $("admin-pass").value); showPanel();
  } else {
    const er=$("login-err"); er.textContent="⛔ Incorrect password. Please try again."; er.style.display="block";
  }
});
$("btn-logout") && $("btn-logout").addEventListener("click", function(){ sessionStorage.removeItem("stc_admin"); sessionStorage.removeItem("stc_admin_pw"); location.reload(); });

function showPanel(){ $("admin-login").classList.add("hidden"); $("admin-panel").classList.remove("hidden"); render(); loadRemote(); }
function isPass(r){ return r.status==="Completed" && r.percent >= CONFIG.PASS_PERCENT; }
function gradeOf(r){
  if(r.status!=="Completed") return {g:"—", cls:"gx"};
  const p = r.percent;
  if(p>=80) return {g:"A+", cls:"ga"};
  if(p>=70) return {g:"A", cls:"ga"};
  if(p>=60) return {g:"B", cls:"gb"};
  if(p>=50) return {g:"C", cls:"gc"};
  if(p>=40) return {g:"D", cls:"gd"};
  return {g:"F", cls:"gf"};
}
function positionMap(all){
  const done = all.filter(r=>r.status==="Completed").slice().sort((a,b)=>b.score-a.score);
  const map = {}; let lastScore=null, lastRank=0;
  done.forEach(function(r,i){ if(r.score!==lastScore){ lastRank=i+1; lastScore=r.score; } map[r.key+"|"+r.date]=lastRank; });
  return map;
}

function render(){
  const q = ($("search").value||"").toLowerCase();
  const f = $("filter-status").value;
  const all = sourceResults();
  // Stats (over all results)
  $("st-total").textContent = all.length;
  $("st-completed").textContent = all.filter(r=>r.status==="Completed").length;
  $("st-cancelled").textContent = all.filter(r=>r.status==="Cancelled").length;
  $("st-pass").textContent = all.filter(isPass).length;
  $("st-avg").textContent = all.length ? Math.round(all.reduce((s,r)=>s+r.percent,0)/all.length) + "%" : "0%";
  $("st-high").textContent = all.length ? Math.max.apply(null, all.map(r=>r.score)) : 0;
  $("print-date").textContent = "Printed on: " + new Date().toLocaleString("en-GB",{timeZone:"Asia/Karachi"});
  $("print-summary").textContent = "Total Students: " + all.length + "  •  Completed: " + all.filter(r=>r.status==="Completed").length + "  •  Cancelled: " + all.filter(r=>r.status==="Cancelled").length + "  •  Pass: " + all.filter(isPass).length;

  const posMap = positionMap(all);
  currentList = all.filter(r => (!f || r.status===f) && (!q || r.name.toLowerCase().includes(q)));
  const tb = $("results-body"); tb.innerHTML="";
  $("no-results").classList.toggle("hidden", all.length>0);
  currentList.forEach(function(r, i){
    const tr = document.createElement("tr");
    const pass = isPass(r);
    tr.innerHTML =
      "<td>"+(i+1)+"</td><td><b>"+esc(r.name)+"</b></td>"+
      "<td><b>"+r.score+"</b> / "+r.total+"</td><td><b>"+r.percent+"%</b></td>"+
      (function(){ const gr=gradeOf(r); return "<td class='print-hide'><span class='grade "+gr.cls+"'>"+gr.g+"</span></td>"; })()+
      (function(){ const p=posMap[r.key+"|"+r.date]; return "<td class='print-hide'>"+(p? "<span class='pos "+(p===1?"p1":p===2?"p2":p===3?"p3":"")+"'>"+p+"</span>" : "—")+"</td>"; })()+
      "<td class='print-hide'>"+(r.status==="Cancelled" ? "<span style='color:var(--red);font-weight:800'>CANCELLED</span>" : (pass ? "<span style='color:var(--green);font-weight:800'>PASS</span>" : "<span style='color:var(--red);font-weight:800'>FAIL</span>"))+"</td>"+
      "<td class='print-hide'><span class='badge "+(r.status==="Completed"?"ok":"cancel")+"'>"+esc(r.status)+"</span>"+(r.reason && r.status==="Cancelled" ? "<div style='font-size:11px;color:var(--muted);max-width:170px'>"+esc(r.reason)+"</div>" : "")+"</td>"+
      "<td class='print-hide'>"+r.answered+"</td><td class='print-hide'>"+esc(r.timeUsed||"-")+"</td><td class='print-hide' style='white-space:nowrap'>"+esc(r.date)+"</td>"+
      "<td class='no-print' style='white-space:nowrap'>"+
        "<button class='btn small red' data-act='del' data-i='"+i+"' title='Delete - the student can then retake the test'>🗑 Delete</button>"+
      "</td>";
    tb.appendChild(tr);
  });
  tb.querySelectorAll("button[data-act]").forEach(function(b){
    b.addEventListener("click", function(){
      const r = currentList[Number(b.dataset.i)];
      if(b.dataset.act==="del") delRecord(r);
    });
  });
}
$("search").addEventListener("input", render);
$("filter-status").addEventListener("change", render);

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
  let csv = "S.No,Student Name,Marks Obtained,Total Marks,Percent,Grade,Position,Result,Status,Reason,Answered,Time Used,Date\n";
  all.forEach(function(r,i){
    const posMap2=positionMap(all); const vals=[i+1,r.name,r.score,r.total,r.percent+"%",gradeOf(r).g,(posMap2[r.key+"|"+r.date]||"-"),(r.status==="Cancelled"?"CANCELLED":(isPass(r)?"PASS":"FAIL")),r.status,(r.reason||""),r.answered,(r.timeUsed||""),r.date];
    csv += vals.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")+"\n";
  });
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));
  a.download="STC-FullStack-HTML-CSS-Results.csv"; a.click(); URL.revokeObjectURL(a.href);
});
})();
