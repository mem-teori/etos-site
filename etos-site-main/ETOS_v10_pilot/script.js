
document.addEventListener('DOMContentLoaded', () => {
  const current = document.querySelector('.lang-pill.active');
  if (current) current.setAttribute('aria-current', 'page');
});
