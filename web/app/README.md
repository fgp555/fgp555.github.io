# Catálogo de herramientas

Página estática disponible en `https://frankgp.com/app/`, sin build ni dependencias.

Para agregar una aplicación, añade un `article.tool-card` dentro de `#tool-grid` en `index.html`, siguiendo las tarjetas existentes. Incluye nombre, tipo, descripción, enlace y palabras clave en `data-keywords`. La búsqueda, el contador y el estado vacío se calculan automáticamente desde las tarjetas. No es necesario modificar JavaScript.

Los enlaces relativos admiten herramientas alojadas fuera de `/app/`, como Fibra Detector. Usa únicamente herramientas existentes y evita enlaces provisionales. Sin JavaScript el catálogo y sus enlaces siguen disponibles; con JavaScript se habilitan búsqueda y cambio de tema. El tema usa la preferencia del sistema o la elección guardada con la clave `theme`, compartida con el portafolio.
