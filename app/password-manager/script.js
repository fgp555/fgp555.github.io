let data = JSON.parse(localStorage.getItem("passwords") || "[]");
let editIndex = null;
let dragStartIndex = null;

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

function encrypt(text) {
  return btoa(text);
}

function decrypt(text) {
  try {
    return atob(text);
  } catch {
    return "";
  }
}

function focusCard(index) {
  const card = document.querySelector(`[data-index="${index}"]`);
  if (!card) return;

  // scroll hacia la card
  card.scrollIntoView({ behavior: "smooth", block: "center" });

  // resaltar
  card.classList.add("highlight");

  setTimeout(() => {
    card.classList.remove("highlight");
  }, 1500);
}

function save() {
  const title = document.getElementById("title").value;
  const password = document.getElementById("password").value;
  const url = document.getElementById("url").value;
  const username = document.getElementById("username").value;

  if (!title /* || !password */) return alert("Faltan datos");

  const item = {
    title,
    username,
    password: encrypt(password),
    url,
    date: new Date().toLocaleString(),
  };

  let updatedIndex = null;

  if (editIndex !== null) {
    data[editIndex] = item;
    updatedIndex = editIndex; // 👈 guardar referencia
    editIndex = null;
  } else {
    data.push(item);
  }

  localStorage.setItem("passwords", JSON.stringify(data));
  clearForm();
  render();

  // 👉 enfocar card editada
  if (updatedIndex !== null) {
    focusCard(updatedIndex);
    showToast("Actualizado");
  } else {
    showToast("Guardado");
  }
}

function clearForm() {
  title.value = "";
  username.value = ""; // 👈 nuevo
  password.value = "";
  url.value = "";
}

function render() {
  const search = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("list");
  list.innerHTML = "";

  data
    .map((item, index) => ({ item, index })) // 👈 mantener índice real
    .filter(({ item }) => {
      const text = [item.title, item.username, item.url].filter(Boolean).join(" ").toLowerCase();

      return text.includes(search);
    })
    .forEach(({ item, index }) => {
      const div = document.createElement("div");
      div.className = "card";
      div.draggable = true;
      div.dataset.index = index;

      div.addEventListener("dragstart", handleDragStart);
      div.addEventListener("dragover", handleDragOver);
      div.addEventListener("drop", handleDrop);
      div.addEventListener("dragend", handleDragEnd);

      div.innerHTML = `
  <h3 class="click-copy" title="Copiar título" onclick="copyTitle(${index})">
  ${item.title}
  </h3>

  ${
    item.username
      ? `
  <p class="row">
    <button class="icon-btn btn-user" title="Copiar usuario" onclick="copyUser(${index})">
      <i class="fa fa-user"></i>
    </button>
    <span class="click-copy" title="Copiar usuario" onclick="copyUser(${index})">
      ${item.username}
    </span>
  </p>`
      : ""
  }

${
  item.password
    ? `
  <p class="row">
    <button class="icon-btn btn-pass" title="Copiar contraseña" onclick="copyPass(${index})">
      <i class="fa fa-copy"></i>
    </button>

    <span id="pass-${index}" class="click-copy" title="Copiar contraseña" onclick="copyPass(${index})">
      ******
    </span>

    <button class="icon-btn btn-view" title="Mostrar / ocultar contraseña" onclick="toggle(${index})">
      <i class="fa fa-eye"></i>
    </button>

    <span class="date" style="margin-left:auto;">
      ${item.date}
    </span>
  </p>`
    : ""
}

  ${
    item.url
      ? `
  <p class="row">
    <button class="icon-btn btn-url" title="Copiar URL" onclick="copyUrl(${index})">
      <i class="fa fa-link"></i>
    </button>
    <a href="${item.url}" target="_blank" class="url click-copy" title="Copiar URL" onclick="copyUrl(${index}); return false;">
      ${item.url}
    </a>
  </p>`
      : ""
  }

  <div class="actions">
    <button class="btn-edit" title="Editar" onclick="edit(${index})">
      <i class="fa fa-edit"></i>
    </button>
    <button class="btn-delete" title="Eliminar" onclick="removeItem(${index})">
      <i class="fa fa-trash"></i>
    </button>
  </div>
`;

      list.appendChild(div);
    });
}

function handleDragStart() {
  dragStartIndex = +this.dataset.index;
  this.style.opacity = "0.5";
}

function handleDragOver(e) {
  e.preventDefault();
  this.style.border = "2px dashed #38bdf8";
}

function handleDrop() {
  const dragEndIndex = +this.dataset.index;
  reorderData(dragStartIndex, dragEndIndex);
}

function handleDragEnd() {
  this.style.opacity = "1";
  this.style.border = "none";
}

function reorderData(start, end) {
  const item = data.splice(start, 1)[0];
  data.splice(end, 0, item);

  localStorage.setItem("passwords", JSON.stringify(data));
  render();
}

function toggle(index) {
  const el = document.getElementById("pass-" + index);
  el.innerText = el.innerText === "******" ? decrypt(data[index].password) : "******";
}

function copyText(value, label = "Dato") {
  if (!value) {
    alert(`No hay ${label.toLowerCase()} para copiar`);
    return;
  }

  navigator.clipboard.writeText(value);

  // feedback visual 🔥
  showToast(`${label} copiado`);
}

function copyTitle(index) {
  copyText(data[index].title, "Título");
}

function copyUser(index) {
  copyText(data[index].username, "Usuario");
}

function copyPass(index) {
  copyText(decrypt(data[index].password), "Password");
}

function copyUrl(index) {
  copyText(data[index].url, "URL");
}

function highlightForm() {
  const inputs = [title, username, password, url];

  inputs.forEach((el) => el.classList.add("editing"));

  setTimeout(() => {
    inputs.forEach((el) => el.classList.remove("editing"));
  }, 1500);
}

function edit(index) {
  const item = data[index];

  title.value = item.title;
  username.value = item.username || "";
  password.value = decrypt(item.password);
  url.value = item.url;

  editIndex = index;

  // 👉 enfocar y llevar al formulario
  title.focus();

  // scroll suave hacia el formulario
  title.scrollIntoView({ behavior: "smooth", block: "center" });

  showToast("Editando registro");
  highlightForm();
}

function removeItem(index) {
  if (!confirm("¿Eliminar?")) return;
  data.splice(index, 1);
  localStorage.setItem("passwords", JSON.stringify(data));
  render();
}

function generatePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("password").value = pass;
}
function exportData() {
  if (!data.length) {
    showToast("No hay datos para exportar");
    return;
  }

  const headers = ["title", "username", "password", "url", "date"];

  const rows = data.map((item) => [
    item.title,
    item.username || "",
    decrypt(item.password), // 🔓 SIN encriptar
    item.url || "",
    item.date,
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((field) => `"${(field || "").toString().replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "passwords.csv";
  a.click();

  showToast("CSV exportado");
}

function getUniqueTitle(title) {
  const titles = data.map((i) => i.title);

  if (!titles.includes(title)) return title;

  let count = 1;
  let newTitle;

  do {
    newTitle = `${title} (${count})`;
    count++;
  } while (titles.includes(newTitle));

  return newTitle;
}

function importData(e) {
  const input = e.target; // 👈 guardar referencia
  const file = input.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const action = prompt("¿Qué deseas hacer?\n\n1 = Reemplazar todo\n2 = Combinar con existentes", "1");

    if (!action) {
      input.value = ""; // 👈 reset igual
      return;
    }

    const lines = reader.result.split("\n").filter(Boolean);

    const headers = lines[0].split(",").map((h) => h.replace(/"/g, "").trim());

    const newData = lines.slice(1).map((line) => {
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

      const obj = {};
      headers.forEach((header, i) => {
        let val = values[i] || "";
        val = val.replace(/^"|"$/g, "").replace(/""/g, '"');
        obj[header] = val;
      });

      return {
        title: obj.title,
        username: obj.username,
        password: encrypt(obj.password),
        url: obj.url,
        date: obj.date || new Date().toLocaleString(),
      };
    });

    if (action === "1") {
      data = newData;
      showToast("Datos reemplazados");
    } else if (action === "2") {
      const processed = newData.map((item) => ({
        ...item,
        title: getUniqueTitle(item.title),
      }));

      data = [...data, ...processed];
      showToast("Datos combinados");
    } else {
      showToast("Acción inválida");
    }

    localStorage.setItem("passwords", JSON.stringify(data));
    render();

    input.value = ""; // 🔥 CLAVE: permitir reimportar el mismo archivo
  };

  reader.readAsText(file);
}

function toggleInputPassword() {
  const input = document.getElementById("password");
  const icon = document.getElementById("togglePass");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", render);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    render();
  }
});
render();

function clearAll() {
  const confirmText = prompt("Para borrar todo escribe: entiendo");

  if (confirmText?.toLowerCase().trim() !== "entiendo") {
    showToast("Acción cancelada");
    return;
  }

  data = [];
  localStorage.removeItem("passwords");
  render();

  showToast("Todos los datos eliminados");
}
