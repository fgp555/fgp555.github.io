/* ============================================================
   PAGE NAV — frankgp.com
   Llena el <select id="pageNav"> del footer con las páginas de
   SITE_DATA.pages (assets/js/data.js) y navega al elegir una.
   Para agregar una página nueva al selector: agrega una línea
   en SITE_DATA.pages — este archivo no necesita cambios.
============================================================ */
function renderPageNav(lang) {
  var sel = document.getElementById("pageNav");
  if (!sel || typeof SITE_DATA === "undefined") return;
  var activeLang = lang || "es";

  function norm(path) {
    return path.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  }

  var current = norm(location.pathname);
  var placeholder = activeLang === "en" ? "Go to…" : "Ir a…";
  var html = '<option value="" disabled>' + placeholder + "</option>";
  var matchedUrl = "";

  SITE_DATA.pages.forEach(function (p) {
    var label = typeof p.label === "string" ? p.label : p.label[activeLang] || p.label.es;
    if (norm(p.url) === current) matchedUrl = p.url;
    html += '<option value="' + p.url + '">' + label + "</option>";
  });

  sel.innerHTML = html;
  sel.value = matchedUrl;

  if (!sel.dataset.bound) {
    sel.dataset.bound = "true";
    sel.addEventListener("change", function () {
      if (this.value) location.href = this.value;
    });
  }
}

/* Wiring genérico de íconos de contacto (email/whatsapp/linkedin/github) —
   busca estas clases en cualquier página que cargue este script y les
   asigna el href correcto desde SITE_DATA. Idempotente: si una página ya
   los conectaba a mano en su propio <script>, no rompe nada (mismo valor
   final). Así una página nueva solo necesita usar estas clases, sin
   duplicar el wiring. */
function wireContactIcons() {
  if (typeof SITE_DATA === "undefined") return;
  var email = SITE_DATA.email.user + "@" + SITE_DATA.email.domain;
  document.querySelectorAll(".email-link").forEach(function (el) {
    el.href = "mailto:" + email;
    var span = el.querySelector(".email-text");
    if (span) span.textContent = email;
  });
  document.querySelectorAll(".wa-link").forEach(function (el) {
    el.href = "https://wa.me/" + SITE_DATA.whatsappNumber;
  });
  document.querySelectorAll(".linkedin-link").forEach(function (el) {
    el.href = SITE_DATA.links.linkedin;
  });
  document.querySelectorAll(".github-link").forEach(function (el) {
    el.href = SITE_DATA.links.github;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Páginas sin sistema de i18n (no definen I18N/applyLang) se renderizan
  // aquí mismo. index.html llama a renderPageNav(lang) desde su propio
  // applyLang() para mantener el idioma sincronizado.
  if (typeof I18N === "undefined") renderPageNav("es");
  wireContactIcons();
});
