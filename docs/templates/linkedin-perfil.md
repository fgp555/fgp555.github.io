# Perfil de LinkedIn — listo para copiar/pegar

> Generado automáticamente desde `assets/js/data.js` — no editar a mano,
> volver a correr `npm run linkedin:profile` después de actualizar el CV.
> Los bloques de texto (Titular, Acerca de, cada Experiencia/Educación)
> están pensados para copiar tal cual al campo correspondiente en
> linkedin.com/in/franklingp/edit (Aptitudes es una checklist de
> referencia, no un campo de texto — se agregan una por una en LinkedIn).

## Titular (headline)

_127 / 220 caracteres (límite de LinkedIn)_

```
Full Stack & Mobile Developer | TypeScript, React, React Native, NestJS, AWS | Construyo desde la arquitectura hasta producción
```

## Acerca de

_976 / 2600 caracteres (límite de LinkedIn)_

```
Soy Franklin, Full Stack & Mobile Developer con experiencia profesional en desarrollo web desde 2020 y 3+ años construyendo aplicaciones modernas con TypeScript, React, React Native y Node.js en entornos productivos. Experiencia liderando proyectos end-to-end, desde el diseño de arquitectura backend hasta el despliegue en producción, aplicando buenas prácticas y principios SOLID.

Algunas cosas que hago en el día a día:
🔹 Definí arquitectura backend basada en NestJS aplicando principios SOLID y separación por capas (controllers, services, repositories).
🔹 Diseñé modelos relacionales optimizados con índices y relaciones normalizadas en PostgreSQL/MySQL.
🔹 Implementé estrategias de autenticación JWT + OAuth con control de roles y protección de rutas.
🔹 Configuré entornos productivos en AWS (EC2, S3, Amplify) y VPS Linux con Nginx y SSL.

Disponible para proyectos freelance remotos y posiciones full-time.
Portafolio: frankgp.com/portfolio/ · CV: frankgp.com/cv/
```

## Experiencia

### Proyecto DevOps Freelance — Briela Sin Fronteras (Perú) · Freelancer
**Fechas:** AGO 2026

```
• Diseñé infraestructura como código (IaC) con Terraform para un sitio Django + Wagtail de terceros, con módulo reutilizable entre dos entornos (dev y prod) con state independiente.
• Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Systems Manager) mediante Terraform.
• Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.
• Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).
• Desarrollé script de automatización de deploy (Bash) con git pull, build, migraciones, colecta de estáticos y healthcheck en cada actualización.
• Configuré backups automatizados de base de datos a S3 por entorno.
• El proyecto sigue en producción, con soporte y mantenimiento ligero continuo.
```

### Proyecto DevOps Personal — Monitor de Disponibilidad Web
**Fechas:** AGO 2026

```
• Desarrollé un microservicio serverless en AWS (Lambda) que revisa la disponibilidad de varios sitios web en paralelo, con manejo de timeouts y detección de bloqueos de Cloudflare para evitar falsos positivos.
• Programé la ejecución automática mediante EventBridge (regla programada) y expuse una API Gateway para invocación manual.
• Persistí el estado de cada sitio (activo/caído, desde cuándo) en DynamoDB, para detectar cambios de estado entre revisiones.
• Envié alertas automáticas por email ante caídas y recuperaciones, incluyendo el tiempo de inactividad calculado.
• Definí toda la infraestructura como código con Terraform (Lambda, API Gateway, EventBridge, DynamoDB, IAM).
• Monitoreo y debugging de la ejecución vía CloudWatch Logs.
```

### Full Stack & Mobile Developer — Mix&Match Outfit Planner (Argentina) · Freelancer
**Fechas:** JUL — DIC 2025

```
• Lideré el desarrollo end-to-end de aplicación móvil multiplataforma (Android & iOS) y plataforma web con React Native y ReactJS + TypeScript.
• Diseñé y desarrollé APIs REST escalables con Express.js y MySQL, estructuradas bajo principios modulares y separación por capas.
• Implementé autenticación segura mediante OAuth (Google y Apple Sign-In) y gestión de sesiones con JWT, cumpliendo requisitos para publicación en App Store y Play Store.
• Implementé pruebas unitarias y de integración (Jest + Supertest) para los flujos de autenticación y middlewares críticos.
• Desarrollé microservicio en Python para procesamiento y eliminación automática de fondo en imágenes, deployado en el mismo VPS, optimizando el flujo de subida de contenido.
• Integré almacenamiento en AWS S3 con compresión y optimización de imágenes para reducir tiempos de carga.
• Configuré entorno productivo en VPS Linux con dominio, SSL y despliegue continuo.
• Implementé push notifications en la app móvil para mejorar el engagement y la retención de usuarios.
• Desarrollé panel de administración (dashboard) en el frontend para gestión de usuarios y contenido, usando TanStack Query para el manejo eficiente de datos asíncronos y caché.
• Agregué feature de etiquetas (tags) para prendas, mejorando la organización y búsqueda dentro del armario virtual.
• Implementé rutina de limpieza para eliminar automáticamente usuarios inactivos con más de 90 días sin actividad, optimizando la base de datos.
• Producto lanzado en producción alcanzando +10,000 usuarios en los primeros 2 meses, y en mantenimiento y evolución continua desde entonces.
```

### Full Stack, Mobile & DevOps Developer — Transpaservic (Colombia) · Freelancer
**Fechas:** ENE — ABR 2025

```
• Diseñé e implementé sistema web y móvil de gestión de órdenes de transporte con ReactJS, React Native, NestJS y MySQL, donde la central emite órdenes y las empresas transportistas las aprueban desde la app.
• Implementé WebSockets para actualizaciones en tiempo real.
• Integré push notifications en la aplicación móvil.
• Automaticé notificaciones transaccionales mediante integración con WhatsApp API.
• Publicación en Google Play Store y despliegue web en producción.
• Diseñé infraestructura como código (IaC) con Terraform, estructurando módulos reutilizables consumidos por múltiples entornos (dev/prod).
• Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Security Groups, Systems Manager) mediante Terraform.
• Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.
• Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).
• Gestioné variables sensibles y credenciales (tfvars, secrets) siguiendo buenas prácticas de seguridad, evitando exposición en control de versiones.
• Automaticé el proceso de deploy con scripts Bash (git pull, generación de .env, rebuild de contenedores) para actualizar la app sin recrear la infraestructura base.
• El sistema sigue en producción, en mantenimiento y mejoras continuas desde entonces.
```

### Desarrollador Full Stack — Sistema de Citas Médicas (Argentina) · Freelancer
**Fechas:** OCT — NOV 2024

```
• Desarrollé sistema de citas para clínicas, con backend en NestJS, PostgreSQL y TypeORM.
• Diseño de APIs REST y autenticación segura con JWT.
• Despliegue en AWS EC2 y publicación de frontend en AWS Amplify.
```

### Desarrollador Full Stack — BPVentures (Henry Projects, Argentina) · Freelancer
**Fechas:** AGO — SEP 2024

```
• Desarrollo full stack con NestJS y ReactJS.
• Implementación de WebSockets para notificaciones en tiempo real.
• Documenté la API con OpenAPI/Swagger (NestJS Swagger module) y configuré un pipeline de CI (GitHub Actions) que sincroniza automáticamente la especificación con SwaggerHub en cada push.
• Trabajo colaborativo en equipo de 6 personas bajo metodología Scrum.
```

### Desarrollador Full Stack — Mariaknoll Store (Argentina) · Freelancer
**Fechas:** MAY — JUN 2024

```
• Desarrollo backend con Node.js y MongoDB.
• Implementación de carrito de compras y seguimiento de pedidos.
• Diseño de frontend con HTML, CSS y JavaScript.
```

### Desarrollador WordPress — Freelancer / Remoto (Perú)
**Fechas:** 2020 — 2023

```
• Desarrollo y personalización de sitios WordPress para clientes internacionales.
• Gestión de hosting, dominios, SSL y configuraciones de seguridad en cPanel.
• Optimización de rendimiento y SEO técnico.
```

## Educación

### React Native — DevTalles Academy
**Año:** 2025

```
• Desarrollo de aplicaciones móviles multiplataforma con React Native.
• Integración de APIs REST, manejo de estado y navegación.
• Optimización de rendimiento y buenas prácticas para producción móvil.
```

### Full Stack Web Developer — Henry Bootcamp (Argentina · Remoto)
**Año:** 2024

```
• Desarrollo de aplicaciones web con ReactJS, NextJS, Node.js y NestJS.
• Diseño de APIs RESTful y arquitecturas backend escalables.
• Trabajo con bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB).
• Metodologías ágiles (Scrum), Git y Pair Programming.
```

### Desarrollo Web con WordPress — Formación independiente
**Año:** 2020 — 2023

```
• Desarrollo y personalización de temas con HTML, CSS y PHP.
• Optimización de rendimiento y SEO técnico.
• Implementación de prácticas de seguridad y mantenimiento en entornos productivos.
```

### Estudios de Computación e Informática — Instituto Tecnológico Unitek de IDAT (Perú)
**Año:** 2008 — 2010

```
• Formación técnica en fundamentos de computación e informática.
```

## Aptitudes (agregar manualmente en LinkedIn, una por una)

**Lenguajes**
- [ ] TypeScript
- [ ] JavaScript
- [ ] HTML5
- [ ] CSS3

**Frontend**
- [ ] ReactJS
- [ ] NextJS
- [ ] TanStack Query
- [ ] SPA

**Mobile**
- [ ] React Native
- [ ] Expo
- [ ] Google Play Store
- [ ] Apple App Store
- [ ] Push Notifications

**Backend**
- [ ] Node.js
- [ ] NestJS
- [ ] Express.js
- [ ] WebSockets
- [ ] OpenAPI/Swagger
- [ ] Arquitectura modular

**Bases de datos**
- [ ] PostgreSQL
- [ ] MySQL
- [ ] MongoDB
- [ ] DynamoDB
- [ ] TypeORM
- [ ] Mongoose

**Cloud & DevOps**
- [ ] Terraform
- [ ] AWS EC2/RDS/S3/IAM
- [ ] AWS Lambda
- [ ] API Gateway
- [ ] EventBridge
- [ ] CloudWatch
- [ ] Docker
- [ ] Nginx
- [ ] Cloudflare Tunnel
- [ ] GitHub Actions

**Auth & Seguridad**
- [ ] JWT
- [ ] OAuth Google
- [ ] OAuth Apple

**Testing**
- [ ] Jest
- [ ] Supertest
