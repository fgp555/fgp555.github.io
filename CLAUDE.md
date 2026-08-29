# Project conventions

## Icons

Do not add an icon CDN library (Lucide via unpkg, Font Awesome, etc.) for icons. Instead, copy the specific SVG(s) needed directly inline into the HTML, matching the stroke-based outline style already used for the theme-toggle sun/moon icons (`stroke="currentColor"`, `stroke-width="2"`, round line caps/joins — Lucide's visual style, sourced by hand rather than loaded from a library). This keeps the site free of extra external script dependencies while staying visually consistent.

## Single sources of truth — edit these, not their generated output

### `assets/js/data.js`

This is the **only** place to edit: name/title, email, WhatsApp number, social/CV/portfolio/services links, professional summary (es/en), tech stack (`skills`), work experience (`experience`), education, the 3 curated "Proyectos destacados" cards on the homepage (`featuredProjects`), the full `/portfolio` project gallery (`projects`), and the page list used by the footer `<select>` (`pages`). `index.html`, `cv/index.html`, `portfolio/index.html`, and `services/index.html` all render from this file at load time — never hardcode this data directly into an HTML page. After editing `data.js`, run `npm run bump-version` (see below) so the change actually shows up for visitors.

### `cv/index.html` (web) vs. `cv/pdf-source.html` (PDF source) — both driven by `assets/js/data.js`

The CV exists as two separate HTML files, both rendering from `assets/js/data.js` (see above) — never hardcode CV text into either one:

- **`cv/index.html`** is the condensed, on-site version (site header/footer, theme toggle, dark/light mode, one-line `desc` per job). This is what visitors browse at `/cv/`.
- **`cv/pdf-source.html`** is the full, detailed version used only to generate the downloadable PDF — no site chrome, always light mode, plain print-ready CSS. It renders `SITE_DATA.summaryLong`, `SITE_DATA.technicalPractices`, and the per-entry `bullets` arrays on `experience`/`education` (the detailed achievement lists — `cv/index.html` doesn't show these, only the short `desc`). It's never linked from the site nav and isn't part of the cache-busting `?v=` list below — it's only ever opened locally by the PDF script. It's ATS-oriented: system font (Arial, not Google Fonts — see comment in the file for why), single column, includes the location line, and picks a language via `?lang=es|en` (default `es`).

`cv/pdf-source.html` renders **bilingually**: `summaryLong`, `technicalPractices`, and every `experience`/`education` entry's `bullets` are `{ es: [...], en: [...] }` in `assets/js/data.js` — always add both when adding new detailed content, and use `pick(value, lang)` to read them, same as everywhere else in `data.js`. Section headings (e.g. "Educación" vs "Education", "Experiencia laboral" vs "Work Experience") are translated inside `cv/pdf-source.html` itself via a `SECTION_LABELS` map — the English labels intentionally use the literal keywords ATS parsers look for ("Education", "Work Experience"), not a free translation.

The downloadable CV PDFs are generated **from `cv/pdf-source.html`**, not written by hand: run `npm run cv:pdf` (`scripts/generate-cv-pdf.js`, Playwright + headless Chromium — installed as a **devDependency only**, the published site has no runtime dependency on it). It renders the page twice (`?lang=es` and `?lang=en`), emulates print media, and exports two real text PDFs (selectable/searchable/ATS-friendly — not a screenshot):

- `cv/cv_franklin_gomez_fullstack.pdf` (Spanish) — linked as `SITE_DATA.links.cvPdf`, the one the site's download button serves.
- `cv/cv_franklin_gomez_fullstack_en.pdf` (English) — generated alongside it for English-language applications; not currently linked from the site.

Commit both regenerated `.pdf` files. To tweak the PDF's look, edit `cv/pdf-source.html`'s `<style>` block directly — plain CSS, no Word/LibreOffice needed. If you add new detailed content (e.g. a new job's `bullets`), add both language variants to the relevant entry in `assets/js/data.js` first, then re-run `npm run cv:pdf`.

**Removed:** the older Markdown → Pandoc → DOCX → Google Docs pipeline (`cv/cv.md`, `cv/publish.sh`, `cv/cv_sync.py`, `cv/reference-style.docx`, `cv/cv_franklin_gomez_fullstack.docx`, `cv/readme.md`) has been deleted from the repo — it's fully superseded by the `cv/pdf-source.html` + Playwright flow above. `cv/SETUP.md` is kept only as historical documentation of how that flow used to work.

## Cache-busting shared assets

`assets/css/theme.css`, `assets/css/components.css`, `assets/js/data.js`, and `assets/js/page-nav.js` are referenced with a `?v=1` query string from every page (`index.html`, `404.html`, `styleguide.html`, `cv/index.html`, `portfolio/index.html`, `services/index.html`). GitHub Pages / Cloudflare cache these aggressively, so returning visitors can keep seeing a stale version after a deploy. **Whenever any of those 4 shared files changes, bump the `?v=` number in all 6 HTML files** (find-and-replace `?v=1` → `?v=2`, etc. — keep the number identical across every reference in the same deploy) by running `npm run bump-version`.

**Claude: do not run `npm run bump-version` yourself.** The user bumps it manually, on their own schedule (e.g. once before deploying, not after every intermediate edit). Just leave the `?v=` value as-is when editing the 4 shared files above.
