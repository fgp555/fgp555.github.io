const DATA = {
  web: [
    {
      tech: "html",
      name: "Página básica",
      description: "Presencia online simple para mostrar tu negocio",
      price: 200,
    },
    {
      tech: "react",
      name: "Plataforma interactiva",
      description: "Experiencia moderna y dinámica para tus usuarios",
      price: 400,
    },
    {
      tech: "next",
      name: "Web profesional",
      description: "Optimizada para ventas y posicionamiento en Google",
      price: 600,
    },
  ],

  backend: [
    {
      tech: "express",
      name: "Sistema de gestión",
      description: "Administra clientes, pedidos y datos",
      price: 300,
    },
    {
      tech: "micro",
      name: "Plataforma escalable",
      description: "Preparado para crecer sin límites",
      price: 500,
    },
    {
      tech: "python",
      name: "API avanzada",
      description: "Procesamiento de datos y lógica compleja",
      price: 400,
    },
  ],

  mobile: [
    {
      tech: "rn",
      name: "App multiplataforma",
      description: "Una app para Android y iOS",
      price: 600,
    },
    {
      tech: "native",
      name: "App nativa premium",
      description: "Máximo rendimiento en cada plataforma",
      price: 800,
    },
  ],

  auto: [
    {
      tech: "n8n",
      name: "Automatización de procesos",
      description: "Ahorra tiempo conectando tus sistemas",
      price: 250,
    },
    {
      tech: "whatsapp",
      name: "WhatsApp automático",
      description: "Responde clientes sin intervención manual",
      price: 300,
    },
    {
      tech: "ia",
      name: "Asistente inteligente",
      description: "Atiende clientes con IA 24/7",
      price: 350,
    },
  ],

  ux: [
    {
      tech: "basic",
      name: "Diseño básico",
      description: "Interfaz funcional",
      price: 100,
    },
    {
      tech: "custom",
      name: "Diseño personalizado",
      description: "Adaptado a tu marca",
      price: 300,
    },
    {
      tech: "pro",
      name: "Diseño profesional",
      description: "Optimizado para conversión",
      price: 600,
    },
  ],

  devops: [
    {
      tech: "cpanel",
      name: "Hosting básico",
      description: "Implementación simple",
      price: 150,
    },
    {
      tech: "cloud",
      name: "Infraestructura cloud",
      description: "Alta disponibilidad y escalabilidad",
      price: 300,
    },
    {
      tech: "stores",
      name: "Publicación en tiendas",
      description: "Subimos tu app a App Store y Play Store",
      price: 200,
    },
  ],
};

const TEMPLATES = {
  ecommerce: {
    basePrice: 300,
    autoSelect: {
      web: "next",
      backend: "express",
    },
    disable: {
      web: ["html"],
    },
  },

  academia: {
    basePrice: 350,
    autoSelect: {
      web: "react",
      backend: "express",
    },
  },

  landing: {
    basePrice: 150,
    autoSelect: {
      web: "html",
    },
    disable: {
      backend: ["express", "micro", "python"],
      mobile: ["rn", "native"],
    },
  },
};
