# Project conventions

## Icons

Do not add an icon CDN library (Lucide via unpkg, Font Awesome, etc.) for icons. Instead, copy the specific SVG(s) needed directly inline into the HTML, matching the stroke-based outline style already used for the theme-toggle sun/moon icons (`stroke="currentColor"`, `stroke-width="2"`, round line caps/joins — Lucide's visual style, sourced by hand rather than loaded from a library). This keeps the site free of extra external script dependencies while staying visually consistent.

## Portfolio project images

Screenshots used in `SITE_DATA.projectsPortfolio` (`assets/js/data.js`) should be **1920×1200** (aspect ratio 8:5 / 1.6) — crop/export new screenshots to that ratio before uploading. `/portfolio`'s grid thumbnails (`.port-img`) and the project detail modal (`.modal-img`) both use `aspect-ratio: 1920 / 1200` with `object-fit: cover`, so a differently-proportioned image gets cropped rather than distorted; matching the source ratio avoids losing important content off the edges.

## Single sources of truth — edit these, not their generated output

### `assets/js/data.js`

This is the **only** place to edit: name/title, email, WhatsApp number, social/CV/portfolio/services links, professional summary (es/en), tech stack (`skills`), work experience (`experience`), education, the 3 curated "Proyectos destacados" cards on the homepage (`featuredProjects`), the full `/portfolio` project gallery (`projects`), and the page list used by the footer `<select>` (`pages`). `index.html`, `cv/index.html`, `portfolio/index.html`, and `services/index.html` all render from this file at load time — never hardcode this data directly into an HTML page. After editing `data.js`, run `npm run bump-version` (see below) so the change actually shows up for visitors.

### `cv/index.html` — single source for both the web page and the PDF

The CV used to be two separate, mostly-duplicated HTML files (a condensed web version and a detailed PDF-source version). They were merged into **one** `cv/index.html`, rendered from `assets/js/data.js` (see above) — never hardcode CV text into it. It's the live `/cv/` page visitors browse (full site header with logo/theme-toggle/language-toggle, footer with contact icons, floating "Ir a…" nav select) **and** the exact page `npm run cv:pdf` renders to produce the downloadable PDF — `@media print` rules hide the header/footer/toggles/nav-select and force light mode, so the PDF looks the same regardless of which theme/language a visitor happened to leave active in their browser. It shows the full detail: `SITE_DATA.summaryLong`, `SITE_DATA.technicalPractices`, and the per-entry `bullets` arrays on `experience`/`education`.

It's rendered **bilingually** via `?lang=es|en` in the URL (default `es`) — a language toggle button in the header flips this without editing the URL by hand. `summaryLong`, `technicalPractices`, and every `experience`/`education` entry's `bullets` are `{ es: [...], en: [...] }` in `assets/js/data.js` — always add both when adding new detailed content, and use `pick(value, lang)` to read them, same as everywhere else in `data.js`. Section headings (e.g. "Educación" vs "Education", "Experiencia laboral" vs "Work Experience") are translated inside `cv/index.html` itself via a `SECTION_LABELS` map — the English labels intentionally use the literal keywords ATS parsers look for ("Education", "Work Experience"), not a free translation. The page's "Descargar PDF" button downloads whichever language PDF matches the language currently on screen.

It intentionally uses **Arial** (not the site's Google Fonts) for both screen and print — `--mono`/`--sans` are redefined to Arial right in `cv/index.html`'s own `<style>` block. This keeps the on-screen look and the generated PDF's look identical (no `@media print` font swap to keep in sync), and avoids a real bug hit earlier: Chromium embeds Google Fonts variable fonts as Type3 (hand-drawn glyphs) in exported PDFs instead of standard TrueType, which some stricter ATS parsers read worse. Colors, on the other hand, **do** use the site's shared theme variables (`--bg-elev`, `--text`, `--cyan`, etc. from `theme.css`) so the theme toggle has a real effect on screen — `@media print` overrides them all back to fixed light values so the PDF is unaffected by whatever theme was active.

The downloadable CV PDFs are generated **from `cv/index.html`**, not written by hand: run `npm run cv:pdf` (`scripts/generate-cv-pdf.js`, Playwright + headless Chromium — installed as a **devDependency only**, the published site has no runtime dependency on it). It renders the page twice (`?lang=es` and `?lang=en`), emulates print media, and exports two real text PDFs (selectable/searchable/ATS-friendly — not a screenshot):

- `cv/cv_franklin_gomez_fullstack.pdf` (Spanish) — linked as `SITE_DATA.links.cvPdf`, the one the site's download button serves by default.
- `cv/cv_franklin_gomez_fullstack_en.pdf` (English) — `SITE_DATA.links.cvPdfEn`, served when the page's language toggle is set to English.

Commit both regenerated `.pdf` files. To tweak the CV's look (on screen or in the PDF — they're the same page), edit `cv/index.html`'s `<style>` block directly — plain CSS, no Word/LibreOffice needed. If you add new detailed content (e.g. a new job's `bullets`), add both language variants to the relevant entry in `assets/js/data.js` first, then re-run `npm run cv:pdf`.

**Removed:** the older Markdown → Pandoc → DOCX → Google Docs pipeline (`cv/cv.md`, `cv/publish.sh`, `cv/cv_sync.py`, `cv/reference-style.docx`, `cv/cv_franklin_gomez_fullstack.docx`, `cv/readme.md`) has been deleted from the repo — it's fully superseded by the `cv/index.html` + Playwright flow above. `cv/SETUP.md` is kept only as historical documentation of how that flow used to work.

## Cache-busting shared assets

`assets/css/theme.css`, `assets/css/components.css`, `assets/js/data.js`, and `assets/js/page-nav.js` are referenced with a `?v=1` query string from every page (`index.html`, `404.html`, `styleguide.html`, `cv/index.html`, `portfolio/index.html`, `services/index.html`). GitHub Pages / Cloudflare cache these aggressively, so returning visitors can keep seeing a stale version after a deploy. **Whenever any of those 4 shared files changes, bump the `?v=` number in all 6 HTML files** (find-and-replace `?v=1` → `?v=2`, etc. — keep the number identical across every reference in the same deploy) by running `npm run bump-version`.

**Claude: do not run `npm run bump-version` yourself.** The user bumps it manually, on their own schedule (e.g. once before deploying, not after every intermediate edit). Just leave the `?v=` value as-is when editing the 4 shared files above.
