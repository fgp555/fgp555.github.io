(() => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
  } catch { /* System theme remains available when browser storage is blocked. */ }

  document.addEventListener('DOMContentLoaded', () => {
    const theme = document.querySelector('#theme-toggle');
    const systemTheme = matchMedia('(prefers-color-scheme: dark)');
    const effectiveTheme = () => document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light');
    function updateThemeLabel() {
      const label = effectiveTheme() === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro';
      theme.setAttribute('aria-label', label);
      theme.title = label;
    }
    theme.hidden = false;
    updateThemeLabel();
    systemTheme.addEventListener('change', updateThemeLabel);
    theme.addEventListener('click', () => {
      const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch { /* Theme still works for this page. */ }
      updateThemeLabel();
    });

    const search = document.querySelector('#tool-search');
    const cards = [...document.querySelectorAll('.tool-card')];
    const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    function filter() {
      const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
      let total = 0;
      for (const card of cards) {
        const content = normalize(card.textContent + ' ' + (card.dataset.keywords || ''));
        card.hidden = !terms.every((term) => content.includes(term));
        if (!card.hidden) total += 1;
      }
      document.querySelector('#tool-count').textContent = `${total} ${total === 1 ? 'herramienta' : 'herramientas'}`;
      document.querySelector('#empty-state').hidden = total !== 0;
    }
    document.querySelector('#search-toolbar').hidden = false;
    search.addEventListener('input', filter);
    document.querySelector('#clear-search').addEventListener('click', () => { search.value = ''; filter(); search.focus(); });
    filter();
  });
})();
