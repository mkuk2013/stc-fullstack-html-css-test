# Full Stack Web Development Test (HTML + CSS)

**Super Sys-Tech Computers Centre, Umerkot** - Online MCQ Test Website

## Features
- **100 MCQs** from the Full Stack syllabus: HTML Topics 1-9 + CSS Topics 10-29 (all 29 topics covered)
- **Student Entry:** Student pehle apna Full Name aur Roll No likhta hai, phir test start hota hai
- **Timer:** 100 MCQs ke liye 100 Minutes - time khatam hone par auto-submit
- **One-Time Attempt:** Har student sirf ek dafa test de sakta hai
- **Strict Policy:**
  - Tab / page change, browser minimize = **Test Cancelled**
  - Page close / refresh = **Test Cancelled** (attempt record ho jati hai)
  - Full Screen mode - bahar nikalne par cancel
  - Copy / paste / right-click disabled
- **Admin Panel (`/admin.html`):**
  - Password: `STC@Admin2026` (change in `js/config.js`)
  - Sab students ke results, stats (total, pass, average, highest)
  - Search / filter
  - **Print All Results** aur **PDF Download** (Print window mein "Save as PDF")
  - Har student ki alag **Result Slip** print / PDF
  - **CSV / Excel** export
  - Ek student ka record delete karne se wo dobara test de sakta hai

## Note on Results Storage
Results usi browser/device ke local storage mein save hote hain jahan student test deta hai (institute lab model). Admin panel bhi usi computer/browser mein kholna hai. Multi-device central results ke liye backend (database) version alag se banaya ja sakta hai.

## Run Locally
Koi bhi static server: `python3 -m http.server 8000` phir `http://localhost:8000`

## Deploy
Static site - Netlify / GitHub Pages / koi bhi static hosting. Build command: none, Publish directory: root (`.`)
