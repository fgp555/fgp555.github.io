// Genera docs/templates/linkedin-perfil.md — el texto de "Acerca de" y
// "Experiencia" listo para copiar/pegar directo a tu perfil de LinkedIn,
// generado desde assets/js/data.js (misma fuente que el CV). Corré esto
// de nuevo cada vez que actualices data.js para tener el bloque al día.
//
// Uso: npm run linkedin:profile
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DATA_JS_PATH = path.join(__dirname, "..", "..", "assets", "js", "data.js");
const OUT_PATH = path.join(__dirname, "..", "..", "docs", "templates", "linkedin-perfil.md");

// data.js declara `const SITE_DATA = {...}` y `function pick(...)` como
// globals de navegador (lo carga un <script> en cada página) — no es un
// módulo CommonJS. Lo evaluamos en un sandbox de Node con vm para leer
// SITE_DATA sin tocar el archivo ni duplicar su contenido a mano.
function loadSiteData() {
  // data.js declara SITE_DATA con "const", que NO queda como propiedad del
  // objeto de contexto de vm (a diferencia de "var") — por eso se agrega
  // "SITE_DATA" como última expresión y se toma el valor de retorno de
  // runInContext, en vez de leerlo de sandbox.SITE_DATA.
  const code = fs.readFileSync(DATA_JS_PATH, "utf8");
  const sandbox = {};
  vm.createContext(sandbox);
  return vm.runInContext(code + "\nSITE_DATA", sandbox, { filename: "data.js" });
}

function pick(value, lang) {
  if (value == null) return "";
  return typeof value === "string" ? value : value[lang] || value.es || "";
}

function buildHeadline(data) {
  return `${data.title} | TypeScript, React, React Native, NestJS, AWS | Construyo desde la arquitectura hasta producción`;
}

function buildAbout(data) {
  const summary = pick(data.summaryLong, "es");
  const practices = data.technicalPractices.es.map((p) => `🔹 ${p}`).join("\n");
  return `Soy ${data.name.split(" ")[0]}, ${summary}

Algunas cosas que hago en el día a día:
${practices}

Disponible para proyectos freelance remotos y posiciones full-time.
Portafolio: frankgp.com${data.links.portfolio} · CV: frankgp.com${data.links.cv}`;
}

function buildExperienceEntry(job) {
  const role = pick(job.role, "es");
  const org = pick(job.org, "es");
  const date = pick(job.date, "es");
  const bullets = job.bullets ? pick(job.bullets, "es") : [pick(job.desc, "es")];
  const body = bullets.map((b) => `• ${b}`).join("\n");
  return `### ${role} — ${org}\n**Fechas:** ${date}\n\n\`\`\`\n${body}\n\`\`\``;
}

function buildEducationEntry(edu) {
  const name = pick(edu.name, "es");
  const org = pick(edu.org, "es");
  const bullets = edu.bullets ? pick(edu.bullets, "es") : [];
  const body = bullets.length ? "\n\n```\n" + bullets.map((b) => `• ${b}`).join("\n") + "\n```" : "";
  return `### ${name} — ${org}\n**Año:** ${edu.year}${body}`;
}

function buildSkillsChecklist(data) {
  return data.skills
    .map((group) => {
      const items = group.items.map((i) => `- [ ] ${pick(i, "es")}`).join("\n");
      return `**${pick(group.label, "es")}**\n${items}`;
    })
    .join("\n\n");
}

function main() {
  const data = loadSiteData();
  const headline = buildHeadline(data);
  const about = buildAbout(data);

  const md = `# Perfil de LinkedIn — listo para copiar/pegar

> Generado automáticamente desde \`assets/js/data.js\` — no editar a mano,
> volver a correr \`npm run linkedin:profile\` después de actualizar el CV.
> Los bloques de texto (Titular, Acerca de, cada Experiencia/Educación)
> están pensados para copiar tal cual al campo correspondiente en
> linkedin.com/in/franklingp/edit (Aptitudes es una checklist de
> referencia, no un campo de texto — se agregan una por una en LinkedIn).

## Titular (headline)

_${headline.length} / 220 caracteres (límite de LinkedIn)_

\`\`\`
${headline}
\`\`\`

## Acerca de

_${about.length} / 2600 caracteres (límite de LinkedIn)_

\`\`\`
${about}
\`\`\`

## Experiencia

${data.experience.map(buildExperienceEntry).join("\n\n")}

## Educación

${data.education.map(buildEducationEntry).join("\n\n")}

## Aptitudes (agregar manualmente en LinkedIn, una por una)

${buildSkillsChecklist(data)}
`;

  fs.writeFileSync(OUT_PATH, md);
  console.log("✓ Generado:", OUT_PATH);
}

main();
