# pRAG by Beyondx — Personal RAG, powered by Claude

Single product site. Static, zero-build, Vercel-ready. Live at `/product`.

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
- `docs.html` — setup & user guide
- `privacy.html` — privacy policy
- `product.css` / `product.js` — warm edu theme + menu/reveal
- `prag-logo.png` — logo + favicon
- `vercel.json` — cleanUrls, security + no-cache HTML headers

## Configurables
- `TODO:DOWNLOAD` in product/docs — replace with real download link when available
