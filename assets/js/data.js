/* ============================================================
   SITE_DATA — frankgp.com
   Fuente única de verdad para identidad, contacto, resumen,
   stack, experiencia y educación. Cargado por index.html,
   cv/index.html y portfolio/index.html (y cualquier página
   futura que necesite estos datos).

   Edita SOLO aquí — nunca hardcodear email, links, fechas de
   experiencia o educación directamente en un HTML.
============================================================ */
// Año en que empezó la experiencia profesional con el stack actual
// (backend Node.js/NestJS). Se usa para calcular "X años" dinámicamente en
// el resumen del CV (summary/summaryLong) — así el número sube solo cada
// año en vez de quedar hardcodeado y desactualizarse.
const STACK_SINCE_YEAR = 2023;
const stackYears = new Date().getFullYear() - STACK_SINCE_YEAR;

const SITE_DATA = {
  name: "Franklin Gomez Pacoricona",
  title: "Full Stack & Mobile Developer",

  email: { user: "fgp555", domain: "gmail.com" },
  whatsappNumber: "51918221790",

  links: {
    linkedin: "https://linkedin.com/in/franklingp",
    github: "https://github.com/fgp555",
    portfolio: "/portfolio/",
    services: "/services/",
    cv: "/cv/",
    cvPdf: "/cv/cv_franklin_gomez_fullstack.pdf",
    cvPdfEn: "/cv/cv_franklin_gomez_fullstack_en.pdf",
  },

  location: { es: "Remoto · Perú", en: "Remote · Peru" },

  // Páginas del sitio, usadas por el <select> "Ir a…" flotante (ver
  // assets/js/page-nav.js y .page-nav-select en components.css). Agregar
  // una página nueva = agregar una línea aquí, nada más.
  pages: [
    { label: { es: "Inicio", en: "Home" }, url: "/" },
    { label: { es: "Portafolio", en: "Portfolio" }, url: "/portfolio/" },
    { label: { es: "Servicios", en: "Services" }, url: "/services/" },
    { label: "CV", url: "/cv/" },
    { label: "Style Guide", url: "/styleguide.html" },
    { label: "404 Page", url: "/404.html" },
  ],

  summary: {
    es: `Especialista en TypeScript, React, React Native, NestJS y despliegue en AWS. ${stackYears}+ años llevando aplicaciones desde la arquitectura hasta usuarios reales, aplicando SOLID y buenas prácticas de infraestructura.`,
    en: `Full Stack & Mobile Developer specializing in TypeScript, React, React Native, NestJS, and AWS deployment. ${stackYears}+ years taking applications from architecture to real users, applying SOLID principles and solid infrastructure practices.`,
  },

  // Resumen largo para el CV (perfil profesional completo, bilingüe —
  // usado por cv/index.html vía ?lang=es|en). "summary" de arriba es
  // la versión corta para el hero del sitio.
  summaryLong: {
    es: `Full Stack & Mobile Developer con experiencia profesional en desarrollo web desde 2020 y ${stackYears}+ años construyendo aplicaciones modernas con TypeScript, React, React Native y Node.js en entornos productivos. Experiencia liderando proyectos end-to-end, desde el diseño de arquitectura backend hasta el despliegue en producción, aplicando buenas prácticas y principios SOLID.`,
    en: `Full Stack & Mobile Developer with professional web development experience since 2020 and ${stackYears}+ years building modern applications with TypeScript, React, React Native, and Node.js in production environments. Experienced in leading end-to-end projects, from backend architecture design to production deployment, applying best practices and SOLID principles.`,
  },

  // "Arquitectura y responsabilidad técnica" del CV — bilingüe, usado por
  // cv/index.html.
  technicalPractices: {
    es: [
      "Definí arquitectura backend basada en NestJS aplicando principios SOLID y separación por capas (controllers, services, repositories).",
      "Diseñé modelos relacionales optimizados con índices y relaciones normalizadas en PostgreSQL/MySQL.",
      "Implementé estrategias de autenticación JWT + OAuth con control de roles y protección de rutas.",
      "Configuré entornos productivos en AWS (EC2, S3, Amplify) y VPS Linux con Nginx y SSL.",
    ],
    en: [
      "Defined backend architecture based on NestJS, applying SOLID principles and layered separation (controllers, services, repositories).",
      "Designed optimized relational models with indexes and normalized relationships in PostgreSQL/MySQL.",
      "Implemented JWT + OAuth authentication strategies with role-based access control and route protection.",
      "Configured production environments on AWS (EC2, S3, Amplify) and Linux VPS with Nginx and SSL.",
    ],
  },

  // Las 3 cards de "Proyectos destacados" en index.html — texto curado para
  // ese pitch (bilingüe, con métrica de impacto), distinto de "projects"
  // (galería completa de /portfolio, solo español, sin métricas de venta).
  // Más reciente primero.
  featuredProjects: [
    {
      name: "Mix&Match",
      period: { es: "Jul — Dic 2025", en: "Jul — Dec 2025" },
      badge: "LIVE",
      desc: {
        es: "Outfit Planner / armario virtual. App móvil (Android/iOS) y web construidas con React Native y React + TypeScript, backend en Express/MySQL, OAuth con Google y Apple, microservicio en Python para remoción de fondo de imágenes.",
        en: "Outfit Planner / virtual closet. Mobile app (Android/iOS) and web built with React Native and React + TypeScript, Express/MySQL backend, OAuth with Google and Apple, Python microservice for image background removal.",
      },
      metric: { es: "+10,000 usuarios en 2 meses", en: "+10,000 users in 2 months" },
      tags: ["React Native", "Express", "MySQL", "AWS S3"],
    },
    {
      name: "Transpaservic",
      period: { es: "Ago 2026", en: "Aug 2026" },
      badge: "LIVE",
      desc: {
        es: "Infraestructura como código con Terraform sobre AWS (EC2, RDS, S3, IAM) para el sistema de gestión de órdenes de transporte de Transpaservic. Contenedores Docker detrás de Nginx, exposición segura vía Cloudflare Tunnel sin puertos abiertos, y deploys automatizados con Bash.",
        en: "Infrastructure as code with Terraform on AWS (EC2, RDS, S3, IAM) for Transpaservic's transport order-management system. Docker containers behind Nginx, secure exposure via Cloudflare Tunnel with no open ports, and automated deploys with Bash.",
      },
      metric: { es: "Módulos reutilizables dev/prod", en: "Reusable dev/prod modules" },
      tags: ["Terraform", "Docker", "Cloudflare", "AWS"],
    },
    {
      name: { es: "Gestión de Órdenes", en: "Order Management System" },
      period: { es: "Ene — Abr 2025", en: "Jan — Apr 2025" },
      badge: { es: "PUBLICADO", en: "PUBLISHED" },
      desc: {
        es: "Sistema web y móvil de gestión de órdenes de transporte para Transpaservic: la central emite órdenes y las empresas transportistas las aprueban desde la app. Construido con ReactJS, React Native, NestJS y MySQL, con actualizaciones en tiempo real vía WebSockets y notificaciones automatizadas por WhatsApp API.",
        en: "Web and mobile transport order-management system for Transpaservic: the central office issues orders and transport companies approve them from the app. Built with ReactJS, React Native, NestJS, and MySQL, with real-time updates via WebSockets and automated notifications via WhatsApp API.",
      },
      metric: { es: "Publicado en Google Play Store", en: "Published on Google Play Store" },
      tags: ["NestJS", "WebSockets", "WhatsApp API"],
    },
  ],

  // "label" es el texto legible (usado en el CV). "jsonKey" es la key en
  // formato snake_case que se muestra en el bloque skills.json de index.html.
  skills: [
    {
      key: "languages",
      label: { es: "Lenguajes", en: "Languages" },
      jsonKey: { es: "lenguajes", en: "languages" },
      items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      key: "frontend",
      label: { es: "Frontend", en: "Frontend" },
      jsonKey: { es: "frontend", en: "frontend" },
      items: ["ReactJS", "NextJS", "TanStack Query", "SPA"],
    },
    {
      key: "mobile",
      label: { es: "Mobile", en: "Mobile" },
      jsonKey: { es: "mobile", en: "mobile" },
      items: ["React Native", "Expo", "Google Play Store", "Apple App Store", "Push Notifications"],
    },
    {
      key: "backend",
      label: { es: "Backend", en: "Backend" },
      jsonKey: { es: "backend", en: "backend" },
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "WebSockets",
        "OpenAPI/Swagger",
        { es: "Arquitectura modular", en: "Modular architecture" },
      ],
    },
    {
      key: "databases",
      label: { es: "Bases de datos", en: "Databases" },
      jsonKey: { es: "bases_de_datos", en: "databases" },
      items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "TypeORM", "Mongoose"],
    },
    {
      key: "cloud_devops",
      label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
      jsonKey: { es: "cloud_devops", en: "cloud_devops" },
      items: [
        "Terraform",
        "AWS EC2/RDS/S3/IAM",
        "AWS Lambda",
        "API Gateway",
        "EventBridge",
        "CloudWatch",
        "Docker",
        "Nginx",
        "Cloudflare Tunnel",
        "GitHub Actions",
      ],
    },
    {
      key: "auth_security",
      label: { es: "Auth & Seguridad", en: "Auth & Security" },
      jsonKey: { es: "auth_seguridad", en: "auth_security" },
      items: ["JWT", "OAuth Google", "OAuth Apple"],
    },
    {
      key: "testing",
      label: { es: "Testing", en: "Testing" },
      jsonKey: { es: "testing", en: "testing" },
      items: ["Jest", "Supertest"],
    },
  ],

  // Más reciente primero.
  experience: [
    {
      date: { es: "AGO 2026", en: "AUG 2026" },
      role: { es: "Proyecto DevOps Freelance", en: "DevOps Freelance Project" },
      org: { es: "Briela Sin Fronteras (Perú) · Freelancer", en: "Briela Sin Fronteras (Peru) · Freelancer" },
      desc: {
        es: "Diseño e implementación de infraestructura AWS con Terraform (EC2, RDS, S3, IAM/SSM) para un sitio Django + Wagtail de terceros, publicado vía Cloudflare Tunnel sin exponer puertos. Entornos dev/prod separados, despliegue automatizado y backups a S3.",
        en: "Designed and implemented AWS infrastructure with Terraform (EC2, RDS, S3, IAM/SSM) for a third-party Django + Wagtail site, published via Cloudflare Tunnel with no exposed ports. Separate dev/prod environments, automated deployment, and S3 backups.",
      },
      bullets: {
        es: [
          "Diseñé infraestructura como código (IaC) con Terraform para un sitio Django + Wagtail de terceros, con módulo reutilizable entre dos entornos (dev y prod) con state independiente.",
          "Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Systems Manager) mediante Terraform.",
          "Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.",
          "Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).",
          "Desarrollé script de automatización de deploy (Bash) con git pull, build, migraciones, colecta de estáticos y healthcheck en cada actualización.",
          "Configuré backups automatizados de base de datos a S3 por entorno.",
          "El proyecto sigue en producción, con soporte y mantenimiento ligero continuo.",
        ],
        en: [
          "Designed infrastructure as code (IaC) with Terraform for a third-party Django + Wagtail site, with a reusable module shared across two environments (dev and prod) with independent state.",
          "Provisioned and managed AWS resources (EC2, RDS, S3, IAM, Systems Manager) via Terraform.",
          "Configured deployment of a containerized application with Docker and Nginx as a reverse proxy on EC2 instances.",
          "Implemented secure service exposure via Cloudflare Tunnel, eliminating the need for open inbound ports (HTTP/HTTPS).",
          "Developed a Bash deployment automation script covering git pull, build, migrations, static file collection, and healthcheck on every update.",
          "Configured automated database backups to S3 per environment.",
          "The project remains in production, with light ongoing support and maintenance.",
        ],
      },
    },
    {
      date: { es: "JUL — DIC 2025", en: "JUL — DEC 2025" },
      role: { es: "Full Stack & Mobile Developer", en: "Full Stack & Mobile Developer" },
      org: "Mix&Match Outfit Planner (Argentina) · Freelancer",
      desc: {
        es: "Liderazgo end-to-end de app móvil y web, autenticación OAuth, dashboard admin, push notifications y despliegue continuo en VPS.",
        en: "End-to-end leadership of mobile and web app, OAuth authentication, admin dashboard, push notifications, and continuous deployment on VPS.",
      },
      bullets: {
        es: [
          "Lideré el desarrollo end-to-end de aplicación móvil multiplataforma (Android & iOS) y plataforma web con React Native y ReactJS + TypeScript.",
          "Diseñé y desarrollé APIs REST escalables con Express.js y MySQL, estructuradas bajo principios modulares y separación por capas.",
          "Implementé autenticación segura mediante OAuth (Google y Apple Sign-In) y gestión de sesiones con JWT, cumpliendo requisitos para publicación en App Store y Play Store.",
          "Implementé pruebas unitarias y de integración (Jest + Supertest) para los flujos de autenticación y middlewares críticos.",
          "Desarrollé microservicio en Python para procesamiento y eliminación automática de fondo en imágenes, deployado en el mismo VPS, optimizando el flujo de subida de contenido.",
          "Integré almacenamiento en AWS S3 con compresión y optimización de imágenes para reducir tiempos de carga.",
          "Configuré entorno productivo en VPS Linux con dominio, SSL y despliegue continuo.",
          "Implementé push notifications en la app móvil para mejorar el engagement y la retención de usuarios.",
          "Desarrollé panel de administración (dashboard) en el frontend para gestión de usuarios y contenido, usando TanStack Query para el manejo eficiente de datos asíncronos y caché.",
          "Agregué feature de etiquetas (tags) para prendas, mejorando la organización y búsqueda dentro del armario virtual.",
          "Implementé rutina de limpieza para eliminar automáticamente usuarios inactivos con más de 90 días sin actividad, optimizando la base de datos.",
          "Producto lanzado en producción alcanzando +10,000 usuarios en los primeros 2 meses, y en mantenimiento y evolución continua desde entonces.",
        ],
        en: [
          "Led end-to-end development of a cross-platform mobile app (Android & iOS) and web platform with React Native and ReactJS + TypeScript.",
          "Designed and built scalable REST APIs with Express.js and MySQL, structured under modular principles and layered separation.",
          "Implemented secure authentication via OAuth (Google and Apple Sign-In) and JWT session management, meeting App Store and Play Store publication requirements.",
          "Implemented unit and integration tests (Jest + Supertest) for authentication flows and critical middlewares.",
          "Developed a Python microservice for automatic image background processing and removal, deployed on the same VPS, streamlining the content upload flow.",
          "Integrated AWS S3 storage with image compression and optimization to reduce load times.",
          "Configured a production environment on a Linux VPS with domain, SSL, and continuous deployment.",
          "Implemented push notifications in the mobile app to improve user engagement and retention.",
          "Built an admin dashboard on the frontend for user and content management, using TanStack Query for efficient async data handling and caching.",
          "Added a tagging feature for garments, improving organization and search within the virtual closet.",
          "Implemented a cleanup routine to automatically remove users inactive for more than 90 days, optimizing the database.",
          "Launched into production, reaching +10,000 users within the first 2 months, and in continuous maintenance and evolution since then.",
        ],
      },
    },
    {
      date: { es: "ENE — ABR 2025", en: "JAN — APR 2025" },
      role: { es: "Full Stack, Mobile & DevOps Developer", en: "Full Stack, Mobile & DevOps Developer" },
      org: "Transpaservic (Colombia) · Freelancer",
      desc: {
        es: "Sistema de gestión de órdenes de transporte: desarrollo full stack (web y móvil) con ReactJS, React Native, NestJS y MySQL, y despliegue de infraestructura AWS con Terraform.",
        en: "Transport order-management system: full stack development (web and mobile) with ReactJS, React Native, NestJS, and MySQL, plus AWS infrastructure deployment with Terraform.",
      },
      bullets: {
        es: [
          "Diseñé e implementé sistema web y móvil de gestión de órdenes de transporte con ReactJS, React Native, NestJS y MySQL, donde la central emite órdenes y las empresas transportistas las aprueban desde la app.",
          "Implementé WebSockets para actualizaciones en tiempo real.",
          "Integré push notifications en la aplicación móvil.",
          "Automaticé notificaciones transaccionales mediante integración con WhatsApp API.",
          "Publicación en Google Play Store y despliegue web en producción.",
          "Diseñé infraestructura como código (IaC) con Terraform, estructurando módulos reutilizables consumidos por múltiples entornos (dev/prod).",
          "Aprovisioné y administré recursos en AWS (EC2, RDS, S3, IAM, Security Groups, Systems Manager) mediante Terraform.",
          "Configuré despliegue de aplicación containerizada con Docker y Nginx como reverse proxy sobre instancias EC2.",
          "Implementé exposición segura de servicios mediante Cloudflare Tunnel, eliminando la necesidad de puertos entrantes abiertos (HTTP/HTTPS).",
          "Gestioné variables sensibles y credenciales (tfvars, secrets) siguiendo buenas prácticas de seguridad, evitando exposición en control de versiones.",
          "Automaticé el proceso de deploy con scripts Bash (git pull, generación de .env, rebuild de contenedores) para actualizar la app sin recrear la infraestructura base.",
          "El sistema sigue en producción, en mantenimiento y mejoras continuas desde entonces.",
        ],
        en: [
          "Designed and implemented a web and mobile transport order-management system with ReactJS, React Native, NestJS, and MySQL, where the central office issues orders and transport companies approve them from the app.",
          "Implemented WebSockets for real-time updates.",
          "Integrated push notifications into the mobile app.",
          "Automated transactional notifications via WhatsApp API integration.",
          "Published on the Google Play Store and deployed the web app to production.",
          "Designed infrastructure as code (IaC) with Terraform, structuring reusable modules consumed by multiple environments (dev/prod).",
          "Provisioned and managed AWS resources (EC2, RDS, S3, IAM, Security Groups, Systems Manager) via Terraform.",
          "Configured deployment of a containerized application with Docker and Nginx as a reverse proxy on EC2 instances.",
          "Implemented secure service exposure via Cloudflare Tunnel, eliminating the need for open inbound ports (HTTP/HTTPS).",
          "Managed sensitive variables and credentials (tfvars, secrets) following security best practices, avoiding exposure in version control.",
          "Automated the deployment process with Bash scripts (git pull, .env generation, container rebuild) to update the app without recreating the base infrastructure.",
          "The system remains in production, in continuous maintenance and improvement since then.",
        ],
      },
    },
    {
      date: { es: "OCT — NOV 2024", en: "OCT — NOV 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: {
        es: "Sistema de Citas Médicas (Argentina) · Freelancer",
        en: "Medical Appointment System (Argentina) · Freelancer",
      },
      desc: {
        es: "Sistema de citas para clínicas. Backend con NestJS, PostgreSQL y TypeORM. Despliegue en AWS EC2 y frontend en AWS Amplify.",
        en: "Appointment scheduling system for clinics. Backend with NestJS, PostgreSQL, and TypeORM. Deployed on AWS EC2 with frontend on AWS Amplify.",
      },
      bullets: {
        es: [
          "Desarrollé sistema de citas para clínicas, con backend en NestJS, PostgreSQL y TypeORM.",
          "Diseño de APIs REST y autenticación segura con JWT.",
          "Despliegue en AWS EC2 y publicación de frontend en AWS Amplify.",
        ],
        en: [
          "Developed an appointment scheduling system for clinics, with a NestJS, PostgreSQL, and TypeORM backend.",
          "Designed REST APIs and secure JWT authentication.",
          "Deployed on AWS EC2 and published the frontend on AWS Amplify.",
        ],
      },
    },
    {
      date: { es: "AGO — SEP 2024", en: "AUG — SEP 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: "BPVentures (Henry Projects, Argentina) · Freelancer",
      desc: {
        es: "Desarrollo full stack con NestJS y ReactJS, WebSockets, documentación de API con OpenAPI/Swagger y CI con GitHub Actions, trabajo en equipo de 6 personas bajo Scrum.",
        en: "Full stack development with NestJS and ReactJS, WebSockets, API documentation with OpenAPI/Swagger and CI with GitHub Actions, working in a 6-person team under Scrum.",
      },
      bullets: {
        es: [
          "Desarrollo full stack con NestJS y ReactJS.",
          "Implementación de WebSockets para notificaciones en tiempo real.",
          "Documenté la API con OpenAPI/Swagger (NestJS Swagger module) y configuré un pipeline de CI (GitHub Actions) que sincroniza automáticamente la especificación con SwaggerHub en cada push.",
          "Trabajo colaborativo en equipo de 6 personas bajo metodología Scrum.",
        ],
        en: [
          "Full stack development with NestJS and ReactJS.",
          "Implemented WebSockets for real-time notifications.",
          "Documented the API with OpenAPI/Swagger (NestJS Swagger module) and set up a CI pipeline (GitHub Actions) that automatically syncs the spec to SwaggerHub on every push.",
          "Collaborated in a 6-person team under Scrum methodology.",
        ],
      },
    },
    {
      date: { es: "MAY — JUN 2024", en: "MAY — JUN 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: "Mariaknoll Store (Argentina) · Freelancer",
      desc: {
        es: "Catálogo full stack para vestidos de fiesta, con backend en Node.js y MongoDB, carrito de compras y seguimiento de pedidos.",
        en: "Full stack catalog for party dresses, with a Node.js and MongoDB backend, shopping cart, and order tracking.",
      },
      bullets: {
        es: [
          "Desarrollo backend con Node.js y MongoDB.",
          "Implementación de carrito de compras y seguimiento de pedidos.",
          "Diseño de frontend con HTML, CSS y JavaScript.",
        ],
        en: [
          "Backend development with Node.js and MongoDB.",
          "Implemented shopping cart and order tracking.",
          "Designed frontend with HTML, CSS, and JavaScript.",
        ],
      },
    },
    {
      date: { es: "2020 — 2023", en: "2020 — 2023" },
      role: { es: "Desarrollador WordPress", en: "WordPress Developer" },
      org: { es: "Freelancer / Remoto (Perú)", en: "Freelancer / Remote (Peru)" },
      desc: {
        es: "Sitios para clientes internacionales, gestión de hosting/SSL en cPanel y optimización SEO técnica.",
        en: "Sites for international clients, hosting/SSL management in cPanel, and technical SEO optimization.",
      },
      bullets: {
        es: [
          "Desarrollo y personalización de sitios WordPress para clientes internacionales.",
          "Gestión de hosting, dominios, SSL y configuraciones de seguridad en cPanel.",
          "Optimización de rendimiento y SEO técnico.",
        ],
        en: [
          "Developed and customized WordPress sites for international clients.",
          "Managed hosting, domains, SSL, and security configurations in cPanel.",
          "Performance optimization and technical SEO.",
        ],
      },
    },
  ],

  // Más reciente primero. "bullets" (bilingüe) es el detalle mostrado por
  // cv/index.html — index.html (home) solo usa year/name/org.
  education: [
    {
      year: "2025",
      name: "React Native",
      org: "DevTalles Academy",
      bullets: {
        es: [
          "Desarrollo de aplicaciones móviles multiplataforma con React Native.",
          "Integración de APIs REST, manejo de estado y navegación.",
          "Optimización de rendimiento y buenas prácticas para producción móvil.",
        ],
        en: [
          "Developed cross-platform mobile applications with React Native.",
          "REST API integration, state management, and navigation.",
          "Performance optimization and best practices for mobile production.",
        ],
      },
    },
    {
      year: "2024",
      name: "Full Stack Web Developer",
      org: { es: "Henry Bootcamp (Argentina · Remoto)", en: "Henry Bootcamp (Argentina · Remote)" },
      bullets: {
        es: [
          "Desarrollo de aplicaciones web con ReactJS, NextJS, Node.js y NestJS.",
          "Diseño de APIs RESTful y arquitecturas backend escalables.",
          "Trabajo con bases de datos SQL (PostgreSQL, MySQL) y NoSQL (MongoDB).",
          "Metodologías ágiles (Scrum), Git y Pair Programming.",
        ],
        en: [
          "Developed web applications with ReactJS, NextJS, Node.js, and NestJS.",
          "Designed RESTful APIs and scalable backend architectures.",
          "Worked with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.",
          "Agile methodologies (Scrum), Git, and Pair Programming.",
        ],
      },
    },
    {
      year: "2020 — 2023",
      name: { es: "Desarrollo Web con WordPress", en: "WordPress Web Development" },
      org: { es: "Formación independiente", en: "Independent study" },
      bullets: {
        es: [
          "Desarrollo y personalización de temas con HTML, CSS y PHP.",
          "Optimización de rendimiento y SEO técnico.",
          "Implementación de prácticas de seguridad y mantenimiento en entornos productivos.",
        ],
        en: [
          "Developed and customized themes with HTML, CSS, and PHP.",
          "Performance optimization and technical SEO.",
          "Implemented security and maintenance practices in production environments.",
        ],
      },
    },
    {
      year: "2008 — 2010",
      name: { es: "Estudios de Computación e Informática", en: "Computer Science & IT Studies" },
      org: { es: "Instituto Tecnológico Unitek de IDAT (Perú)", en: "Instituto Tecnológico Unitek de IDAT (Peru)" },
      bullets: {
        es: ["Formación técnica en fundamentos de computación e informática."],
        en: ["Technical training in computer science and IT fundamentals."],
      },
    },
  ],

  // Proyectos mostrados en /portfolio — español únicamente (esa página no
  // tiene toggle de idioma). Más reciente primero: debe mantenerse
  // consistente con "experience" de arriba (ej. el proyecto más nuevo aquí
  // debería corresponder al primer puesto de "experience").
  projectsPortfolio: [
    {
      title: "Briela Sin Fronteras",
      description:
        "Infraestructura como código con Terraform sobre AWS (EC2, RDS, S3, IAM) para un sitio Django + Wagtail de terceros, publicado vía Cloudflare Tunnel sin exponer puertos.",
      category: "devops",
      image: "https://cdn.frankgp.com/portfolio/brielasinfronteras-web.webp",
      duration: "Mantenimiento",
      year: "2026",
      roles: ["devops"],
      tech: ["Terraform", "AWS EC2/RDS/S3/IAM", "Docker", "Nginx", "Cloudflare Tunnel"],
      links: [{ label: "Ver sitio", url: "http://brielasinfronteras.org" }],
    },
    {
      title: "Monitor de Disponibilidad Web",
      description:
        "Microservicio serverless en AWS que revisa la disponibilidad de sitios web de forma programada y envía alertas por email ante caídas o recuperaciones, con el estado persistido en DynamoDB.",
      category: "devops",
      image: null,
      duration: "Proyecto personal",
      year: "2026",
      roles: ["backend", "devops"],
      tech: ["Node.js", "Terraform", "AWS Lambda", "API Gateway", "EventBridge", "DynamoDB", "CloudWatch"],
      links: [{ label: "GitHub", url: "https://github.com/fgp555/fgp-microservices" }],
    },
    {
      title: "Mix&Match",
      description:
        "Outfit Planner / armario virtual. App móvil (Android/iOS) y web, OAuth con Google y Apple, microservicio en Python para remoción de fondo de imágenes.",
      category: "fullstack",
      image: "https://cdn.frankgp.com/portfolio/ivanageraldine-web.webp",
      duration: "En curso",
      year: "2025",
      roles: ["backend", "mobile", "frontend", "devops"],
      tech: ["React Native", "React", "TypeScript", "Express", "MySQL", "AWS S3"],
      links: [{ label: "Ver sitio", url: "http://ivanageraldine.com" }],
    },
    {
      title: "Gestión de Órdenes — Web",
      description:
        "Sistema de gestión de órdenes de transporte para Transpaservic: la central emite órdenes y las empresas transportistas las aprueban desde la app.",
      category: "fullstack",
      image: "https://cdn.frankgp.com/portfolio/transpaservic-web.webp",
      duration: "3 meses",
      year: "2025",
      roles: ["backend", "devops"],
      tech: ["Figma", "ReactJS", "NestJS", "CPanel", "MySQL"],
      links: [{ label: "Ver sitio", url: "http://transpaservic.com.co" }],
    },
    {
      title: "Gestión de Órdenes — Mobile",
      description: "Versión móvil del sistema de gestión de órdenes de transporte para Transpaservic.",
      category: "mobile",
      image: "https://cdn.frankgp.com/portfolio/transpaservic-mobile.webp",
      duration: "1 mes",
      year: "2025",
      roles: ["backend", "mobile", "devops"],
      tech: ["Figma", "React Native", "NestJS", "MySQL"],
      links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" }],
    },
    {
      title: "Sistema de Citas Médicas",
      description: "Sistema de citas para clínicas.",
      category: "fullstack",
      image: null,
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "devops"],
      tech: ["ReactJS", "NestJS", "CPanel", "PostgreSQL"],
      links: [{ label: "GitHub", url: "https://github.com/fgp555/gio-appointments-project" }],
    },
    {
      title: "Sistema de Envíos",
      description: "Sistema de envíos y entregas con generación de reportes en PDF.",
      category: "fullstack",
      image: null,
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "frontend", "devops"],
      tech: ["HTML", "CSS", "JS", "NestJS", "CPanel", "MySQL"],
      links: [{ label: "GitHub", url: "https://github.com/fgp555/nere-shipping-project" }],
    },
    {
      title: "BP Ventures",
      description: "Sistema de entregables para la empresa BP Ventures, con API documentada en OpenAPI/Swagger y CI (GitHub Actions) que la sincroniza con SwaggerHub.",
      category: "fullstack",
      image: null,
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "frontend", "devops"],
      tech: ["NextJS", "NestJS", "Swagger", "CPanel", "PostgreSQL"],
      links: [{ label: "YouTube", url: "https://youtu.be/vSBttwQO62k" }],
    },
    {
      title: "Mariaknoll Store",
      description: "Catálogo full stack para vestidos de fiesta.",
      category: "fullstack",
      image: null,
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "devops"],
      tech: ["HTML", "CSS", "JS", "NodeJS", "CPanel", "MongoDB"],
      links: [{ label: "GitHub", url: "https://github.com/buchervanesa/mariaknoll.website" }],
    },
    {
      title: "Catálogo de Laptops",
      description: "Catálogo para la venta de laptops.",
      category: "frontend",
      image: "https://cdn.frankgp.com/portfolio/petulap-web.webp",
      duration: "1 semana",
      year: "2022",
      roles: ["frontend"],
      tech: ["HTML", "CSS", "JS"],
      links: [{ label: "Ver sitio", url: "https://catalogo-web.github.io/catalogo-petulap" }],
    },
  ],
};

// Helper: valor bilingüe {es,en} o string plano -> string según idioma activo.
function pick(value, lang) {
  if (value == null) return "";
  return typeof value === "string" ? value : value[lang] || value.es || "";
}
