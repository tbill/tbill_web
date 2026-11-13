# tbill_web

Source for **https://www.tbill.us**, built with [Astro](https://astro.build) and published by GitHub Pages.

## How it works

- Pages live in `src/pages/`: each `.astro` file becomes a page (`about.astro` → `/about/`).
- The shared look (header, footer, styles) lives in `src/layouts/`, `src/components/` and `src/styles/`.
- Files in `public/` are copied as-is. `public/CNAME` tells GitHub Pages the custom domain.
- A notice bar on every page (`src/components/TbillNotice.astro`) points people looking for U.S. Treasury Bills to TreasuryDirect.gov, and `/tbills/`, `/t-bills/` and `/treasury/` redirect there.
- Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.

## Working on it locally

Requires Node.js 22.23.4 or newer.

```bash
npm ci          # install exact dependency versions
npm run dev     # live preview at http://localhost:4321
npm run build   # produce the static site in dist/
```

## One-time GitHub setup

1. Make the repository public (Settings → General → Danger Zone).
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Settings → Pages → Custom domain: `www.tbill.us`, then tick **Enforce HTTPS** once the certificate is issued.

## DNS for tbill.us

At the domain's DNS provider:

| Type  | Host  | Value             |
|-------|-------|-------------------|
| CNAME | www   | tbill.github.io   |
| A     | @     | 185.199.108.153   |
| A     | @     | 185.199.109.153   |
| A     | @     | 185.199.110.153   |
| A     | @     | 185.199.111.153   |

The `A` records make the bare `tbill.us` redirect to `www.tbill.us`.
