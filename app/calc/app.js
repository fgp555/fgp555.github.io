const totalEl = document.getElementById("total");

let tipoProyecto = null;
let selectedTemplate = null;

// render
function renderGroup(id, data, type = "radio") {
  const container = document.getElementById(id);
  container.innerHTML = "";

  data.forEach((item) => {
    const inputType = type === "checkbox" ? "checkbox" : "radio";
    const name = type === "checkbox" ? id + item.tech : id;

    container.innerHTML += `
      <label class="card">
        <input type="${inputType}" name="${name}" value="${item.price}" data-tech="${item.tech}">
        
        <div class="card-content">
          <strong>${item.name}</strong>
          <small>${item.description}</small>
          <span class="price">$${item.price}</span>
        </div>
      </label>
    `;
  });
}

function renderAll() {
  renderGroup("web", DATA.web);
  renderGroup("backend", DATA.backend);
  renderGroup("mobile", DATA.mobile);
  renderGroup("auto", DATA.auto, "checkbox");
  renderGroup("ux", DATA.ux);
  renderGroup("devops", DATA.devops, "checkbox");

  addEvents();
}

// eventos base
function addEvents() {
  document.querySelectorAll("input").forEach((i) => {
    i.addEventListener("change", calcular);
  });
}

// objetivo
document.querySelectorAll("input[name='tipo']").forEach((el) => {
  el.addEventListener("change", () => {
    tipoProyecto = el.value;
    calcular();
  });
});

// plantilla
document.querySelectorAll("input[name='template']").forEach((el) => {
  el.addEventListener("change", () => {
    selectedTemplate = TEMPLATES[el.value];
    resetConfig();
    renderAll();
    aplicarPlantilla();
    calcular();
  });
});

// aplicar plantilla
function aplicarPlantilla() {
  if (!selectedTemplate) return;

  const { autoSelect, disable } = selectedTemplate;

  Object.keys(autoSelect || {}).forEach((group) => {
    marcar(group, autoSelect[group]);
  });

  Object.keys(disable || {}).forEach((group) => {
    disable[group].forEach((v) => deshabilitar(group, v));
  });
}

// helpers
function marcar(group, tech) {
  document.querySelectorAll(`#${group} input`).forEach((i) => {
    if (i.dataset.tech === tech) {
      i.checked = true;
    }
  });
}

function deshabilitar(group, tech) {
  document.querySelectorAll(`#${group} input`).forEach((i) => {
    if (i.dataset.tech === tech) {
      i.disabled = true;
      i.parentElement.style.opacity = "0.4";
    }
  });
}

// reset
function resetConfig() {
  document.querySelectorAll("#configuracion input").forEach((i) => {
    i.checked = false;
    i.disabled = false;
    i.parentElement.style.opacity = "1";
  });
}

// calcular
function calcular() {
  let total = 0;

  document.querySelectorAll("input:checked").forEach((el) => {
    const val = Number(el.value);
    if (!isNaN(val)) total += val;
  });

  // plantilla
  if (selectedTemplate?.basePrice) {
    total += selectedTemplate.basePrice;
  }

  // descuento
  const web = document.querySelector("input[name='web']:checked");
  const backend = document.querySelector("input[name='backend']:checked");

  if (web && backend) total *= 0.9;
  if (tipoProyecto === "mvp") total *= 0.85;

  total = Math.round(total);
  if (isNaN(total)) total = 0;

  totalEl.innerText = total;
}

// enviar
function enviar() {
  alert("Total estimado: $" + totalEl.innerText);
}

// init
renderAll();

function limpiar() {
  // 🔹 reset estado global
  tipoProyecto = null;
  selectedTemplate = null;

  // 🔹 desmarcar TODO
  document.querySelectorAll("input").forEach((i) => {
    i.checked = false;
    i.disabled = false;
    i.parentElement.style.opacity = "1";
  });

  // 🔹 limpiar UI renderizada
  renderAll();

  // 🔹 reset total
  totalEl.innerText = "0";
}
