// Sube el ?v= de los assets compartidos (theme.css, components.css, data.js,
// page-nav.js) en todas las páginas, usando fecha+hora local como versión.
// Correr desde la raíz del repo: npm run bump-version
const fs = require("fs");
const path = require("path");

const pad = (n) => String(n).padStart(2, "0");
const now = new Date();
const date = now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate());
const time = pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
const version = `${date}T${time}`; // 20260826T142345 = 2026-08-26 14:23:45 (hora local)

const files = [
  "index.html",
  "404.html",
  "styleguide.html",
  "cv/index.html",
  "portfolio/index.html",
  "services/index.html",
];

const root = path.join(__dirname, "..");

files.forEach((file) => {
  const filePath = path.join(root, file);
  const content = fs.readFileSync(filePath, "utf8");
  const updated = content.replace(/(\?v=)[^"]+/g, `$1${version}`);
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`✓ ${file}`);
});

console.log(`\nVersión actualizada a: ${version}`);
