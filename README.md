USIU First-Year Companion (v1)

Project summary
- What: A lightweight static microsite to welcome new USIU students. It personalizes a greeting, estimates weekly campus transport and snack costs, and supports a day/night theme toggle.
- Why: Orientation-week quick helper that helps new students plan small expenses and feel welcomed.
- Who: Target audience — new USIU students during Orientation Week.

How to run locally (no Docker)
- Open `public/index.html` in your browser (double-click or use your editor's live preview).

How to build/run with Docker
- docker build -t usiu-first-year:v1 .
- docker run -p 8080:80 usiu-first-year:v1
- Open http://localhost:8080

Known limitations & next steps
- Uses prompt()/alert() for v1 interactions; replace with form inputs for accessibility in v2.
- Student ID placeholder in summary should be updated with your actual student ID.
- No persistent storage; calculations are ephemeral.
- Next steps: add unit tests, accessibility improvements, and a form-based estimator.

Files of note
- public/index.html — main page
- public/styles.css — simple CSS variables and layout
- public/script.js — greeting, estimator, theming, logging
- design/ — wireframes and notes (placeholder files)

Testing checklist
- On load: prompts for name, shows alert, and updates #greeting.
- Click "Run Estimator": prompts for 4 values, updates #summary with correct arithmetic.
- Click "Toggle Theme": flips between day and night themes.
- Click "Reset": restores default summary text.
- Works in Docker at http://localhost:8080 when container is started.
