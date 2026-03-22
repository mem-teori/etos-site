document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-copy-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
