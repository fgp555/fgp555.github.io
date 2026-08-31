// Flujo de autorización OAuth de LinkedIn — se corre UNA VEZ (y de nuevo
// cada vez que el token expira, ver README.md) para obtener el access
// token que usa post.js. Necesita LINKEDIN_CLIENT_ID y
// LINKEDIN_CLIENT_SECRET ya puestos en scripts/linkedin/.env (ver
// README.md para cómo conseguirlos).
//
// Correr: node scripts/linkedin/get-token.js
const http = require("http");
const crypto = require("crypto");
const { loadEnv } = require("./env");
const fs = require("fs");
const path = require("path");

loadEnv();

const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
const PORT = 4287;
const REDIRECT_URI = `http://localhost:${PORT}/callback`;
const SCOPES = "openid profile w_member_social";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("✗ Falta LINKEDIN_CLIENT_ID y/o LINKEDIN_CLIENT_SECRET en scripts/linkedin/.env");
  console.error("  Ver scripts/linkedin/README.md para cómo crear la app y conseguirlos.");
  process.exit(1);
}

const state = crypto.randomBytes(12).toString("hex");
const authUrl =
  `https://www.linkedin.com/oauth/v2/authorization?response_type=code` +
  `&client_id=${encodeURIComponent(CLIENT_ID)}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES)}` +
  `&state=${state}`;

console.log("\nAbre esta URL en tu navegador, inicia sesión en LinkedIn y autoriza la app:\n");
console.log(authUrl + "\n");
console.log(`Esperando el redirect a ${REDIRECT_URI} ...\n`);

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== "/callback") {
    res.writeHead(404);
    res.end();
    return;
  }

  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (error) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Autorización rechazada</h1><p>${error}</p>`);
    console.error("✗ LinkedIn devolvió un error:", error);
    server.close();
    process.exit(1);
  }

  if (returnedState !== state) {
    res.writeHead(400);
    res.end("state inválido");
    server.close();
    process.exit(1);
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>¡Listo!</h1><p>Ya puedes cerrar esta pestaña y volver a la terminal.</p>");
  server.close();

  try {
    const tokenRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenRes.ok) {
      console.error("✗ Error al canjear el code por un token:", tokenData);
      process.exit(1);
    }

    const accessToken = tokenData.access_token;
    console.log(`✓ Access token obtenido (expira en ${Math.round(tokenData.expires_in / 86400)} días).`);

    const userRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const userData = await userRes.json();
    if (!userRes.ok) {
      console.error("✗ Error al obtener tu ID de miembro:", userData);
      process.exit(1);
    }

    const personUrn = `urn:li:person:${userData.sub}`;
    console.log(`✓ Perfil: ${userData.name} (${personUrn})`);

    const envPath = path.join(__dirname, ".env");
    const existing = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : "";
    const withoutOld = existing
      .split("\n")
      .filter((l) => !l.startsWith("LINKEDIN_ACCESS_TOKEN=") && !l.startsWith("LINKEDIN_PERSON_URN="))
      .join("\n")
      .trim();
    const updated =
      (withoutOld ? withoutOld + "\n" : "") +
      `LINKEDIN_ACCESS_TOKEN=${accessToken}\n` +
      `LINKEDIN_PERSON_URN=${personUrn}\n`;
    fs.writeFileSync(envPath, updated);

    console.log(`\n✓ Guardado en scripts/linkedin/.env — ya puedes usar: npm run linkedin:post -- "tu mensaje"`);
    process.exit(0);
  } catch (err) {
    console.error("✗ Error:", err);
    process.exit(1);
  }
});

server.listen(PORT);
