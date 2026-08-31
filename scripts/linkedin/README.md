# Publicar posts en LinkedIn desde la terminal

Esto **NO** edita tu perfil (headline, "Acerca de", experiencia) — LinkedIn
no permite eso vía API para desarrolladores individuales, solo a socios
corporativos con acceso especial. Lo que sí permite la API real es
**publicar posts en tu feed**, y eso es lo que hace este script.

## 1. Crear la app en LinkedIn (una vez)

1. Ve a <https://www.linkedin.com/developers/apps> → **Create app**.
2. Completa el formulario (nombre de la app, tu página de LinkedIn
   asociada — si no tienes una página de empresa, LinkedIn pide asociar
   alguna; puedes usar cualquier página donde seas admin, o crear una
   página personal/de práctica).
3. En la pestaña **Products** de la app, agrega:
   - **Sign In with LinkedIn using OpenID Connect** (da los scopes
     `openid`/`profile`, necesarios para saber tu ID de miembro).
   - **Share on LinkedIn** (da el scope `w_member_social`, necesario para
     publicar). Ambos son de auto-aprobación, no requieren revisión para
     uso personal.
4. En la pestaña **Auth**, copia el **Client ID** y **Client Secret**.
5. En la misma pestaña, en "Authorized redirect URLs for your app",
   agrega exactamente: `http://localhost:4287/callback`

## 2. Configurar credenciales

```bash
cp scripts/linkedin/.env.example scripts/linkedin/.env
```

Pega el `LINKEDIN_CLIENT_ID` y `LINKEDIN_CLIENT_SECRET` en ese archivo
(`scripts/linkedin/.env` — está en `.gitignore`, nunca se commitea).

## 3. Obtener el access token (una vez, y de nuevo cuando expire)

```bash
node scripts/linkedin/get-token.js
```

Abre la URL que imprime, inicia sesión en LinkedIn, autoriza la app. El
script captura el redirect automáticamente y guarda
`LINKEDIN_ACCESS_TOKEN` + `LINKEDIN_PERSON_URN` en `scripts/linkedin/.env`.

**⚠️ Importante:** LinkedIn no da refresh token para este tipo de app —
el access token dura ~60 días. Cuando `post.js` empiece a fallar con
error 401, corré `get-token.js` de nuevo para renovarlo. No hay forma de
evitar esto sin acceso de socio corporativo (LinkedIn Marketing Developer
Platform), que no aplica para una cuenta personal.

## 4. Publicar un post

```bash
npm run linkedin:post -- "Acabo de agregar un proyecto nuevo a mi portafolio 🚀"

# con un link (se muestra como tarjeta de artículo):
npm run linkedin:post -- "Nuevo proyecto en el portafolio" https://frankgp.com/portfolio
```

o directamente:

```bash
node scripts/linkedin/post.js "Texto del post" https://frankgp.com/portfolio
```

## Qué NO hace esto

- No edita tu "Acerca de", titular, ni experiencia — eso sigue siendo
  manual (ver `docs/templates/linkedin-propuestas-laborales.md` para
  respuestas rápidas a mensajes, no para el perfil en sí).
- No lee ni analiza tu perfil ni el de terceros.
- No automatiza mensajes ni conexiones — solo publica en tu propio feed,
  con contenido que vos escribís cada vez.
