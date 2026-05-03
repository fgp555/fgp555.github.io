const container = document.getElementById("catalogo");

// render catálogo
data.forEach((cat) => {
  const section = document.createElement("div");

  section.innerHTML = `
    <h2>${cat.categoria}</h2>
    <div class="grid">
      ${cat.items
        .map(
          (item) => `
        <div class="card">
          <strong>${item.nombre}</strong>

          <div class="desc">
            ${item.descripcion || "Solución digital personalizada."}
          </div>

          <div class="tech">
            ${item.tech
              .map(
                (t) => `
              <span class="tag tooltip" data-info="${TECH_INFO[t] || "Tecnología del sistema"}">
                ${t}
              </span>
            `,
              )
              .join("")}
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  container.appendChild(section);
});

// 📘 LEYENDA
const leyenda = document.getElementById("leyenda");

leyenda.innerHTML = `
  <h2>🧠 Tecnologías</h2>
  <div class="grid">
    ${Object.entries(TECH_INFO)
      .map(
        ([key, val]) => `
      <div class="card">
        <strong>${key}</strong>
        <div class="desc">${val}</div>
      </div>
    `,
      )
      .join("")}
  </div>
`;
