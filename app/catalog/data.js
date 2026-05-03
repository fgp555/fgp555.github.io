// 📦 DATA PRINCIPAL
const data = [
  {
    categoria: "💰 Venta directa",
    items: [
      {
        nombre: "Ecommerce",
        descripcion: "Tienda online completa con catálogo, carrito y pagos.",
        tech: ["Next.js", "Node.js", "MariaDB", "Stripe"],
      },
      {
        nombre: "Catálogo + WhatsApp",
        descripcion: "Muestra productos y permite comprar vía WhatsApp.",
        tech: ["HTML", "JS", "WhatsApp API"],
      },
      {
        nombre: "Dropshipping",
        descripcion: "Venta sin inventario conectada a proveedores.",
        tech: ["Shopify API", "Next.js"],
      },
      {
        nombre: "Venta de servicios",
        descripcion: "Landing optimizada para vender servicios con pago.",
        tech: ["Landing", "Stripe", "React"],
      },
      {
        nombre: "Suscripciones",
        descripcion: "Sistema de membresías con pagos recurrentes.",
        tech: ["Next.js", "Node.js", "Stripe"],
      },
    ],
  },

  {
    categoria: "🎓 Educación / contenido",
    items: [
      {
        nombre: "Academia online",
        descripcion: "Plataforma de cursos con videos y seguimiento.",
        tech: ["React", "Node.js", "Video CDN"],
      },
      {
        nombre: "Clases en vivo",
        descripcion: "Sistema para transmitir clases en tiempo real.",
        tech: ["WebRTC", "Firebase"],
      },
      {
        nombre: "Biblioteca digital",
        descripcion: "Acceso a documentos, ebooks o contenido privado.",
        tech: ["Next.js", "Cloudflare R2"],
      },
      {
        nombre: "Cursos + comunidad",
        descripcion: "Cursos combinados con interacción entre usuarios.",
        tech: ["React", "Node.js", "Chat"],
      },
      {
        nombre: "Coaching / mentorías",
        descripcion: "Sistema de reservas y sesiones personalizadas.",
        tech: ["Calendly API", "Stripe"],
      },
    ],
  },

  {
    categoria: "📈 Captación de leads",
    items: [
      {
        nombre: "Landing page",
        descripcion: "Página simple para captar clientes potenciales.",
        tech: ["HTML", "CSS", "JS"],
      },
      {
        nombre: "Landing funnel",
        descripcion: "Embudo de ventas optimizado para conversión.",
        tech: ["React", "Analytics"],
      },
      {
        nombre: "Webinar",
        descripcion: "Registro y acceso a eventos online.",
        tech: ["Zoom API", "Landing"],
      },
      {
        nombre: "Generador de leads",
        descripcion: "Sistema de formularios y captación de datos.",
        tech: ["Forms", "CRM"],
      },
      {
        nombre: "Reservas",
        descripcion: "Agenda online para citas o reuniones.",
        tech: ["Calendar API", "Node.js"],
      },
    ],
  },
];

// 🧠 DICCIONARIO TECNOLÓGICO
const TECH_INFO = {
  HTML: "Estructura de páginas web",
  CSS: "Diseño visual",
  JS: "Interactividad",
  React: "Interfaces dinámicas",
  "Next.js": "SEO y rendimiento",
  "Node.js": "Backend",
  MariaDB: "Base de datos",
  Stripe: "Pagos online",
  "WhatsApp API": "Ventas por WhatsApp",
  "Shopify API": "Ecommerce externo",
  "Video CDN": "Streaming de video",
  WebRTC: "Videollamadas",
  Firebase: "Backend en la nube",
  "Cloudflare R2": "Almacenamiento",
  Chat: "Mensajería",
  "Calendly API": "Reservas",
  Analytics: "Medición",
  "Zoom API": "Webinars",
  Forms: "Formularios",
  CRM: "Gestión clientes",
  "Calendar API": "Agenda",
};
