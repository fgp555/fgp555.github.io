// Publica un post en tu feed de LinkedIn vía la API (UGC Posts). Necesita
// LINKEDIN_ACCESS_TOKEN y LINKEDIN_PERSON_URN en scripts/linkedin/.env —
// se generan corriendo get-token.js una vez (ver README.md).
//
// Uso: node scripts/linkedin/post.js "Texto del post" [urlOpcional]
//   o:  npm run linkedin:post -- "Texto del post" [urlOpcional]
const { loadEnv } = require("./env");
loadEnv();

const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
const PERSON_URN = process.env.LINKEDIN_PERSON_URN;

const text = process.argv[2];
const link = process.argv[3]; // opcional: agrega una tarjeta de link al post

if (!ACCESS_TOKEN || !PERSON_URN) {
  console.error("✗ Falta LINKEDIN_ACCESS_TOKEN y/o LINKEDIN_PERSON_URN en scripts/linkedin/.env");
  console.error("  Corré primero: node scripts/linkedin/get-token.js");
  process.exit(1);
}

if (!text) {
  console.error('✗ Falta el texto del post. Uso: node scripts/linkedin/post.js "Texto" [url]');
  process.exit(1);
}

async function main() {
  const specificContent = {
    "com.linkedin.ugc.ShareContent": {
      shareCommentary: { text },
      shareMediaCategory: link ? "ARTICLE" : "NONE",
    },
  };

  if (link) {
    specificContent["com.linkedin.ugc.ShareContent"].media = [
      { status: "READY", originalUrl: link },
    ];
  }

  const body = {
    author: PERSON_URN,
    lifecycleState: "PUBLISHED",
    specificContent,
    visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
  };

  const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`✗ Error ${res.status} al publicar:`, errText);
    if (res.status === 401) {
      console.error("  El token probablemente expiró — corré de nuevo: node scripts/linkedin/get-token.js");
    }
    process.exit(1);
  }

  const postId = res.headers.get("x-restli-id");
  console.log("✓ Post publicado:", postId || "(sin id devuelto)");
}

main().catch((err) => {
  console.error("✗ Error:", err);
  process.exit(1);
});
