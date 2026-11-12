const cases = {
  fiber: { document: '00000001', phone: '', name: 'Cliente ficticio Uno', fiber: true },
  'without-fiber': { document: '00000002', phone: '', name: 'Cliente ficticio Dos', fiber: false },
  'second-fiber': { document: '', phone: '900000003', name: 'Cliente ficticio Tres', fiber: true },
};
let selectedCase = 'fiber';
let searchVersion = 0;
const form = document.querySelector('#search-form');
const rows = document.querySelector('#recommendations');
const status = document.querySelector('#search-status');

function clearResults() {
  searchVersion += 1;
  rows.replaceChildren();
  document.querySelector('.client-data').hidden = true;
  form.querySelector('[type="submit"]').disabled = false;
}

document.querySelectorAll('[data-case]').forEach((button) => {
  button.addEventListener('click', () => {
    clearResults();
    selectedCase = button.dataset.case;
    const scenario = cases[selectedCase];
    form.elements.documentNumber.value = scenario.document;
    form.elements.line.value = scenario.phone;
    document.querySelectorAll('[data-case]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    status.textContent = 'Caso preparado. Pulsa Buscar.';
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  clearResults();
  const version = searchVersion;
  const scenario = cases[selectedCase];
  status.textContent = 'Consultando oferta ficticia…';
  form.querySelector('[type="submit"]').disabled = true;
  setTimeout(() => {
    if (version !== searchVersion) return;
    document.querySelector('#client-name').textContent = scenario.name;
    document.querySelector('#client-reference').textContent = scenario.document ? 'Documento ficticio: ' + scenario.document : 'Línea ficticia: ' + scenario.phone;
    document.querySelector('.client-data').hidden = false;
    const recommendations = ['Ofrecimiento escalonado de demostración', 'Renovación de plan de demostración'];
    if (scenario.fiber) recommendations.push('Ofrece: Actualizar a Fibra Óptica con bono de 1000 Mbps');
    for (const recommendation of recommendations) {
      const row = document.createElement('tr');
      for (const value of [scenario.phone || '900000001', '100001', '200001', recommendation]) {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.append(cell);
      }
      rows.append(row);
    }
    status.textContent = scenario.fiber ? 'Consulta completada con fibra. La alerta debe mostrarla la extensión instalada.' : 'Consulta completada sin fibra. No debe aparecer una alerta nueva.';
    form.querySelector('[type="submit"]').disabled = false;
  }, 450);
});

document.querySelector('#clear').addEventListener('click', () => {
  clearResults();
  status.textContent = 'Resultados limpiados. Puedes repetir la búsqueda.';
});
