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
$("entry-form").addEventListener("submit", function(e){
  e.preventDefault();
  const name = $("student-name").value.trim();
  const err = $("entry-err"); err.style.display="none";
  if(name.length < 3){ err.textContent = "Please enter your full name."; err.style.display="block"; return; }

  const key = studentKey(name);
  const prev = getResults().find(r => r.key === key);
  if(prev){
    err.innerHTML = "⛔ <b>" + name + "</b> pehle hi test de chuka hai - Status: <b>" + prev.status + "</b>, Score: <b>" + prev.score + "/100</b> (" + prev.date + ").<br>One-time policy: dobara attempt allowed nahi. Masla ho to admin se rabta karein.";
    err.style.display="block"; return;
  }
  if(!confirm("Test start karne ja rahe hain?\n\n• 100 MCQs, 100 Minutes\n• Tab/page change ya close = TEST CANCEL\n• Ye sirf EK dafa diya ja sakta hai\n\nOK dabayein to test FULL SCREEN mein start hoga.")) return;
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
$("btn-submit").addEventListener("click", function(){
  const un = state.questions.length - answeredCount();
  const msg = un>0 ? ("Abhi " + un + " sawal jawab ke baghair hain.\nPhir bhi Final Submit karein?") : "Final Submit karein? Is ke baad koi change nahi ho sakta.";
  if(confirm(msg)) finishTest("Completed", "Submitted by Student");
});

// ---------- Finish / Cancel ----------
function scoreNow(){
  let correct=0;
  state.questions.forEach(q=>{ if(state.answers[q.id]===q.answer) correct++; });
  return correct;
}
function persistResult(status, reason){
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
  return rec;
}
function cleanup(){
  state.finished = true;
  if(state.timerId) clearInterval(state.timerId);
  if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(()=>{});
}
function finishTest(status, reason){
  if(!state || state.finished) return;
  const rec = persistResult(status, reason);
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
  if(state && !state.finished && document.hidden){ cancelTest("Tab / page change ya browser minimize kiya gaya"); }
});
document.addEventListener("fullscreenchange", function(){
  if(state && !state.finished && state.fsEntered && !document.fullscreenElement){ cancelTest("Full screen se bahar nikla gaya"); }
});
window.addEventListener("blur", function(){
  // Mobile par notification shade etc. par bhi blur hota hai - visibilitychange hi final check hai.
});
window.addEventListener("beforeunload", function(e){
  if(state && !state.finished){ e.preventDefault(); e.returnValue = ""; }
});
window.addEventListener("pagehide", function(){
  if(state && !state.finished){
    // Page close ho raha hai - cancel record lazmi save karo (sync localStorage)
    try { persistResult("Cancelled", "Page / browser close kar diya gaya"); state.finished = true; } catch(e){}
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

// Agar page reload ke baad active flag reh gaya ho (purana crashed/closed test),
// wo attempt pehle hi pagehide par Cancelled record ho chuki hoti hai - flag saaf rakho.
(function(){
  const a = localStorage.getItem(CONFIG.ACTIVE_KEY);
  if(a){ localStorage.removeItem(CONFIG.ACTIVE_KEY); }
})();
})();
