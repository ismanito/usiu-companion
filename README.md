#  USIU First-Year Companion (v1)

Short links
- Repository: https://github.com/ismanito/usiu-companion
- Live site (GitHub Pages): https://ismanito.github.io/usiu-companion/
- Docker Hub image: https://hub.docker.com/r/ismahanabdi/usiu-first-year-companion

Overview
--------
This is a lightweight, static microsite built for new USIU students during Orientation Week. The MVP (v1) performs three core jobs:

- Ask for a student name and show a personalized greeting (prompt → alert → DOM update).
- Estimate weekly campus costs (transport + snacks) via prompt inputs and simple arithmetic; shows a neat summary in `#summary`.
- Provide a day/night theme toggle and a Reset button.

Constraints: vanilla JavaScript only (no external libraries), no network calls, and simple DOM APIs.

Needs brief (≤400 words)
------------------------
Audience & Context: New USIU students during Orientation Week who need a quick, offline-friendly helper to plan small campus costs and get a welcome greeting.

Core Jobs to be Done (v1):
1. Personalized greeting via prompt and console logging for traceability.
2. Simple campus cost/commute estimator that computes weekly transport (days × cost × 2), snack budget (days × snacks/day × price), and a 10% "save" tip. Results display in `#summary`.
3. Theme toggle (day/night) implemented via CSS variables and a body data-attribute.

Success Criteria: Loads instantly, prompts once on load, calculates correctly, presents a readable summary, logs values to console, and runs inside Docker.

Files & Structure
-----------------
```
usiu-first-year-companion/
├─ design/ (wireframes + notes)
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  └─ script.js
├─ Dockerfile
├─ .dockerignore
└─ README.md
```

Quick run (no Docker)
---------------------
Open `public/index.html` in a browser.

Local Docker (build & run)
--------------------------
Build the image then run it (PowerShell):
```powershell
cd 'C:\Users\ISMAHAN\ISUUU\usiu-first-year-companion'
docker build -t usiu-first-year:v1 .
docker run --rm -d -p 8080:80 --name usiu-first-year usiu-first-year:v1
# Open http://localhost:8080
```

Docker Hub (pull & run)
-----------------------
If you published to Docker Hub, a grader can pull & run:
```powershell
docker pull ismahanabdi/usiu-first-year-companion:v1
docker run --rm -d -p 8080:80 --name usiu-first-year ismahanabdi/usiu-first-year-companion:v1
# Open http://localhost:8080
```

Notes and limitations
---------------------
- v1 uses `prompt()`/`alert()` for simplicity; replace with accessible forms in v2.
- Replace the placeholder `Generated for: <Your Student ID here>` in `public/script.js` with your student ID before final submission.

Testing checklist
-----------------
- Page loads without console errors.
- On load: prompts for name → alert → `#greeting` updated.
- Clicking "Run Estimator" asks the 4 prompts and updates `#summary` with correct numbers.
- "Toggle Theme" switches day/night and keeps text readable.
- "Reset" clears the summary to the default message.
- Docker image builds and site is reachable at http://localhost:8080.

Optional extras (bonus)
-----------------------
- Add a short 90–120s screen capture showing the flow (load → greeting → estimator → theme → Docker run) for extra credit.
- Add a GitHub Action to auto-publish `public/` to `gh-pages` or to push the Docker image on push to `main` (CI workflow exists in `.github/workflows`).

Contact / Attribution
---------------------
Generated for: 670667

If you want, I can: add the submission snippet to the top of this README, replace the student ID, or create a ZIP for upload. Tell me which and I’ll commit it.

