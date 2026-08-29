// Genera los PDFs del CV a partir de cv/index.html (única fuente para la
// versión web Y el PDF — antes eran dos archivos casi duplicados) usando
// Chromium headless (Playwright) — mismo motor de "imprimir" del navegador,
// así que el PDF resultante tiene texto real (seleccionable, buscable,
// compatible con ATS), no una captura de pantalla. Las reglas @media print
// de cv/index.html ocultan el header/footer/toggle del sitio y fuerzan
// modo claro, así que el PDF se ve igual sin importar el tema activo.
//
// Genera DOS archivos, uno por idioma (cv/index.html?lang=es|en):
//   - cv_franklin_gomez_fullstack.pdf     (español, el que enlaza el sitio)
//   - cv_franklin_gomez_fullstack_en.pdf  (inglés, para postulaciones en ese idioma)
//
// Correr desde la raíz del repo: npm run cv:pdf
const path = require("path");
const { chromium } = require("playwright");

const OUT_DIR = path.join(__dirname, "..", "cv");
const SOURCE_URL = "file://" + path.join(OUT_DIR, "index.html").replace(/\\/g, "/");

const TARGETS = [
  { lang: "es", outFile: "cv_franklin_gomez_fullstack.pdf" },
  { lang: "en", outFile: "cv_franklin_gomez_fullstack_en.pdf" },
];

async function generateOne(browser, { lang, outFile }) {
  const outPath = path.join(OUT_DIR, outFile);
  const page = await browser.newPage();

  await page.goto(`${SOURCE_URL}?lang=${lang}`, { waitUntil: "networkidle" });
  await page.waitForSelector("#cvExperience .entry"); // espera a que SITE_DATA se renderice
  await page.emulateMedia({ media: "print" }); // activa las reglas @media print de cv/index.html

  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" },
  });

  await page.close();
  console.log(`✓ PDF generado (${lang}):`, outPath);
}

async function main() {
  const browser = await chromium.launch();
  for (const target of TARGETS) {
    await generateOne(browser, target);
  }
  await browser.close();
}

main().catch((err) => {
  console.error("✗ Error generando el PDF:", err);
  process.exit(1);
});
