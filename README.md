# Rashid Muneer, Local SEO Portfolio

A fast, static, SEO + AI-search optimized portfolio. Pure HTML, CSS and JS, no backend, no database, no build step.

**Final URL target:** `https://rashidmuneer.vercel.app`

---

## What's in this folder

```
index.html                  Home
about.html                  About
services.html               All services
contact.html                Contact (mailto form)
gmb-optimization.html       ┐
local-seo.html              │
seo-audit.html              │
on-page-seo.html            │  one page per service
technical-seo.html          │  (great for SEO, separate indexable URLs)
content-seo.html            │
keyword-research.html       │
competitor-analysis.html    │
ai-search-optimization.html ┘  ← the "cited in LLMs, not just Google" page
404.html                    Custom not-found page
style.css                   All styling
script.js                   Nav, FAQ, contact, reveals
robots.txt                  Allows Google + AI crawlers (GPTBot, PerplexityBot…)
sitemap.xml                 All URLs for search engines
llms.txt                    Guide for AI answer engines (helps them cite you)
vercel.json                 Static config + asset caching
rashid.png           Your photo
favicon.svg          Favicon
```

Everything uses **relative links** (`./about.html`, `./style.css`, `./rashid.png`), so it works on GitHub Pages, Vercel, Netlify, or opened locally.

---

## STEP 1, Upload to GitHub

You already have a repo named **Portfolio**.

### Option A, drag & drop (easiest, no commands)
1. Go to `github.com/<your-username>/Portfolio`.
2. Click **Add file → Upload files**.
3. Select **all the files inside this folder** (including the `assets` folder). Drag them into the page.
4. Scroll down, write a commit message like `Add portfolio site`, click **Commit changes**.

> Important: upload the **contents** of this folder, not the folder itself. `index.html` must sit at the **root** of the repo.

### Option B, Git command line
```bash
cd path/to/this/folder
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/Portfolio.git
git push -u origin main
```

---

## STEP 2, Deploy on Vercel (free)

1. Go to **vercel.com** and sign in with your **GitHub** account.
2. Click **Add New… → Project**.
3. Find **Portfolio** in the repo list and click **Import**.
4. Framework Preset: leave as **Other** (it's a plain static site, no build needed).
   - Build Command: *(leave empty)*
   - Output Directory: *(leave empty / `.`)*
5. Click **Deploy**. Wait ~30 seconds.
6. Your site is live at something like `portfolio-xxxx.vercel.app`.

### Get the `rashidmuneer.vercel.app` URL
1. In the project, go to **Settings → Domains** (or **Project Settings → Domains**).
2. Add domain: type `rashidmuneer` → Vercel gives you `rashidmuneer.vercel.app` if it's free.
   - If taken, try `rashid-muneer`, `rashidmuneer-seo`, etc.
3. Save. Done, that's your public URL.

> Every time you push a change to GitHub, Vercel redeploys automatically.

---

## STEP 3, After it's live (do these for SEO)

1. **Google Search Console** → add `https://rashidmuneer.vercel.app` as a property → submit `sitemap.xml`.
2. **Bing Webmaster Tools** → add the site (Bing also feeds some AI answers).
3. Update your **LinkedIn** and **Google Business Profile** with the new URL for consistent entity signals.
4. If you later buy a real domain (e.g. `rashidmuneer.com`), add it in Vercel → Domains, then **find-and-replace** `https://rashidmuneer.vercel.app` with the new domain across all files (canonical tags, sitemap.xml, llms.txt, robots.txt).

---

## Editing later
- Text/links: edit the `.html` files.
- Colours/spacing: edit `style.css` (top of the file has the colour variables in `:root`).
- Replace your photo: swap `rashid.png` (keep the same filename, ideally a square 600×600+ image).
