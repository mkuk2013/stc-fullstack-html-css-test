// ===== Super Sys-Tech Computers Centre Umerkot - Test Configuration =====
// The admin password can be changed here
const CONFIG = {
  INSTITUTE: "Super Sys-Tech Computers Centre",
  CITY: "Umerkot",
  COURSE: "Full Stack Web Development Test (HTML + CSS)",
  TOTAL_QUESTIONS: 100,
  DURATION_MINUTES: 100,
  PASS_PERCENT: 40,
  TEST_OPEN: false, // false = students cannot start the test (admin panel keeps working)
  // Admin password is NOT stored in code. It lives only in Netlify
  // environment variable ADMIN_PASSWORD and is verified server-side.
  API: "/api/results",
  RESULTS_KEY: "stc_fs_results_v1",
  ACTIVE_KEY: "stc_fs_active_v1"
};
