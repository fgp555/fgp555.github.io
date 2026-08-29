# Project conventions

## Icons

Do not add an icon CDN library (Lucide via unpkg, Font Awesome, etc.) for icons. Instead, copy the specific SVG(s) needed directly inline into the HTML, matching the stroke-based outline style already used for the theme-toggle sun/moon icons (`stroke="currentColor"`, `stroke-width="2"`, round line caps/joins — Lucide's visual style, sourced by hand rather than loaded from a library). This keeps the site free of extra external script dependencies while staying visually consistent.

## Single sources of truth — edit these, not their generated output

### `assets/js/data.js`

This is the **only** place to edit: name/title, email, WhatsApp number, social/CV/portfolio/services links, professional summary (es/en), tech stack (`skills`), work experience (`experience`), education, the 3 curated "Proyectos destacados" cards on the homepage (`featuredProjects`), the full `/portfolio` project gallery (`projects`), and the page list used by the footer `<select>` (`pages`). `index.html`, `cv/index.html`, `portfolio/index.html`, and `services/index.html` all render from this file at load time — never hardcode this data directly into an HTML page. After editing `data.js`, run `npm run bump-version` (see below) so the change actually shows up for visitors.

### `cv/index.html` (+ `assets/js/data.js`) — the CV's PDF source

The downloadable CV PDF (`cv/cv_franklin_gomez_fullstack.pdf`, linked as `SITE_DATA.links.cvPdf`) is generated **from `cv/index.html` itself**, not written by hand. `cv/index.html` already renders its content from `assets/js/data.js` (see above) using the same `@media print` rules that used to only serve the in-browser print button. To regenerate the PDF after any content or CSS change: run `npm run cv:pdf` (`scripts/generate-cv-pdf.js`, Playwright + headless Chromium — installed as a **devDependency only**, the published site has no runtime dependency on it). It navigates to `cv/index.html`, emulates print media so the print CSS applies, and exports a real text PDF (selectable/searchable/ATS-friendly — not a screenshot). Commit the regenerated `.pdf` file. Since the design is now plain CSS instead of Word "styles", tweak the look directly in `cv/index.html`'s `<style>` block (in particular the `@media print` section) — no Word/LibreOffice needed.

**Deprecated (kept for reference, not the current workflow):** `cv/cv.md` + `cv/publish.sh` + `cv/cv_sync.py` compiled Markdown → DOCX (via Pandoc + `cv/reference-style.docx`) → pushed to a Google Doc. This is no longer how the CV is produced; `cv/SETUP.md` documents that older flow if it's ever needed again (e.g. to get a Google Docs–commentable copy), but don't use it to publish CV changes.

## Cache-busting shared assets

`assets/css/theme.css`, `assets/css/components.css`, `assets/js/data.js`, and `assets/js/page-nav.js` are referenced with a `?v=1` query string from every page (`index.html`, `404.html`, `styleguide.html`, `cv/index.html`, `portfolio/index.html`, `services/index.html`). GitHub Pages / Cloudflare cache these aggressively, so returning visitors can keep seeing a stale version after a deploy. **Whenever any of those 4 shared files changes, bump the `?v=` number in all 6 HTML files** (find-and-replace `?v=1` → `?v=2`, etc. — keep the number identical across every reference in the same deploy) by running `npm run bump-version`.

**Claude: do not run `npm run bump-version` yourself.** The user bumps it manually, on their own schedule (e.g. once before deploying, not after every intermediate edit). Just leave the `?v=` value as-is when editing the 4 shared files above.
