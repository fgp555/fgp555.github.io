/* Fuente única del sitio, solo en español.
 * projects: catálogo completo del portafolio.
 * cv: selección, orden, resumen y logros breves del CV (máximo 3 páginas).
 * featured: selección y orden de portada; no duplicar nombre, fechas ni stack.
 * details: historial completo del proyecto, fuera del CV resumido.
 */
const SITE_DATA = {
  "name": "Franklin Gomez Pacoricona",
  "title": "Mobile Developer — React Native & TypeScript",
  "email": {
    "user": "fgp555",
    "domain": "gmail.com"
  },
  "whatsappNumber": "51918221790",
  "links": {
    "linkedin": "https://linkedin.com/in/franklingp",
    "github": "https://github.com/fgp555",
    "portfolio": "/portfolio/",
    "services": "/services/",
    "cv": "/cv/",
    "cvPdf": "/cv/cv_franklin_gomez_fullstack.pdf"
  },
  "location": "Remoto · Perú",
  "pages": [
    {
      "label": "Inicio",
      "url": "/"
    },
    {
      "label": "Portafolio",
      "url": "/portfolio/"
    },
    {
      "label": "Servicios",
      "url": "/services/"
    },
    {
      "label": "CV",
      "url": "/cv/"
    },
    {
      "label": "Style Guide",
      "url": "/styleguide.html"
    },
    {
      "label": "404 Page",
      "url": "/404.html"
    }
  ],
  "summary": "Desarrollo y publico aplicaciones para Android e iOS con React Native y TypeScript. Experiencia con autenticación, notificaciones push y productos en producción como Mix&Match, que superó los 10.000 usuarios en sus primeros dos meses. Complemento el desarrollo mobile con automatización de releases, infraestructura AWS y APIs backend.",
  "summaryLong": "Desarrollador Mobile especializado en React Native y TypeScript, con aplicaciones publicadas en Google Play y App Store. Mix&Match superó los 10.000 usuarios en sus primeros dos meses. Complemento el desarrollo móvil con automatización de releases, infraestructura AWS/Terraform y APIs Node.js/NestJS. Experiencia profesional en desarrollo web desde 2020.",
  "technicalPractices": [
    "Desarrollé aplicaciones móviles con React Native y TypeScript, usando React Navigation, Redux Toolkit, Zustand y Context API según el caso de uso.",
    "Integré OAuth Google/Apple, notificaciones push y almacenamiento seguro de tokens con expo-secure-store.",
    "Compilé y publiqué aplicaciones con EAS Build y EAS Update; desarrollé App Publisher para automatizar releases Android con Go, Gradle y GitHub Actions.",
    "Implementé infraestructura AWS con Terraform, Docker, Nginx y Cloudflare Tunnel, con entornos dev/prod separados.",
    "Diseñé APIs REST con Node.js/NestJS/Express, autenticación JWT y bases de datos PostgreSQL/MySQL."
  ],
  "skills": [
    {
      "key": "mobile",
      "label": "Mobile",
      "jsonKey": "mobile",
      "items": [
        "React Native",
        "Expo",
        "EAS Build",
        "EAS Update",
        "React Navigation",
        "Redux Toolkit",
        "Zustand",
        "Context API",
        "Google Play Store",
        "Apple App Store",
        "Push Notifications",
        "expo-secure-store"
      ]
    },
    {
      "key": "cloud_devops",
      "label": "Cloud & DevOps",
      "jsonKey": "cloud_devops",
      "items": [
        "Terraform",
        "AWS EC2/RDS/S3/IAM",
        "AWS Lambda",
        "API Gateway",
        "EventBridge",
        "CloudWatch",
        "Docker",
        "Nginx",
        "Cloudflare Tunnel",
        "GitHub Actions"
      ]
    },
    {
      "key": "backend",
      "label": "Backend",
      "jsonKey": "backend",
      "items": [
        "Node.js",
        "NestJS",
        "Express.js",
        "WebSockets",
        "OpenAPI/Swagger",
        "Arquitectura modular"
      ]
    },
    {
      "key": "frontend",
      "label": "Frontend",
      "jsonKey": "frontend",
      "items": [
        "ReactJS",
        "NextJS",
        "TanStack Query",
        "SPA"
      ]
    },
    {
      "key": "languages",
      "label": "Lenguajes",
      "jsonKey": "lenguajes",
      "items": [
        "Go",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3"
      ]
    },
    {
      "key": "databases",
      "label": "Bases de datos",
      "jsonKey": "bases_de_datos",
      "items": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "DynamoDB",
        "TypeORM",
        "Mongoose"
      ]
    },
    {
      "key": "auth_security",
      "label": "Auth & Seguridad",
      "jsonKey": "auth_seguridad",
      "items": [
        "JWT",
        "OAuth Google",
        "OAuth Apple"
      ]
    },
    {
      "key": "testing",
      "label": "Testing",
      "jsonKey": "testing",
      "items": [
        "Jest",
        "Supertest"
      ]
    },
    {
      "key": "ai_dev",
      "label": "IA & Desarrollo Asistido",
      "jsonKey": "ia_desarrollo_asistido",
      "items": [
        "Claude Code"
      ]
    }
  ],
  "education": [
    {
      "year": "2025",
      "name": "React Native",
      "org": "DevTalles Academy",
      "bullets": [
        "Desarrollo de aplicaciones móviles multiplataforma con React Native.",
        "Integración de APIs REST, manejo de estado y navegación.",
        "Optimización de rendimiento y buenas prácticas para producción móvil."
      ]
    },
    {
      "year": "2024",
      "name": "Full Stack Web Developer",
      "org": "Henry Bootcamp (Argentina · Remoto)",
      "bullets": [
        "Desarrollo de aplicaciones web con ReactJS, NextJS, Node.js y NestJS.",
        "Diseño de APIs RESTful y arquitecturas backend escalables.",
        "Trabajo con bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB).",
        "Metodologías ágiles (Scrum), Git y Pair Programming."
      ]
    },
    {
      "year": "2020 — 2023",
      "name": "Desarrollo Web con WordPress",
      "org": "Formación independiente",
      "bullets": [
        "Desarrollo y personalización de temas con HTML, CSS y PHP.",
        "Optimización de rendimiento y SEO técnico.",
        "Implementación de prácticas de seguridad y mantenimiento en entornos productivos."
      ]
    },
    {
      "year": "2008 — 2010",
      "name": "Técnico en Computación e Informática",
      "org": "Instituto Tecnológico Unitek de IDAT (Perú)",
      "bullets": [
        "Formación técnica en fundamentos de computación e informática."
      ]
    }
  ],
  "projects": [
    {
      "id": "mix-match",
      "name": "Mix&Match",
      "description": "Outfit Planner / armario virtual. App móvil (Android/iOS) y web, OAuth con Google y Apple, microservicio en Python para remoción de fondo de imágenes.",
      "category": "fullstack",
      "image": "https://cdn.frankgp.com/portfolio/ivanageraldine-web.webp",
      "duration": "En curso",
      "year": "2025",
      "roles": [
        "backend",
        "mobile",
        "frontend",
        "devops"
      ],
      "technologies": [
        "React Native",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Zustand",
        "EAS Build",
        "Express",
        "MySQL",
        "AWS S3"
      ],
      "links": [
        {
          "label": "Ver sitio",
          "url": "http://ivanageraldine.com"
        }
      ],
      "date": "JUL — DIC 2025",
      "role": "Full Stack & Mobile Developer",
      "client": "Mix&Match Outfit Planner (Argentina) · Freelancer",
      "details": [
        "Lideré el desarrollo end-to-end de aplicación móvil multiplataforma (Android & iOS) y plataforma web con React Native y ReactJS + TypeScript.",
        "Diseñé y desarrollé APIs REST escalables con Express.js y MySQL, estructuradas bajo principios modulares y separación por capas.",
        "Implementé autenticación segura mediante OAuth (Google y Apple Sign-In) y gestión de sesiones con JWT, cumpliendo requisitos para publicación en App Store y Play Store.",
        "Implementé pruebas unitarias y de integración (Jest + Supertest) para los flujos de autenticación y middlewares críticos.",
        "Desarrollé microservicio en Python para procesamiento y eliminación automática de fondo en imágenes, deployado en el mismo VPS, optimizando el flujo de subida de contenido.",
        "Integré almacenamiento en AWS S3 con compresión y optimización de imágenes para reducir tiempos de carga.",
        "Configuré entorno productivo en VPS Linux con dominio, SSL y despliegue continuo.",
        "Implementé push notifications en la app móvil para mejorar el engagement y la retención de usuarios.",
        "Desarrollé panel de administración (dashboard) en el frontend para gestión de usuarios y contenido, usando TanStack Query para el manejo eficiente de datos asíncronos y caché.",
        "Gestioné el estado global de la aplicación combinando Redux Toolkit, Zustand y Context API según el caso de uso.",
        "Guardé tokens de sesión con expo-secure-store (Keychain en iOS, Keystore en Android) en vez de almacenamiento plano.",
        "Compilé y publiqué la app con EAS Build y EAS Update (Expo), incluyendo builds de iOS alquilando una instancia macOS en Scaleway al no contar con hardware Mac propio.",
        "Agregué feature de etiquetas (tags) para prendas, mejorando la organización y búsqueda dentro del armario virtual.",
        "Implementé rutina de limpieza para eliminar automáticamente usuarios inactivos con más de 90 días sin actividad, optimizando la base de datos.",
        "Producto lanzado en producción alcanzando +10,000 usuarios en los primeros 2 meses, y en mantenimiento y evolución continua desde entonces."
      ],
      "cv": {
        "order": 4,
        "summary": "App Android/iOS y web desarrollada para un cliente, con React Native y TypeScript.",
        "achievements": [
          "Superó los 10.000 usuarios en sus primeros dos meses y se publicó en Google Play y App Store.",
          "Integré OAuth Google/Apple, notificaciones push y almacenamiento seguro de tokens; backend Express/MySQL y S3."
        ]
      },
      "featured": {
        "order": 1,
        "badge": "LIVE",
        "metric": "+10,000 usuarios en 2 meses"
      }
    },
    {
      "id": "transpaservic-mobile",
      "name": "Gestión de Órdenes — Mobile",
      "description": "Versión móvil del sistema de gestión de órdenes de transporte para Transpaservic.",
      "category": "mobile",
      "image": "https://cdn.frankgp.com/portfolio/transpaservic-mobile.webp",
      "duration": "1 mes",
      "year": "2025",
      "roles": [
        "backend",
        "mobile",
        "devops"
      ],
      "technologies": [
        "Figma",
        "React Native",
        "Redux Toolkit",
        "Zustand",
        "EAS Build",
        "NestJS",
        "MySQL"
      ],
      "links": [
        {
          "label": "Play Store",
          "url": "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic"
        }
      ],
      "date": "ENE — ABR 2025",
      "role": "Full Stack, Mobile & DevOps Developer",
      "client": "Transpaservic (Colombia) · Freelancer",
      "details": [
        "Diseñé e implementé sistema web y móvil de gestión de órdenes de transporte con ReactJS, React Native, NestJS y MySQL, donde la central emite órdenes y las empresas transportistas las aprueban desde la app.",
        "Implementé WebSockets para actualizaciones en tiempo real.",
        "Integré push notifications en la aplicación móvil.",
        "Automaticé notificaciones transaccionales mediante integración con WhatsApp API.",
        "Gestioné el estado de la aplicación móvil con Redux Toolkit, Zustand y Context API según el caso, y usé EAS Build/EAS Update (Expo) para la compilación y distribución de builds.",
        "Publicación en Google Play Store y despliegue web en producción.",
        "Diseñé infraestructura como código (IaC) con Terraform, estructurando módulos reutilizables consumidos por múltiples entornos (dev/prod).",
        "Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Security Groups, Systems Manager) mediante Terraform.",
        "Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.",
        "Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).",
        "Gestioné variables sensibles y credenciales (tfvars, secrets) siguiendo buenas prácticas de seguridad, evitando exposición en control de versiones.",
        "Automaticé el proceso de deploy con scripts Bash (git pull, generación de .env, rebuild de contenedores) para actualizar la app sin recrear la infraestructura base.",
        "El sistema sigue en producción, en mantenimiento y mejoras continuas desde entonces."
      ],
      "cv": {
        "order": 5,
        "summary": "App móvil de gestión de órdenes de transporte, integrada con una plataforma web y backend NestJS.",
        "achievements": [
          "Publicada en Google Play, con React Native, Expo, notificaciones push y actualizaciones en tiempo real.",
          "Desarrollé APIs con NestJS/MySQL y configuré infraestructura AWS con Terraform, Docker y Nginx."
        ]
      },
      "featured": {
        "order": 2,
        "badge": "PUBLICADO",
        "metric": "Publicado en Google Play Store"
      }
    },
    {
      "id": "app-publisher",
      "name": "App Publisher",
      "description": "CLI interactiva en Go para compilar, firmar y publicar aplicaciones Android nativas y React Native en Google Play. Automatiza el incremento de versionCode, la carga de AAB y la generación de workflows de GitHub Actions para Kotlin y Expo/React Native.",
      "category": "tools",
      "image": "https://cdn.frankgp.com/portfolio/app-publisher.webp",
      "duration": "Proyecto para la comunidad",
      "year": "2026",
      "roles": [
        "mobile",
        "devops"
      ],
      "technologies": [
        "Go",
        "Android",
        "Gradle",
        "Google Play Developer API",
        "GitHub Actions",
        "React Native",
        "Expo"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/app-publisher"
        }
      ],
      "date": "NOV 2026",
      "role": "Mobile & DevOps Developer · Proyecto para la comunidad",
      "client": "App Publisher",
      "details": [
        "Desarrollé una CLI en Go con menú interactivo y detección de proyectos Android y React Native para ejecutar tareas de compilación y publicación mediante Gradle.",
        "Integré Google Play Developer API para consultar versiones y cargar Android App Bundles (AAB) en el track configurado, con autenticación mediante cuenta de servicio.",
        "Automaticé el incremento de versionCode antes de compilar y publicar, con soporte para archivos Gradle en Groovy y Kotlin DSL.",
        "Generé workflows de GitHub Actions para proyectos Kotlin y Expo/React Native, con compilación, firma de releases y publicación automática desde la rama deploy.",
        "Implementé un config plugin de Expo para configurar la firma de Android durante Prebuild, utilizando variables de entorno y configuración local para las credenciales."
      ],
      "cv": {
        "order": 2,
        "summary": "Herramienta para la comunidad mobile que automatiza releases Android y React Native.",
        "achievements": [
          "Desarrollé una CLI en Go para compilar con Gradle, incrementar versionCode y publicar AAB mediante Google Play Developer API.",
          "Generé workflows de GitHub Actions y configuración de firma para Kotlin y Expo/React Native."
        ]
      },
      "featured": {
        "order": 3,
        "badge": "CLI",
        "metric": "Automatización de releases Android"
      }
    },
    {
      "id": "call-project",
      "name": "Call Project",
      "description": "Plataforma en producción para detectar oportunidades de fibra óptica y centralizar su seguimiento comercial, con más de 400 asesores registrados y 20 supervisores con sus respectivos equipos durante la primera semana.",
      "category": "fullstack",
      "image": "https://cdn.frankgp.com/portfolio/call-project-mobile.webp",
      "duration": "Freelance",
      "year": "2026",
      "roles": [
        "frontend",
        "backend"
      ],
      "technologies": [
        "Kotlin",
        "Jetpack Compose",
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MariaDB",
        "TypeORM",
        "Firebase Cloud Messaging"
      ],
      "links": [
        {
          "label": "Ver proyecto",
          "url": "https://frankgp.com/fibra-detector"
        }
      ],
      "date": "NOV 2026",
      "role": "Mobile & Full Stack Developer · Freelance",
      "client": "Call Project",
      "details": [
        "Desarrollé de extremo a extremo una plataforma de monitoreo comercial con dashboard React y TypeScript, API Node.js y Express, y persistencia en MariaDB con TypeORM.",
        "Implementé una extensión para Chrome y Edge que identifica ofertas de fibra óptica en CTR, genera alertas y registra detecciones y última actividad para facilitar el seguimiento de oportunidades y apoyar las ventas.",
        "Construí una app Android nativa con Kotlin y Jetpack Compose, notificaciones push mediante Firebase Cloud Messaging y monitoreo en tiempo real mediante Server-Sent Events (SSE).",
        "Implementé autenticación con Google OAuth y correo/contraseña, permisos por rol y cobertura de equipos, importación masiva y trazabilidad del historial de detecciones.",
        "Puse la solución en producción; durante la primera semana se registraron más de 400 asesores y 20 supervisores, cada uno con su equipo."
      ],
      "cv": {
        "order": 1,
        "summary": "Plataforma freelance para detectar oportunidades de fibra óptica y centralizar el seguimiento comercial.",
        "achievements": [
          "Desarrollé dashboard React/TypeScript, API Express/MariaDB, extensión Chrome/Edge y app Android con Kotlin y Jetpack Compose.",
          "Más de 400 asesores y 20 supervisores registrados durante la primera semana; push con FCM y seguimiento mediante SSE."
        ]
      }
    },
    {
      "id": "img-viewer",
      "name": "IMG Viewer",
      "description": "Visor y editor ligero de imágenes para Windows, desarrollado con asistencia de inteligencia artificial como proyecto para la comunidad. Incluye navegación por carpetas, zoom, recorte, rotación, anotaciones y captura de pantalla.",
      "category": "desktop",
      "image": "https://cdn.frankgp.com/portfolio/imgviewer.webp",
      "duration": "Proyecto para la comunidad",
      "year": "2026",
      "roles": [
        "ai_development"
      ],
      "technologies": [
        "C#",
        ".NET 10",
        "WPF",
        "XAML",
        "WebP",
        "SharpVectors"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/img-viewer"
        }
      ],
      "date": "NOV 2026",
      "role": "Desarrollo con IA · Proyecto para la comunidad"
    },
    {
      "id": "pdf-reader",
      "name": "PDF Reader",
      "description": "Lector de PDF para Windows, desarrollado con asistencia de inteligencia artificial como proyecto para la comunidad. Incluye navegación por páginas y documentos, búsqueda y selección de texto, zoom, rotación, impresión y tema claro/oscuro.",
      "category": "desktop",
      "image": "https://cdn.frankgp.com/portfolio/pdfreader.webp",
      "duration": "Proyecto para la comunidad",
      "year": "2026",
      "roles": [
        "ai_development"
      ],
      "technologies": [
        "C#",
        ".NET 10",
        "WPF",
        "XAML",
        "PDFtoImage",
        "PdfPig"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/PDFReader"
        }
      ],
      "date": "NOV 2026",
      "role": "Desarrollo con IA · Proyecto para la comunidad"
    },
    {
      "id": "e-transportech",
      "name": "E-Transportech",
      "description": "Diseño y desarrollo de un sitio web responsive para una empresa de transporte con Angular 19 y Node.js/Express, páginas de servicios y formulario de contacto con envío de correos y almacenamiento de consultas.",
      "category": "fullstack",
      "image": null,
      "duration": "Freelance",
      "year": "2025",
      "roles": [
        "frontend",
        "backend"
      ],
      "technologies": [
        "Angular 19",
        "Node.js",
        "Express"
      ],
      "links": [],
      "date": "MAR — ABR 2025",
      "role": "Desarrollador Full Stack",
      "client": "E-Transportech · Freelancer",
      "details": [
        "Diseñé y desarrollé un sitio web responsive con Angular 19 para presentar la empresa de transporte y sus servicios en dispositivos móviles y de escritorio.",
        "Implementé el backend con Node.js y Express.js para procesar el formulario de contacto, enviar correos y almacenar las consultas recibidas.",
        "Realicé el despliegue del sitio y del backend en un servidor, integrando la presentación de servicios con la recepción de consultas comerciales."
      ]
    },
    {
      "id": "wordpress",
      "name": "Sitios WordPress para clientes",
      "description": "Sitios para clientes internacionales, gestión de hosting/SSL en cPanel y optimización SEO técnica.",
      "category": "fullstack",
      "image": null,
      "duration": "Freelance",
      "year": "2020",
      "roles": [
        "frontend",
        "backend"
      ],
      "technologies": [
        "WordPress",
        "PHP",
        "cPanel"
      ],
      "links": [],
      "date": "2020 — 2023",
      "role": "Desarrollador WordPress",
      "client": "Freelancer / Remoto (Perú)",
      "details": [
        "Desarrollo y personalización de sitios WordPress para clientes internacionales.",
        "Gestión de hosting, dominios, SSL y configuraciones de seguridad en cPanel.",
        "Optimización de rendimiento y SEO técnico."
      ]
    },
    {
      "id": "briela",
      "name": "Briela Sin Fronteras",
      "description": "Infraestructura como código con Terraform sobre AWS (EC2, RDS, S3, IAM) para un sitio Django + Wagtail de terceros, publicado vía Cloudflare Tunnel sin exponer puertos.",
      "category": "devops",
      "image": "https://cdn.frankgp.com/portfolio/brielasinfronteras-web.webp",
      "duration": "Mantenimiento",
      "year": "2026",
      "roles": [
        "devops"
      ],
      "technologies": [
        "Terraform",
        "AWS EC2/RDS/S3/IAM",
        "Docker",
        "Nginx",
        "Cloudflare Tunnel"
      ],
      "links": [
        {
          "label": "Ver sitio",
          "url": "http://brielasinfronteras.org"
        }
      ],
      "date": "AGO 2026",
      "role": "Proyecto DevOps Freelance",
      "client": "Briela Sin Fronteras (Perú) · Freelancer",
      "details": [
        "Diseñé infraestructura como código (IaC) con Terraform para un sitio Django + Wagtail de terceros, con módulo reutilizable entre dos entornos (dev y prod) con state independiente.",
        "Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Systems Manager) mediante Terraform.",
        "Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.",
        "Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).",
        "Desarrollé script de automatización de deploy (Bash) con git pull, build, migraciones, colecta de estáticos y healthcheck en cada actualización.",
        "Configuré backups automatizados de base de datos a S3 por entorno.",
        "El proyecto sigue en producción, con soporte y mantenimiento ligero continuo."
      ],
      "cv": {
        "order": 3,
        "summary": "Infraestructura AWS para un sitio Django/Wagtail de un cliente, con entornos dev/prod separados.",
        "achievements": [
          "Implementé módulos Terraform para EC2, RDS, S3 e IAM, contenedores Docker y exposición mediante Cloudflare Tunnel.",
          "Automaticé despliegues y backups a S3, con healthchecks y mantenimiento en producción."
        ]
      }
    },
    {
      "id": "uptime-monitor",
      "name": "Monitor de Disponibilidad Web",
      "description": "Microservicio serverless en AWS que revisa la disponibilidad de sitios web de forma programada y envía alertas por email ante caídas o recuperaciones, con el estado persistido en DynamoDB.",
      "category": "devops",
      "image": "https://cdn.frankgp.com/portfolio/uptime-monitor.webp",
      "duration": "Proyecto personal",
      "year": "2026",
      "roles": [
        "backend",
        "devops"
      ],
      "technologies": [
        "Node.js",
        "Terraform",
        "AWS Lambda",
        "API Gateway",
        "EventBridge",
        "DynamoDB",
        "CloudWatch"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/fgp-microservices"
        }
      ],
      "date": "AGO 2026",
      "role": "Proyecto DevOps Personal",
      "client": "Monitor de Disponibilidad Web",
      "details": [
        "Desarrollé un microservicio serverless en AWS (Lambda) que revisa la disponibilidad de varios sitios web en paralelo, con manejo de timeouts y detección de bloqueos de Cloudflare para evitar falsos positivos.",
        "Programé la ejecución automática mediante EventBridge (regla programada) y expuse una API Gateway para invocación manual.",
        "Persistí el estado de cada sitio (activo/caído, desde cuándo) en DynamoDB, para detectar cambios de estado entre revisiones.",
        "Envié alertas automáticas por email ante caídas y recuperaciones, incluyendo el tiempo de inactividad calculado.",
        "Definí toda la infraestructura como código con Terraform (Lambda, API Gateway, EventBridge, DynamoDB, IAM).",
        "Monitoreo y debugging de la ejecución vía CloudWatch Logs.",
        "Desarrollé el proyecto usando Claude Code como herramienta de IA agéntica en el flujo de trabajo diario (implementación, debugging e infraestructura como código)."
      ]
    },
    {
      "id": "transpaservic-web",
      "name": "Gestión de Órdenes — Web",
      "description": "Sistema de gestión de órdenes de transporte para Transpaservic: la central emite órdenes y las empresas transportistas las aprueban desde la app.",
      "category": "fullstack",
      "image": "https://cdn.frankgp.com/portfolio/transpaservic-web.webp",
      "duration": "3 meses",
      "year": "2025",
      "roles": [
        "backend",
        "devops"
      ],
      "technologies": [
        "Figma",
        "ReactJS",
        "NestJS",
        "CPanel",
        "MySQL"
      ],
      "links": [
        {
          "label": "Ver sitio",
          "url": "http://transpaservic.com.co"
        }
      ],
      "date": "2025",
      "role": "Desarrollo de software"
    },
    {
      "id": "citas-medicas",
      "name": "Sistema de Citas Médicas",
      "description": "Sistema de citas para clínicas.",
      "category": "fullstack",
      "image": null,
      "duration": "1 mes",
      "year": "2024",
      "roles": [
        "backend",
        "devops"
      ],
      "technologies": [
        "ReactJS",
        "NestJS",
        "CPanel",
        "PostgreSQL"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/gio-appointments-project"
        }
      ],
      "date": "OCT — NOV 2024",
      "role": "Desarrollador Full Stack",
      "client": "Sistema de Citas Médicas (Argentina) · Freelancer",
      "details": [
        "Desarrollé sistema de citas para clínicas, con backend en NestJS, PostgreSQL y TypeORM.",
        "Diseño de APIs REST y autenticación segura con JWT.",
        "Despliegue en AWS EC2 y publicación de frontend en AWS Amplify."
      ]
    },
    {
      "id": "envios",
      "name": "Sistema de Envíos",
      "description": "Sistema de envíos y entregas con generación de reportes en PDF.",
      "category": "fullstack",
      "image": null,
      "duration": "1 mes",
      "year": "2024",
      "roles": [
        "backend",
        "frontend",
        "devops"
      ],
      "technologies": [
        "HTML",
        "CSS",
        "JS",
        "NestJS",
        "CPanel",
        "MySQL"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/fgp555/nere-shipping-project"
        }
      ],
      "date": "2024",
      "role": "Desarrollo de software"
    },
    {
      "id": "bp-ventures",
      "name": "BP Ventures",
      "description": "Sistema de entregables para la empresa BP Ventures, con API documentada en OpenAPI/Swagger y CI (GitHub Actions) que la sincroniza con SwaggerHub.",
      "category": "fullstack",
      "image": null,
      "duration": "1 mes",
      "year": "2024",
      "roles": [
        "backend",
        "frontend",
        "devops"
      ],
      "technologies": [
        "NextJS",
        "NestJS",
        "Swagger",
        "CPanel",
        "PostgreSQL"
      ],
      "links": [
        {
          "label": "YouTube",
          "url": "https://youtu.be/vSBttwQO62k"
        }
      ],
      "date": "AGO — SEP 2024",
      "role": "Desarrollador Full Stack",
      "client": "BPVentures (Henry Projects, Argentina) · Freelancer",
      "details": [
        "Desarrollo full stack con NestJS y ReactJS.",
        "Implementación de WebSockets para notificaciones en tiempo real.",
        "Documenté la API con OpenAPI/Swagger (NestJS Swagger module) y configuré un pipeline de CI (GitHub Actions) que sincroniza automáticamente la especificación con SwaggerHub en cada push.",
        "Trabajo colaborativo en equipo de 6 personas bajo metodología Scrum."
      ]
    },
    {
      "id": "mariaknoll",
      "name": "Mariaknoll Store",
      "description": "Catálogo full stack para vestidos de fiesta.",
      "category": "fullstack",
      "image": null,
      "duration": "1 mes",
      "year": "2024",
      "roles": [
        "backend",
        "devops"
      ],
      "technologies": [
        "HTML",
        "CSS",
        "JS",
        "NodeJS",
        "CPanel",
        "MongoDB"
      ],
      "links": [
        {
          "label": "GitHub",
          "url": "https://github.com/buchervanesa/mariaknoll.website"
        }
      ],
      "date": "MAY — JUN 2024",
      "role": "Desarrollador Full Stack",
      "client": "Mariaknoll Store (Argentina) · Freelancer",
      "details": [
        "Desarrollo backend con Node.js y MongoDB.",
        "Implementación de carrito de compras y seguimiento de pedidos.",
        "Diseño de frontend con HTML, CSS y JavaScript."
      ]
    },
    {
      "id": "catalogo-laptops",
      "name": "Catálogo de Laptops",
      "description": "Catálogo para la venta de laptops.",
      "category": "frontend",
      "image": "https://cdn.frankgp.com/portfolio/petulap-web.webp",
      "duration": "1 semana",
      "year": "2022",
      "roles": [
        "frontend"
      ],
      "technologies": [
        "HTML",
        "CSS",
        "JS"
      ],
      "links": [
        {
          "label": "Ver sitio",
          "url": "https://catalogo-web.github.io/catalogo-petulap"
        }
      ],
      "date": "2022",
      "role": "Desarrollo de software"
    }
  ]
};

function getCVProjects() {
  return SITE_DATA.projects.filter(p => p.cv).sort((a, b) => a.cv.order - b.cv.order);
}
function getFeaturedProjects() {
  return SITE_DATA.projects.filter(p => p.featured).sort((a, b) => a.featured.order - b.featured.order);
}
