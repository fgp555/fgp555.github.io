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

  summary: {
    es: "Especialista en TypeScript, React, React Native, NestJS y despliegue en AWS. Más de 2 años llevando aplicaciones desde la arquitectura hasta usuarios reales, aplicando SOLID y buenas prácticas de infraestructura.",
    en: "Full Stack & Mobile Developer specializing in TypeScript, React, React Native, NestJS, and AWS deployment. 2+ years taking applications from architecture to real users, applying SOLID principles and solid infrastructure practices.",
  },

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
      items: ["Node.js", "NestJS", "Express.js", "WebSockets", { es: "Arquitectura modular", en: "Modular architecture" }],
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
};

// Helper: valor bilingüe {es,en} o string plano -> string según idioma activo.
function pick(value, lang) {
  if (value == null) return "";
  return typeof value === "string" ? value : value[lang] || value.es || "";
}
