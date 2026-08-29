# CV — setup y flujo de trabajo (histórico, archivos eliminados)

> **Este ya no es el flujo actual.** Hoy el PDF se genera desde
> `cv/pdf-source.html` + `assets/js/data.js` con `npm run cv:pdf` (Playwright, headless Chromium)
> — sin Markdown, sin Pandoc, sin Google Docs. Ver la sección "Single
> sources of truth" en `CLAUDE.md`.
>
> Los archivos que este documento describe (`cv.md`, `publish.sh`,
> `cv_sync.py`, `reference-style.docx`, `cv_franklin_gomez_fullstack.docx`)
> **ya no existen en el repo** — se borraron por estar deprecados. Este
> documento se deja solo como referencia de cómo funcionaba ese flujo, por
> si algún día quieres reconstruirlo para volver a tener una copia
> comentable en Google Docs.

Este directorio mantenía tu CV en **`cv.md`** (Markdown, se editaba en VSCode) como
única fuente de verdad. Un script compilaba eso a `.docx` con tu estilo y lo subía
a tu Google Doc — siempre el mismo documento/URL.

```
cv.md                 ← EDITAS AQUÍ (Markdown, versionado en git)
reference-style.docx  ← plantilla de estilo para Pandoc (versionado en git)
publish.sh            ← cv.md → docx → Google Doc, en un solo comando
cv_sync.py            ← lógica de sync con Google Drive/Docs (no lo tocas normalmente)
cv_franklin_gomez_fullstack.docx  ← generado por publish.sh, NO se edita a mano
```

## Flujo normal (una vez configurado)

1. Editas `cv.md` en VSCode.
2. Corres:
   ```bash
   ./publish.sh
   ```
   Esto compila el Markdown a `.docx` (con el mismo estilo de siempre, vía
   `reference-style.docx`) y lo sube a tu Google Doc, **conservando la misma
   URL** (`https://docs.google.com/document/d/1QXvw63hNlLx4HayL5e9AbrjCb5g3ffaQV5JKyAbAHCA/edit`).
3. Si además cambiaste tu experiencia/stack en el sitio web, actualiza también
   `assets/js/data.js` (raíz del repo) y corre `npm run bump-version`.

Para solo compilar el DOCX sin subirlo: `./publish.sh --build`.

## Setup en una máquina nueva

### 1. Clonar el repo y entrar a `cv/`

```bash
git clone <tu-repo>
cd repo-frankgp.com/cv
```

### 2. Python + dependencias (para `cv_sync.py`)

```bash
python3 -m venv .venv
source .venv/bin/activate

pip install --upgrade \
  google-api-python-client \
  google-auth-httplib2 \
  google-auth-oauthlib
```

### 3. Pandoc (para compilar `cv.md` → `.docx`)

```bash
# WSL / Ubuntu / Debian
sudo apt update && sudo apt install -y pandoc

# macOS
brew install pandoc

# Windows (PowerShell, si no usas WSL)
winget install --id JohnMacFarlane.Pandoc
```

Verifica: `pandoc --version`.

### 4. Credenciales de Google (lo único que NO se regenera solo)

`cv-sync-credentials.json` es el **OAuth Client ID** de tu proyecto en Google
Cloud Console (con la Drive API habilitada) — está en `.gitignore` a propósito
porque es una credencial, nunca se sube al repo. Es el único archivo de este
flujo que tienes que **respaldar tú mismo** (ej. en tu gestor de contraseñas o
Google Drive privado) para no tener que recrear el OAuth Client ID desde cero
en Google Cloud Console cada vez que cambias de máquina.

Cópialo a `cv/cv-sync-credentials.json` en la máquina nueva.

### 5. Primera autenticación

```bash
python cv_sync.py auth
```

Abre el navegador, inicia sesión con tu cuenta de Google, autoriza. Esto
genera `token.json` (se regenera solo, no hace falta respaldarlo) y usa
`INITIAL_DOCUMENT_ID` (hardcodeado en `cv_sync.py`) como documento destino —
no necesitas copiar `.google-doc-id` de la máquina vieja, el script ya sabe a
qué documento apuntar.

### 6. Listo

```bash
./publish.sh
```

## Qué se versiona en git y qué no

| Archivo                                  | En git            | Por qué                                                |
| ---------------------------------------- | ----------------- | ------------------------------------------------------ |
| `cv.md`                                  | Sí                | fuente de verdad                                       |
| `reference-style.docx`                   | Sí                | plantilla de estilo, sin ella Pandoc pierde el formato |
| `publish.sh`, `cv_sync.py`               | Sí                | lógica, no cambia entre máquinas                       |
| `cv_franklin_gomez_fullstack.docx`       | —                 | generado por `publish.sh`, se regenera siempre         |
| `cv-sync-credentials.json`               | No (`.gitignore`) | credencial — respaldar aparte, ver paso 4              |
| `token.json`, `.google-doc-id`, `.venv/` | No (`.gitignore`) | se regeneran solos en cada máquina                     |

## Nota sobre el formato (el "CSS" de Word)

Word/Google Docs no tienen CSS — el equivalente son los **estilos con nombre**
(`Heading 1`, `Heading 2`, `Normal`, `Strong`, `Emphasis`, `List Paragraph`).
Pandoc mapea el Markdown de `cv.md` a esos estilos:

| Markdown        | Estilo de Word usado |
| ---------------- | --------------------- |
| `# Título`       | `Heading 1` — nombre (centrado, negrita, azul marino, 17pt) |
| `## Título`       | `Heading 2` — encabezados de sección (negrita, azul marino, borde inferior, 11pt) |
| `**negrita**`     | `Strong` (carácter) — línea de rol/empresa (negrita, casi negro) |
| `*cursiva*`       | `Emphasis` (carácter) — línea de fecha (cursiva, gris, más chica) |
| `- viñeta`        | `List Paragraph` — Calibri gris, con sangría |
| texto normal      | `Normal` — Calibri, gris, base de todo el documento |

Esos 6 estilos están definidos en `reference-style.docx` (`word/styles.xml`)
para reproducir el look del CV original. Si en el futuro el resultado se ve
distinto a lo esperado, el ajuste se hace **ahí** (abriendo
`reference-style.docx` en Word/LibreOffice → modificar el estilo con nombre
correspondiente de la tabla de arriba), nunca en `cv.md`.
