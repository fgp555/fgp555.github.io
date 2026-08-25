# Project conventions

## Icons

Do not add an icon CDN library (Lucide via unpkg, Font Awesome, etc.) for icons. Instead, copy the specific SVG(s) needed directly inline into the HTML, matching the stroke-based outline style already used for the theme-toggle sun/moon icons (`stroke="currentColor"`, `stroke-width="2"`, round line caps/joins — Lucide's visual style, sourced by hand rather than loaded from a library). This keeps the site free of extra external script dependencies while staying visually consistent.

## Cache-busting shared assets

`assets/css/theme.css`, `assets/css/components.css`, `assets/js/data.js`, and `assets/js/page-nav.js` are referenced with a `?v=1` query string from every page (`index.html`, `404.html`, `styleguide.html`, `cv/index.html`, `portfolio/index.html`, `services/index.html`). GitHub Pages / Cloudflare cache these aggressively, so returning visitors can keep seeing a stale version after a deploy. **Whenever any of those 4 shared files changes, bump the `?v=` number in all 6 HTML files** (find-and-replace `?v=1` → `?v=2`, etc. — keep the number identical across every reference in the same deploy). No build tool does this automatically; it's a manual step.
