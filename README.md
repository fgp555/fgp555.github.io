```sh
http-server web -c-1
```

# fgp555.github.io

> - https://web.frankgp.com
> - https://web.frankgp.com/app/call
> - https://web.frankgp.com/app/stats

# Speech

> - https://web.frankgp.com/speech/260401-danzel
> - https://web.frankgp.com/speech/mario-v-elogio
> - https://web.frankgp.com/speech/260517-SimonSquibb

# App

> - https://web.frankgp.com/app/md-to-pdf
> - https://web.frankgp.com/app/password-manager
> - https://web.frankgp.com/app/proyect-calc
> - https://web.frankgp.com/app/video-player

## Estructura y mantenimiento

- `web/`: raíz pública del sitio (HTML, recursos, apps y CV).
- `scripts/`: mantenimiento local; ejecutar desde la raíz del repositorio.
- `docs/`: documentación interna, fuera del contenido publicado.
- `npm run bump-version`: actualiza las versiones de caché en `web/`.
- `npm run build:pdf`: genera los dos PDF en `web/cv/`.
- `npm run linkedin:profile`: lee `web/assets/js/data.js`.

## Publicación

El workflow `.github/workflows/pages.yml` publica únicamente `web/` en GitHub Pages al hacer push a `main`, o mediante ejecución manual.
En GitHub, configurar **Settings → Pages → Build and deployment → Source → GitHub Actions** antes del despliegue.
Mantener el dominio personalizado `frankgp.com` en Pages; `web/CNAME` conserva el archivo del dominio.
Las URLs públicas siguen siendo `/`, `/cv/`, `/portfolio/`, etc.; no llevan `/web/`.