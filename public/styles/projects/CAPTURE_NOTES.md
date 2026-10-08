# Fresh application captures — 8 October 2026

Every image rendered by `src/data/questProjects.js` comes from the freshly run local implementation under Documents/projects, rather than an existing project image.

- Groundwork: current desktop React application and local FastAPI engine. One workspace view and one Assistant view using personal sample files. Assistant is in its genuine offline retrieved-passages mode; online generation requires a configured provider.
- Tenvora: current web application and .NET backend. The portfolio selects the sales notebook and customer balances to show the core business workflow. Sample sales and customers were created through the real API in an isolated local PostgreSQL database.
- LogiFlow: current React application and Spring Boot backend, with the application's seed data in an isolated local PostgreSQL database. Trip board and actual trip map.
- Recon: actual `recon demo` CLI output and generated HTML report: 35 checks, 33 passing, two intentionally demonstrated failures.

Captured through Chromium at 1440 × 900 with a 2× device scale. Images are browser screenshots with no fabricated application UI. Capture scripts are retained under scripts/. The résumé PDF is copied directly from CVs/master/Tran_Trong_Nhan_CV.pdf.

## Final playable-village selection
- Groundwork: newest local Files view with Weekly-plan.md preview. Only workspace.png is presented.
- Recon: actual `recon demo` CLI output captured with an xterm terminal renderer, not its HTML report. 35 checks, 33 passed, two deliberate demo defects. Raw ANSI output remains in ignored capture artifacts.
- LogiFlow: current dispatcher trip workflow and map, backed by the local API and sample trip.
- Tenvora: web sales ledger plus actual Flutter Android sales ledger. The existing release APK's mobile UI matches current mobile/lib (no source differences). For capture only, an isolated APK copy was configured to http://10.0.2.2:5000/api, allowed local cleartext, and signed with an ephemeral capture key. The original release, source and production business data were not modified. Captured on our own headless small_phone Android emulator using adb screencap. Local sample owner and records are shared with the web capture.
