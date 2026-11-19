# Convenciones del proyecto

## Fuente única y español

Editar web/assets/js/data.js. Todo el contenido se mantiene en español; no agregar traducciones ni selector de idioma.

- projects contiene todos los proyectos del portafolio. Mantener id estable, nombre, descripción, fechas, rol, tecnologías y enlaces una sola vez.
- projects[].details conserva los logros completos para el detalle del portafolio.
- projects[].cv incluye order, summary y achievements (2–3 logros breves). Si falta cv, el proyecto no aparece en el currículum.
- projects[].featured incluye order, badge y metric para las tres tarjetas de portada. Las tarjetas reutilizan los datos del proyecto.
- getCVProjects() y getFeaturedProjects() seleccionan y ordenan las vistas; no crear listas paralelas de contenido.
- education, skills, summary y summaryLong contienen la formación, habilidades y presentaciones compartidas.

## CV y PDF

web/cv/index.html es la fuente para el CV web y el único PDF en español. npm run build:pdf genera web/cv/cv_franklin_gomez_fullstack.pdf. El generador rechaza más de tres páginas y conserva el archivo anterior. Verificar visualmente el PDF al cambiar contenido o estilos; no recortar ni truncar contenido para cumplir el límite.

## Portafolio y estilo

El portafolio muestra todos los projects. Capturas en proporción 1920×1200. Reutilizar theme.css y components.css. Iconos SVG inline, sin CDN de iconos.

## Mantenimiento y publicación

Ejecutar scripts desde la raíz. npm start sirve web/ sin caché. npm run linkedin:profile lee los proyectos y genera texto local, sin publicar en LinkedIn. La raíz pública es web/ y GitHub Pages se configura con GitHub Actions.

Cuando cambien assets compartidos, la versión de caché debe actualizarse antes del despliegue. No ejecutar npm run bump-version automáticamente: el usuario controla cuándo hacerlo.
