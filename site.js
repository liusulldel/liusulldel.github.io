(() => {
  const controls = document.querySelector('.research-tools');
  const papers = [...document.querySelectorAll('.paper')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.querySelector('input[type="search"]');
  const counter = document.querySelector('.result-count');
  const empty = document.querySelector('.empty-state');
  let category = 'all';
  controls.hidden = false;
  function applyFilters() {
    const query = search.value.trim().toLocaleLowerCase();
    let shown = 0;
    papers.forEach(paper => {
      const match = (category === 'all' || paper.dataset.category === category) && paper.textContent.toLocaleLowerCase().includes(query);
      paper.hidden = !match;
      if (match) shown++;
    });
    counter.textContent = shown + (shown === 1 ? ' research record' : ' research records');
    empty.hidden = shown !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    applyFilters();
  }));
  search.addEventListener('input', applyFilters);
})();
