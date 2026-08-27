# Project conventions

## Icons

Do not add an icon CDN library (Lucide via unpkg, Font Awesome, etc.) for icons. Instead, copy the specific SVG(s) needed directly inline into the HTML, matching the stroke-based outline style already used for the theme-toggle sun/moon icons (`stroke="currentColor"`, `stroke-width="2"`, round line caps/joins — Lucide's visual style, sourced by hand rather than loaded from a library). This keeps the site free of extra external script dependencies while staying visually consistent.

## Single sources of truth — edit these, not their generated output

### `assets/js/data.js`

This is the **only** place to edit: name/title, email, WhatsApp number, social/CV/portfolio/services links, professional summary (es/en), tech stack (`skills`), work experience (`experience`), education, the 3 curated "Proyectos destacados" cards on the homepage (`featuredProjects`), the full `/portfolio` project gallery (`projects`), and the page list used by the footer `<select>` (`pages`). `index.html`, `cv/index.html`, `portfolio/index.html`, and `services/index.html` all render from this file at load time — never hardcode this data directly into an HTML page. After editing `data.js`, run `npm run bump-version` (see below) so the change actually shows up for visitors.

### `cv/cv.md`

This is the **only** place to edit CV content — it's Markdown, meant to be edited in a normal editor (not Word). Never hand-edit `cv/cv_franklin_gomez_fullstack.docx` directly; it's a generated build artifact, regenerated every time from `cv.md`. To publish a change: run `cv/publish.sh`, which compiles `cv.md` → `.docx` (styled via `cv/reference-style.docx`) → pushes it to the canonical Google Doc (same URL every time, ID hardcoded as `INITIAL_DOCUMENT_ID` in `cv/cv_sync.py`). Full setup/onboarding instructions (Pandoc, Google OAuth credentials, new-machine checklist) are in `cv/SETUP.md`. If the CV's experience section changes, also update the corresponding entry in `assets/js/data.js` (`experience`) so the website and the downloadable CV stay in sync — they are two separate files by necessity (one is a Google Doc/PDF, one is rendered HTML) but should describe the same facts.

## Cache-busting shared assets

`assets/css/theme.css`, `assets/css/components.css`, `assets/js/data.js`, and `assets/js/page-nav.js` are referenced with a `?v=1` query string from every page (`index.html`, `404.html`, `styleguide.html`, `cv/index.html`, `portfolio/index.html`, `services/index.html`). GitHub Pages / Cloudflare cache these aggressively, so returning visitors can keep seeing a stale version after a deploy. **Whenever any of those 4 shared files changes, bump the `?v=` number in all 6 HTML files** (find-and-replace `?v=1` → `?v=2`, etc. — keep the number identical across every reference in the same deploy). No build tool does this automatically; it's a manual step.
