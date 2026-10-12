// ===== Full Stack Web Development Test (HTML + CSS) - Student App =====
(function(){
"use strict";
const $ = id => document.getElementById(id);
const norm = s => (s||"").trim().toLowerCase().replace(/\s+/g," ");
const studentKey = (name) => norm(name);

let state = null; // {name, questions:[], answers:{qid:idx}, current, startedAt, left, timerId, finished}

function getResults(){ try { return JSON.parse(localStorage.getItem(CONFIG.RESULTS_KEY)) || []; } catch(e){ return []; } }
function saveResults(r){ localStorage.setItem(CONFIG.RESULTS_KEY, JSON.stringify(r)); }

function shuffle(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function show(view){ ["view-home","view-test","view-result","view-cancelled"].forEach(v=>$(v).classList.toggle("hidden", v!==view)); window.scrollTo(0,0); }

// ---------- Entry ----------
$("entry-form").addEventListener("submit", async function(e){
  e.preventDefault();
  const name = $("student-name").value.trim();
  const err = $("entry-err"); err.style.display="none";
  if(name.length < 3){ err.textContent = "Please enter your full name."; err.style.display="block"; return; }

  const key = studentKey(name);
  function showPrev(p){
    err.innerHTML = "⛔ <b>" + name + "</b> has already taken this test - Status: <b>" + p.status + "</b>, Score: <b>" + p.score + "/100</b> (" + p.date + ").<br>One-time policy: a second attempt is not allowed. If there is an issue, please contact the admin.";
    err.style.display="block";
  }
  const prev = getResults().find(r => r.key === key);
  if(prev){ showPrev(prev); return; }
  // Central check: has this student already taken the test on ANY device?
  const btn = $("entry-form").querySelector("button[type=submit]");
  const oldBtnText = btn ? btn.textContent : "";
  if(btn){ btn.disabled = true; btn.textContent = "Checking..."; }
  let remoteRec = null;
  try {
    const resp = await fetch(CONFIG.API + "?action=check&key=" + encodeURIComponent(key));
    if(resp.ok){ const d = await resp.json(); if(d.exists) remoteRec = d.record; }
  } catch(e2){ /* offline / API down: local check above still applies */ }
  if(btn){ btn.disabled = false; btn.textContent = oldBtnText; }
  if(remoteRec){ showPrev(remoteRec); return; }
  if(!confirm("You are about to start the test.\n\n• 100 MCQs, 100 Minutes\n• Tab/page change or close = TEST CANCELLED\n• This test can be taken ONLY ONCE\n\nPress OK to start the test in FULL SCREEN.")) return;
  startTest(name, key);
});

function startTest(name, key){
  state = {
    name, key,
    questions: shuffle(QUESTIONS),
    answers: {},
    current: 0,
    startedAt: Date.now(),
    left: CONFIG.DURATION_MINUTES * 60,
    finished: false,
    fsEntered: false
  };
  // Active flag: page close/refresh par cancel record karne ke liye
  localStorage.setItem(CONFIG.ACTIVE_KEY, JSON.stringify({key, name, startedAt: state.startedAt}));
  $("th-name").textContent = name;
  show("view-test");
  renderQuestion(); buildPalette(); updateProgress(); updateTimerText();
  // Fullscreen
  const el = document.documentElement;
  if(el.requestFullscreen){ el.requestFullscreen().then(()=>{ state.fsEntered = true; }).catch(()=>{}); }
  state.timerId = setInterval(tick, 1000);
}

function tick(){
  if(!state || state.finished) return;
  state.left--;
  updateTimerText();
  if(state.left <= 0){ finishTest("Completed", "Time Up - Auto Submitted"); }
}
function fmt(s){ s=Math.max(0,s); const h=String(Math.floor(s/3600)).padStart(2,"0"), m=String(Math.floor((s%3600)/60)).padStart(2,"0"), sec=String(s%60).padStart(2,"0"); return h+":"+m+":"+sec; }
function updateTimerText(){ const t=$("timer"); t.textContent = fmt(state.left); t.classList.toggle("low", state.left<=300); }

// ---------- Rendering ----------
function renderQuestion(){
  const q = state.questions[state.current];
  $("q-topic").textContent = q.topic;
  $("q-count").textContent = "Question " + (state.current+1) + " / " + state.questions.length;
  $("q-text").textContent = q.q;
  const box = $("q-options"); box.innerHTML = "";
  const letters = ["A","B","C","D"];
  q.options.forEach(function(opt, idx){
    const d = document.createElement("div");
    d.className = "opt" + (state.answers[q.id]===idx ? " sel" : "");
    const lt = document.createElement("span"); lt.className="letter"; lt.textContent = letters[idx];
    const tx = document.createElement("span"); tx.textContent = opt;
    d.appendChild(lt); d.appendChild(tx);
    d.addEventListener("click", function(){
      state.answers[q.id] = idx;
      renderQuestion(); buildPalette(); updateProgress();
    });
    box.appendChild(d);
  });
  $("btn-prev").disabled = state.current===0;
  $("btn-next").disabled = state.current===state.questions.length-1;
  document.querySelectorAll("#palette button").forEach((b,i)=>b.classList.toggle("cur", i===state.current));
}
function buildPalette(){
  const p = $("palette"); p.innerHTML="";
  state.questions.forEach(function(q, i){
    const b = document.createElement("button"); b.type="button"; b.textContent = i+1;
    if(state.answers[q.id]!==undefined) b.className="done";
    if(i===state.current) b.classList.add("cur");
    b.addEventListener("click", function(){ state.current=i; renderQuestion(); });
    p.appendChild(b);
  });
}
function answeredCount(){ return Object.keys(state.answers).length; }
function updateProgress(){ const c=answeredCount(); $("th-answered").textContent=c; $("progress").style.width=(c/state.questions.length*100)+"%"; }

$("btn-prev").addEventListener("click", function(){ if(state.current>0){ state.current--; renderQuestion(); }});
$("btn-next").addEventListener("click", function(){ if(state.current<state.questions.length-1){ state.current++; renderQuestion(); }});
$("btn-my-pdf").addEventListener("click", function(){
  if(!lastResult){ alert("Result is not available yet."); return; }
  buildStudentSlip();
  const oldTitle = document.title;
  document.title = "Result - " + lastResult.name + " - STC Umerkot";
  const doPrint = function(){ window.print(); setTimeout(function(){ document.title = oldTitle; }, 400); };
  const simg = document.querySelector("#student-print-area img.sign-photo");
  if(simg && !simg.complete){ simg.onload = function(){ setTimeout(doPrint, 30); }; simg.onerror = function(){ doPrint(); }; }
  else { setTimeout(doPrint, 60); }
});
$("btn-submit").addEventListener("click", function(){
  const un = state.questions.length - answeredCount();
  const msg = un>0 ? ("There are still " + un + " unanswered questions.\nSubmit the test anyway?") : "Submit the test finally? No changes can be made afterwards.";
  if(confirm(msg)) finishTest("Completed", "Submitted by Student");
});

// ---------- Finish / Cancel ----------
function scoreNow(){
  let correct=0;
  state.questions.forEach(q=>{ if(state.answers[q.id]===q.answer) correct++; });
  return correct;
}
function remoteSave(rec, useBeacon){
  try {
    const payload = JSON.stringify({ action: "save", record: rec });
    if(useBeacon && navigator.sendBeacon){ navigator.sendBeacon(CONFIG.API, new Blob([payload], { type: "application/json" })); return; }
    fetch(CONFIG.API, { method: "POST", headers: { "Content-Type": "application/json" }, body: payload, keepalive: true }).catch(function(){});
  } catch(e){}
}
function persistResult(status, reason, useBeacon){
  const correct = scoreNow();
  const usedSec = CONFIG.DURATION_MINUTES*60 - state.left;
  const rec = {
    key: state.key, name: state.name,
    score: correct, total: state.questions.length, correct: correct,
    wrong: answeredCount()-correct, answered: answeredCount(),
    percent: Math.round(correct/state.questions.length*100),
    status: status, reason: reason,
    timeUsed: fmt(usedSec),
    date: new Date().toLocaleString("en-GB", { timeZone: "Asia/Karachi" })
  };
  const all = getResults(); all.push(rec); saveResults(all);
  localStorage.removeItem(CONFIG.ACTIVE_KEY);
  remoteSave(rec, useBeacon);
  return rec;
}
function cleanup(){
  state.finished = true;
  if(state.timerId) clearInterval(state.timerId);
  if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(()=>{});
}
let lastResult = null;
function escHtml(s){ return String(s==null?"":s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function gradeStr(p){ if(p>=80) return "A+"; if(p>=70) return "A"; if(p>=60) return "B"; if(p>=50) return "C"; if(p>=40) return "D"; return "F"; }
const SIGN_DATA_URI = "data:image/png;base64,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";
function buildStudentSlip(){
  const rec = lastResult; if(!rec) return;
  const pass = rec.percent >= CONFIG.PASS_PERCENT;
  document.getElementById("student-print-area").innerHTML =
  "<div class='slip' style='background:#fff;padding:10px'>" +
    "<div class='slip-head'><img src='assets/logo.png'><h2 style='color:var(--navy)'>Super Sys-Tech Computers Centre, Umerkot</h2>" +
    "<div style='font-size:12.5px;color:#5b7186'>1st Floor, Jameel Market, Umerkot &bull; 0332-3350790 | 0345-3279790 &bull; stc.edu.pk</div>" +
    "<h3 style='margin-top:10px;letter-spacing:2px'>RESULT SLIP</h3><div style='font-weight:700'>Full Stack Web Development Test (HTML + CSS)</div></div>" +
    "<table><tbody>" +
    "<tr><td>Student Name</td><td><b>" + escHtml(rec.name) + "</b></td></tr>" +
    "<tr><td>Marks Obtained</td><td><b>" + rec.score + " / " + rec.total + "</b></td></tr>" +
    "<tr><td>Percentage</td><td><b>" + rec.percent + "%</b></td></tr>" +
    "<tr><td>Grade</td><td><b>" + gradeStr(rec.percent) + "</b></td></tr>" +
    "<tr><td>Result</td><td><b style='font-size:17px;color:" + (pass ? "#0b7a55" : "#d92d20") + "'>" + (pass ? "PASS" : "FAIL") + "</b></td></tr>" +
    "<tr><td>Date / Time</td><td>" + escHtml(rec.date) + "</td></tr>" +
    "</tbody></table>" +
    "<div style='display:flex;justify-content:flex-end;margin-top:36px'><div style='text-align:center;font-size:12.5px;font-weight:700;color:#0a2540'><img class='sign-photo' src='" + SIGN_DATA_URI + "' style='display:block;height:32px;max-width:180px;object-fit:contain;margin:0 auto 2px'><div style='border-bottom:1.6px solid #0a2540;width:200px;margin:0 auto 5px;height:6px'></div>Instructor Signature</div></div>" +
    "<p style='text-align:center;color:#5b7186;font-size:11.5px;margin-top:22px'>Computer generated result slip - Super Sys-Tech Computers Centre, Umerkot (Since 1997)</p>" +
  "</div>";
}
function finishTest(status, reason){
  if(!state || state.finished) return;
  const rec = persistResult(status, reason);
  lastResult = rec;
  cleanup();
  $("res-score").textContent = rec.score;
  $("res-percent").textContent = rec.percent + "%";
  $("res-correct").textContent = rec.correct;
  $("res-name").textContent = rec.name;
  $("res-time").textContent = rec.timeUsed;
  const pass = rec.percent >= CONFIG.PASS_PERCENT;
  $("score-circle").classList.toggle("fail", !pass);
  $("res-status").innerHTML = pass ? "🎉 <span style='color:var(--green)'>PASS</span>" : "❌ <span style='color:var(--red)'>FAIL</span> - Passing marks: " + CONFIG.PASS_PERCENT + "%";
  show("view-result");
}
function cancelTest(reason){
  if(!state || state.finished) return;
  const rec = persistResult("Cancelled", reason);
  cleanup();
  $("cancel-reason").textContent = "Reason: " + reason;
  $("cx-name").textContent = rec.name; $("cx-answered").textContent = rec.answered;
  show("view-cancelled");
}

// ---------- STRICT MODE ----------
document.addEventListener("visibilitychange", function(){
  if(state && !state.finished && document.hidden){ cancelTest("Tab/page changed or browser was minimized"); }
});
document.addEventListener("fullscreenchange", function(){
  if(state && !state.finished && state.fsEntered && !document.fullscreenElement){ cancelTest("Exited full-screen mode"); }
});
window.addEventListener("blur", function(){
  // On mobile, the notification shade etc. can also cause blur - visibilitychange is the reliable final check.
});
window.addEventListener("beforeunload", function(e){
  if(state && !state.finished){ e.preventDefault(); e.returnValue = ""; }
});
window.addEventListener("pagehide", function(){
  if(state && !state.finished){
    // Page is closing - the cancellation record must be saved (synchronous localStorage)
    try { persistResult("Cancelled", "Page / browser was closed", true); state.finished = true; } catch(e){}
  }
});
document.addEventListener("contextmenu", function(e){ if(state && !state.finished) e.preventDefault(); });
document.addEventListener("copy", function(e){ if(state && !state.finished) e.preventDefault(); });
document.addEventListener("cut", function(e){ if(state && !state.finished) e.preventDefault(); });
document.addEventListener("keydown", function(e){
  if(!state || state.finished) return;
  if((e.ctrlKey||e.metaKey) && ["c","v","u","p","s"].includes(e.key.toLowerCase())) e.preventDefault();
  if(e.key === "F12") e.preventDefault();
});

// If the active flag survives a page reload (an old crashed/closed test),
// that attempt was already recorded as Cancelled on pagehide - just clear the flag.
(function(){
  const a = localStorage.getItem(CONFIG.ACTIVE_KEY);
  if(a){ localStorage.removeItem(CONFIG.ACTIVE_KEY); }
})();
})();
