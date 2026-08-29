// Genera cv/cv_franklin_gomez_fullstack.pdf a partir de cv/index.html usando
// Chromium headless (Playwright) — mismo motor de "imprimir" del navegador,
// así que el PDF resultante tiene texto real (seleccionable, buscable,
// compatible con ATS), no una captura de pantalla.
//
// Correr desde la raíz del repo: npm run cv:pdf
const path = require("path");
const { chromium } = require("playwright");

async function main() {
  const cvHtmlPath = path.join(__dirname, "..", "cv", "index.html");
  const outPath = path.join(__dirname, "..", "cv", "cv_franklin_gomez_fullstack.pdf");
  const fileUrl = "file://" + cvHtmlPath.replace(/\\/g, "/");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.waitForSelector("#cvExperience .tl-item"); // espera a que SITE_DATA se renderice
  await page.emulateMedia({ media: "print" }); // activa las reglas @media print de index.html

  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" },
  });

  await browser.close();

  console.log("✓ PDF generado:", outPath);
}

main().catch((err) => {
  console.error("✗ Error generando el PDF:", err);
  process.exit(1);
});
