// ===== Super Sys-Tech Computers Centre Umerkot - Test Configuration =====
// The admin password can be changed here
const CONFIG = {
  INSTITUTE: "Super Sys-Tech Computers Centre",
  CITY: "Umerkot",
  COURSE: "Full Stack Web Development Test",
  TOTAL_QUESTIONS: 50,
  DURATION_MINUTES: 50,
  SECTIONS: [
    { id: "basic",    name: "Basic (HTML Only)",        short: "Basic",    desc: "Only HTML — Topics 1 to 9" },
    { id: "htmlcss",  name: "HTML + CSS",               short: "HTML + CSS", desc: "HTML + CSS — Topics 1 to 31" },
    { id: "advanced", name: "Advanced (HTML + CSS + JS)", short: "Advanced", desc: "HTML + CSS + JavaScript — JS heavy" }
  ],
  PASS_PERCENT: 40,
  TEST_OPEN: false, // false = students cannot start the test (admin panel keeps working)
  // Admin password is NOT stored in code. It lives only in Netlify
  // environment variable ADMIN_PASSWORD and is verified server-side.
  API: "/api/results",
  RESULTS_KEY: "stc_fs_results_v1",
  ACTIVE_KEY: "stc_fs_active_v1"
};
