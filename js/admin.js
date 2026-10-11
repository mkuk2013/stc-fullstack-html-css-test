// ===== Admin Panel - Results, Print, PDF (Save as PDF), CSV =====
(function(){
"use strict";
const $ = id => document.getElementById(id);
function getResults(){ try { return JSON.parse(localStorage.getItem(CONFIG.RESULTS_KEY)) || []; } catch(e){ return []; } }
function saveResults(r){ localStorage.setItem(CONFIG.RESULTS_KEY, JSON.stringify(r)); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

if(sessionStorage.getItem("stc_admin")==="1"){ showPanel(); }
$("login-form").addEventListener("submit", function(e){
  e.preventDefault();
  if($("admin-pass").value === CONFIG.ADMIN_PASSWORD){
    sessionStorage.setItem("stc_admin","1"); showPanel();
  } else {
    const er=$("login-err"); er.textContent="⛔ Ghalat password. Dobara koshish karein."; er.style.display="block";
  }
});
$("btn-logout") && $("btn-logout").addEventListener("click", function(){ sessionStorage.removeItem("stc_admin"); location.reload(); });

function showPanel(){ $("admin-login").classList.add("hidden"); $("admin-panel").classList.remove("hidden"); render(); }
function isPass(r){ return r.status==="Completed" && r.percent >= CONFIG.PASS_PERCENT; }

let currentList = [];
function render(){
  const q = ($("search").value||"").toLowerCase();
  const f = $("filter-status").value;
  const all = getResults();
  // Stats (sab par)
  $("st-total").textContent = all.length;
  $("st-completed").textContent = all.filter(r=>r.status==="Completed").length;
  $("st-cancelled").textContent = all.filter(r=>r.status==="Cancelled").length;
  $("st-pass").textContent = all.filter(isPass).length;
  $("st-avg").textContent = all.length ? Math.round(all.reduce((s,r)=>s+r.percent,0)/all.length) + "%" : "0%";
  $("st-high").textContent = all.length ? Math.max.apply(null, all.map(r=>r.score)) : 0;
  $("print-date").textContent = "Printed on: " + new Date().toLocaleString("en-GB",{timeZone:"Asia/Karachi"});
  $("print-summary").textContent = "Total Students: " + all.length + "  •  Completed: " + all.filter(r=>r.status==="Completed").length + "  •  Cancelled: " + all.filter(r=>r.status==="Cancelled").length + "  •  Pass: " + all.filter(isPass).length;

  currentList = all.filter(r => (!f || r.status===f) && (!q || r.name.toLowerCase().includes(q)));
  const tb = $("results-body"); tb.innerHTML="";
  $("no-results").classList.toggle("hidden", all.length>0);
  currentList.forEach(function(r, i){
    const tr = document.createElement("tr");
    const pass = isPass(r);
    tr.innerHTML =
      "<td>"+(i+1)+"</td><td><b>"+esc(r.name)+"</b></td>"+
      "<td><b>"+r.score+"</b>/"+r.total+"</td><td>"+r.percent+"%</td>"+
      "<td>"+(r.status==="Cancelled" ? "<span style='color:var(--red);font-weight:800'>CANCELLED</span>" : (pass ? "<span style='color:var(--green);font-weight:800'>PASS</span>" : "<span style='color:var(--red);font-weight:800'>FAIL</span>"))+"</td>"+
      "<td><span class='badge "+(r.status==="Completed"?"ok":"cancel")+"'>"+esc(r.status)+"</span>"+(r.reason && r.status==="Cancelled" ? "<div style='font-size:11px;color:var(--muted);max-width:170px'>"+esc(r.reason)+"</div>" : "")+"</td>"+
      "<td>"+r.answered+"</td><td>"+esc(r.timeUsed||"-")+"</td><td style='white-space:nowrap'>"+esc(r.date)+"</td>"+
      "<td class='no-print' style='white-space:nowrap'>"+
        "<button class='btn small red' data-act='del' data-i='"+i+"' title='Delete - student dobara test de sakega'>🗑 Delete</button>"+
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
function delRecord(r){
  if(!confirm("'" + r.name + "' ka result DELETE karein?\nIs ke baad ye student DOBARA test de sakega.")) return;
  saveResults(getResults().filter(x => !(x.key===r.key && x.date===r.date)));
  render();
}
// Clear all
$("btn-clear").addEventListener("click", function(){
  if(!getResults().length) return;
  if(!confirm("SAB results delete kar dein? Ye wapas nahi ayenge.\nPehle CSV/PDF save kar lena behtar hai.")) return;
  if(!confirm("Pakka? TAMAM students ke records delete ho jayenge.")) return;
  saveResults([]); render();
});

// Print All / PDF All -> print view (browser: Save as PDF)
function printAll(){ render(); setTimeout(function(){ window.print(); }, 60); }
$("btn-print-all").addEventListener("click", printAll);
$("btn-pdf-all").addEventListener("click", function(){
  alert("EK HI PDF bane gi jisme SAB students ke naam honge.\nPrint window mein Destination / Printer mein 'Save as PDF' select karein, phir Save dabayein.");
  printAll();
});

// CSV / Excel export
$("btn-csv").addEventListener("click", function(){
  const all = getResults();
  if(!all.length){ alert("Export ke liye koi result nahi hai."); return; }
  let csv = "No,Student Name,Score,Total,Percent,Result,Status,Reason,Answered,Time Used,Date\n";
  all.forEach(function(r,i){
    const vals=[i+1,r.name,r.score,r.total,r.percent+"%",(r.status==="Cancelled"?"CANCELLED":(isPass(r)?"PASS":"FAIL")),r.status,(r.reason||""),r.answered,(r.timeUsed||""),r.date];
    csv += vals.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")+"\n";
  });
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob(["\ufeff"+csv],{type:"text/csv"}));
  a.download="STC-FullStack-HTML-CSS-Results.csv"; a.click(); URL.revokeObjectURL(a.href);
});
})();
