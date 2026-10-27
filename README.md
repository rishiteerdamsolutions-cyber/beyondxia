# pRAG by Beyondx — Personal RAG, powered by Claude

pRAG is the core product. Kinkar is the first product built on it (US IT staffing). Static, zero-build, Vercel-ready.

## Run locally
```bash
python3 -m http.server 8080
# open http://localhost:8080/product.html
```

## Deploy
Push to `main` — Vercel auto-deploys.

## Structure
- `product.html` — the entire site (also copied to `index.html` so `/` serves it)
- `index.html` — identical copy of the product page (root route)
- `kinkar.html` — first product on pRAG: AI recruiter workforce for US IT staffing
- `docs.html` — setup & user guide
- `privacy.html` — privacy policy
- `terms.html` — terms of use
- `company.html` — legal entity details (CIN, registered office, founder, MCA lookup)
- `product.css` / `product.js` — warm edu theme + menu/reveal
- `prag-logo-256.png` — logo + favicon used by pages (`prag-logo.png` is the full-size original)
- `robots.txt` / `sitemap.xml` — crawl hints

Every page footer carries the full legal name, CIN, registered office, email, and phone. Keep these identical everywhere, including the Claude Console organization name.
- `vercel.json` — cleanUrls, security + no-cache HTML headers

## Configurables
- `TODO:DOWNLOAD` in product/docs — replace with real download link when available
