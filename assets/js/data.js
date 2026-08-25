/* ============================================================
   SITE_DATA — frankgp.com
   Fuente única de verdad para identidad, contacto, resumen,
   stack, experiencia y educación. Cargado por index.html,
   cv/index.html y portfolio/index.html (y cualquier página
   futura que necesite estos datos).

   Edita SOLO aquí — nunca hardcodear email, links, fechas de
   experiencia o educación directamente en un HTML.
============================================================ */
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
    cvPdf: "https://docs.google.com/document/d/1S1EE1_uq8RdS7KrGghOChN9hu1sbb9hD/export?format=pdf",
  },

  location: { es: "Remoto · Perú", en: "Remote · Peru" },

  // Páginas del sitio, usadas por el <select> de navegación del footer
  // (ver assets/js/page-nav.js). Agregar una página nueva = agregar una
  // línea aquí, nada más.
  pages: [
    { label: { es: "Inicio", en: "Home" }, url: "/" },
    { label: { es: "Portafolio", en: "Portfolio" }, url: "/portfolio/" },
    { label: { es: "Servicios", en: "Services" }, url: "/services/" },
    { label: "CV", url: "/cv/" },
    { label: "Style Guide", url: "/styleguide.html" },
    { label: "404 Page", url: "/404.html" },
  ],

  summary: {
    es: "Especialista en TypeScript, React, React Native, NestJS y despliegue en AWS. Más de 2 años llevando aplicaciones desde la arquitectura hasta usuarios reales, aplicando SOLID y buenas prácticas de infraestructura.",
    en: "Full Stack & Mobile Developer specializing in TypeScript, React, React Native, NestJS, and AWS deployment. 2+ years taking applications from architecture to real users, applying SOLID principles and solid infrastructure practices.",
  },

  // Las 3 cards de "Proyectos destacados" en index.html — texto curado para
  // ese pitch (bilingüe, con métrica de impacto), distinto de "projects"
  // (galería completa de /portfolio, solo español, sin métricas de venta).
  // Más reciente primero.
  featuredProjects: [
    {
      name: "Mix&Match",
      period: { es: "Jul 2025 — Actualidad", en: "Jul 2025 — Present" },
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
      period: "2025",
      badge: "LIVE",
      desc: {
        es: "Infraestructura como código con Terraform sobre AWS (EC2, RDS, S3, IAM). Contenedores Docker detrás de Nginx, exposición segura vía Cloudflare Tunnel sin puertos abiertos, y deploys automatizados con Bash.",
        en: "Infrastructure as code with Terraform on AWS (EC2, RDS, S3, IAM). Docker containers behind Nginx, secure exposure via Cloudflare Tunnel with no open ports, and automated deploys with Bash.",
      },
      metric: { es: "Módulos reutilizables dev/prod", en: "Reusable dev/prod modules" },
      tags: ["Terraform", "Docker", "Cloudflare", "AWS"],
    },
    {
      name: { es: "Gestión de Vouchers", en: "Voucher Management System" },
      period: { es: "Ene — Mar 2025", en: "Jan — Mar 2025" },
      badge: { es: "PUBLICADO", en: "PUBLISHED" },
      desc: {
        es: "Sistema web y móvil con ReactJS, React Native, NestJS y MySQL. Actualizaciones en tiempo real vía WebSockets y notificaciones transaccionales automatizadas por WhatsApp API.",
        en: "Web and mobile system with ReactJS, React Native, NestJS, and MySQL. Real-time updates via WebSockets and automated transactional notifications via WhatsApp API.",
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
      items: ["React Native", "Google Play", "Push Notifications"],
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
        { es: "Arquitectura modular", en: "Modular architecture" },
      ],
    },
    {
      key: "databases",
      label: { es: "Bases de datos", en: "Databases" },
      jsonKey: { es: "bases_de_datos", en: "databases" },
      items: ["PostgreSQL", "MySQL", "MongoDB", "TypeORM", "Mongoose"],
    },
    {
      key: "cloud_devops",
      label: { es: "Cloud & DevOps", en: "Cloud & DevOps" },
      jsonKey: { es: "cloud_devops", en: "cloud_devops" },
      items: ["Terraform", "AWS EC2/RDS/S3/IAM", "Docker", "Nginx", "Cloudflare Tunnel", "GitHub Actions"],
    },
    {
      key: "auth_security",
      label: { es: "Auth & Seguridad", en: "Auth & Security" },
      jsonKey: { es: "auth_seguridad", en: "auth_security" },
      items: ["JWT", "OAuth Google", "OAuth Apple"],
    },
  ],

  // Más reciente primero.
  experience: [
    {
      date: { es: "JUL 2025 — ACTUALIDAD", en: "JUL 2025 — PRESENT" },
      role: { es: "Full Stack & Mobile Developer", en: "Full Stack & Mobile Developer" },
      org: "Mix&Match Outfit Planner · Freelancer",
      desc: {
        es: "Liderazgo end-to-end de app móvil y web, autenticación OAuth, dashboard admin, push notifications y despliegue continuo en VPS.",
        en: "End-to-end leadership of mobile and web app, OAuth authentication, admin dashboard, push notifications, and continuous deployment on VPS.",
      },
    },
    {
      date: { es: "2025", en: "2025" },
      role: { es: "DevOps & Cloud Infrastructure Developer", en: "DevOps & Cloud Infrastructure Developer" },
      org: "Transpaservic · Freelancer",
      desc: {
        es: "Diseño de infraestructura como código con Terraform, contenedores Docker y exposición segura vía Cloudflare Tunnel.",
        en: "Infrastructure-as-code design with Terraform, Docker containers, and secure exposure via Cloudflare Tunnel.",
      },
    },
    {
      date: { es: "ENE — MAR 2025", en: "JAN — MAR 2025" },
      role: { es: "Mobile & Full Stack Developer", en: "Mobile & Full Stack Developer" },
      org: { es: "Sistema de Gestión de Vouchers · Freelancer", en: "Voucher Management System · Freelancer" },
      desc: {
        es: "Sistema web y móvil con NestJS y MySQL, WebSockets en tiempo real e integración con WhatsApp API.",
        en: "Web and mobile system with NestJS and MySQL, real-time WebSockets, and WhatsApp API integration.",
      },
    },
    {
      date: { es: "OCT — NOV 2024", en: "OCT — NOV 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: { es: "Aplicación de Gestión de Turnos · Freelancer", en: "Shift Management Application · Freelancer" },
      desc: {
        es: "Backend con NestJS, PostgreSQL y TypeORM. Despliegue en AWS EC2 y frontend en AWS Amplify.",
        en: "Backend with NestJS, PostgreSQL, and TypeORM. Deployed on AWS EC2 with frontend on AWS Amplify.",
      },
    },
    {
      date: { es: "AGO — SEP 2024", en: "AUG — SEP 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: "BPVentures (Henry Projects) · Freelancer",
      desc: {
        es: "Desarrollo full stack con NestJS y ReactJS, WebSockets, trabajo en equipo de 6 personas bajo Scrum.",
        en: "Full stack development with NestJS and ReactJS, WebSockets, working in a 6-person team under Scrum.",
      },
    },
    {
      date: { es: "MAY — JUN 2024", en: "MAY — JUN 2024" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      org: "Ecommerce · Freelancer",
      desc: {
        es: "Backend con Node.js y MongoDB, carrito de compras y seguimiento de pedidos.",
        en: "Backend with Node.js and MongoDB, shopping cart, and order tracking.",
      },
    },
    {
      date: { es: "2021 — 2023", en: "2021 — 2023" },
      role: { es: "Desarrollador WordPress", en: "WordPress Developer" },
      org: { es: "Freelancer / Remoto", en: "Freelancer / Remote" },
      desc: {
        es: "Sitios para clientes internacionales, gestión de hosting/SSL en cPanel y optimización SEO técnica.",
        en: "Sites for international clients, hosting/SSL management in cPanel, and technical SEO optimization.",
      },
    },
  ],

  // Más reciente primero.
  education: [
    { year: "2025", name: "React Native", org: "DevTalles Academy" },
    { year: "2024", name: "Full Stack Web Developer", org: "Henry Bootcamp" },
    {
      year: "2020 — 2023",
      name: { es: "Desarrollo Web con WordPress", en: "WordPress Web Development" },
      org: { es: "Formación independiente", en: "Independent study" },
    },
  ],

  // Proyectos mostrados en /portfolio — español únicamente (esa página no
  // tiene toggle de idioma). Más reciente primero: debe mantenerse
  // consistente con "experience" de arriba (ej. el proyecto más nuevo aquí
  // debería corresponder al primer puesto de "experience").
  projects: [
    {
      title: "Mix&Match",
      description:
        "Outfit Planner / armario virtual. App móvil (Android/iOS) y web, OAuth con Google y Apple, microservicio en Python para remoción de fondo de imágenes.",
      category: "fullstack",
      image: null,
      duration: "En curso",
      year: "2025",
      roles: ["backend", "mobile", "frontend", "devops"],
      tech: ["React Native", "React", "TypeScript", "Express", "MySQL", "AWS S3"],
      links: [],
    },
    {
      title: "FGP Academy",
      description: "Plataforma de cursos online.",
      category: "fullstack",
      image: "https://i.postimg.cc/k5fHRr14/fgp-academy.webp",
      duration: "3 meses",
      year: "2025",
      roles: ["backend", "devops"],
      tech: ["ReactJS", "NodeJS", "AWS", "MySQL", "WhatsApp API"],
      links: [{ label: "Ver sitio", url: "https://frankgp.com/academy" }],
    },
    {
      title: "Sistema de Tickets — Web",
      description: "Sistema de tickets para la empresa Transpaservic.",
      category: "fullstack",
      image: "https://i.postimg.cc/qqWL8KSK/transpaservic-web.webp",
      duration: "3 meses",
      year: "2025",
      roles: ["backend", "devops"],
      tech: ["Figma", "ReactJS", "NestJS", "CPanel", "MySQL"],
      links: [{ label: "Ver sitio", url: "http://transpaservic.com.co" }],
    },
    {
      title: "Sistema de Tickets — Mobile",
      description: "Versión móvil del sistema de tickets para Transpaservic.",
      category: "mobile",
      image: "https://i.postimg.cc/mgMxgxkB/transpaservic-mockup.webp",
      duration: "1 mes",
      year: "2025",
      roles: ["backend", "mobile", "devops"],
      tech: ["Figma", "React Native", "NestJS", "MySQL"],
      links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.fgp555.transpaservic" }],
    },
    {
      title: "Transport Website",
      description: "Sitio web para servicio de transporte de carga pesada.",
      category: "fullstack",
      image: "https://i.postimg.cc/1XBWtQV7/mockup-desktop.webp",
      duration: "1 mes",
      year: "2025",
      roles: ["backend", "frontend", "devops"],
      tech: ["Figma", "Angular", "Bootstrap", "NodeJS", "CPanel", "MySQL"],
      links: [{ label: "Ver sitio", url: "https://e-transportech.org" }],
    },
    {
      title: "Sistema de Citas",
      description: "Sistema de citas para clínicas.",
      category: "fullstack",
      image: "https://i.postimg.cc/pXH5G93K/crefi.webp",
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "devops"],
      tech: ["ReactJS", "NestJS", "CPanel", "PostgreSQL"],
      links: [{ label: "GitHub", url: "https://github.com/fgp555/gio-m3-appointments" }],
    },
    {
      title: "Acortador de URL",
      description: "Acortador de URL con copias de seguridad y estadísticas.",
      category: "fullstack",
      image: "https://i.postimg.cc/26Kjp5kd/shortener.webp",
      duration: "1 semana",
      year: "2024",
      roles: ["backend", "frontend", "devops"],
      tech: ["HTML", "CSS", "JS", "NodeJS", "CPanel", "MongoDB"],
      links: [{ label: "YouTube", url: "https://youtu.be/_okCMMfx1O4" }],
    },
    {
      title: "Sistema de Envíos",
      description: "Sistema de envíos y entregas con generación de reportes en PDF.",
      category: "fullstack",
      image: "https://i.postimg.cc/pXdQYG7g/shipping.webp",
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "frontend", "devops"],
      tech: ["HTML", "CSS", "JS", "NestJS", "CPanel", "MySQL"],
      links: [{ label: "YouTube", url: "https://youtu.be/DY9lwTE08aw" }],
    },
    {
      title: "BP Ventures",
      description: "Sistema de entregables para la empresa BP Ventures.",
      category: "fullstack",
      image: "https://i.postimg.cc/3JKBdJYC/bpventures.webp",
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "frontend", "devops"],
      tech: ["NextJS", "NestJS", "CPanel", "PostgreSQL"],
      links: [{ label: "YouTube", url: "https://youtu.be/vSBttwQO62k" }],
    },
    {
      title: "Mariaknoll Store",
      description: "Catálogo full stack para vestidos de fiesta.",
      category: "fullstack",
      image: "https://i.postimg.cc/Nfpkq761/mariaknoll-rest-png.webp",
      duration: "1 mes",
      year: "2024",
      roles: ["backend", "devops"],
      tech: ["HTML", "CSS", "JS", "NodeJS", "CPanel", "MongoDB"],
      links: [{ label: "GitHub", url: "https://github.com/buchervanesa/mariaknoll.website" }],
    },
    {
      title: "Mini-Postman App",
      description: "Herramienta para probar peticiones GET, POST y PUT.",
      category: "tools",
      image: "https://i.postimg.cc/mkSNr70W/mini-postman.webp",
      duration: "1 semana",
      year: "2024",
      roles: ["frontend"],
      tech: ["HTML", "CSS", "JS"],
      links: [{ label: "Ver sitio", url: "https://frank-gp.github.io/app/mini-postman" }],
    },
    {
      title: "Fou De Toi Restaurant",
      description: "Sitio para restaurante vegetariano.",
      category: "frontend",
      image: "https://i.postimg.cc/vHQtNSVY/foudetoi-rest.webp",
      duration: "1 semana",
      year: "2023",
      roles: ["frontend"],
      tech: ["HTML", "CSS", "JS"],
      links: [],
    },
    {
      title: "Venta de Laptops",
      description: "Catálogo para la venta de laptops.",
      category: "frontend",
      image: "https://i.postimg.cc/qBcGQdgD/petulap.webp",
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
