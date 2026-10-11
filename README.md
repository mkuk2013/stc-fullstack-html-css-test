# Full Stack Web Development Test (HTML + CSS) - STC Umerkot

Official online MCQ test website of **Super Sys-Tech Computers Centre, Umerkot**.

## Features
- **100 MCQs** - HTML (Topics 1-9) + CSS (Topics 10-29), based on the complete syllabus
- **Student Entry:** The student simply enters their Full Name and the test starts (no roll number)
- **100 Minutes Timer** - auto-submit when time ends
- **One-Time Attempt:** Each student can take the test only once
- **Strict Policy:**
  - Tab change / minimize / opening another page = **Test Cancelled**
  - Page close / refresh = **Test Cancelled** (the attempt is recorded)
  - Exiting full-screen = **Test Cancelled**
  - Copy / paste / right-click disabled
- **Instant Result:** Score, percentage and PASS/FAIL immediately on the screen, plus a **Download My Result (PDF)** button for the student's own signed result slip
- **Admin Panel (`admin.html`, password protected):**
  - Professional result sheet with letterhead, grades and merit positions; in PDF only **Name, Marks, Percentage** are printed
  - **Download Combined PDF** - all students on ONE result sheet (via the print window's "Save as PDF"); no separate per-student PDFs from the admin panel
  - CSV export, search, filters, statistics
  - Deleting a student's record allows that student to retake the test

## Note
Results are saved in the local storage of the browser/device where the student takes the test (institute lab model). The admin panel must be opened on the same computer/browser. A backend (database) version can be built separately for central multi-device results.

## Run Locally
Any static server: `python3 -m http.server 8000`, then open `http://localhost:8000`

## Deploy
Static site - Netlify / GitHub Pages / any static hosting. Build command: none, Publish directory: root (`.`)
