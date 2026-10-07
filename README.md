# BEYONDX INFORMATICS ANALYTICS PVT LTD — Landing Page

Premium dark-mode corporate landing page. Static, zero-build, Vercel-ready.

## Run locally
```bash
npx serve .
# or
python3 -m http.server 3000
```

## Deploy to Vercel
```bash
git init
git add .
git commit -m "feat: beyondx landing v1"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
# then: vercel --prod  OR import repo in vercel.com dashboard
```

## Structure
- `index.html` — all sections (hero, services, founder, academy, lead form, footer)
- `styles.css` — design system (deep tech dark + electric blue / violet)
- `script.js` — reveal animations, counters, carousel, form → mailto
- `vercel.json` — cleanUrls + security headers

To wire the form to a backend later, replace the mailto handler in `script.js` with a fetch to `/api/lead` (Vercel Serverless Function) + Resend/Sheets.
