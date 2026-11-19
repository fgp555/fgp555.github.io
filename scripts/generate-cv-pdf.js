// Genera un único CV en español. Rechaza más de tres páginas antes de guardar.
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");
const { chromium } = require("playwright");
const { PDFDocument } = require("pdf-lib");
async function main() {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const cvDir = path.join(__dirname, "..", "web", "cv");
    await page.goto(pathToFileURL(path.join(cvDir, "index.html")).href, { waitUntil: "networkidle" });
    await page.waitForSelector("#cvExperience .entry");
    await page.emulateMedia({ media: "print" });
    const bytes = await page.pdf({ format: "A4", printBackground: true, margin: { top: "15mm", bottom: "15mm", left: "15mm", right: "15mm" } });
    const count = (await PDFDocument.load(bytes)).getPageCount();
    if (count > 3) throw new Error("El CV tiene " + count + " páginas. Reducir la selección o los textos de projects[].cv; máximo 3. Se conserva el PDF anterior.");
    fs.writeFileSync(path.join(cvDir, "cv_franklin_gomez_fullstack.pdf"), bytes);
    console.log("CV en español generado: " + count + " páginas (máximo 3).");
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
