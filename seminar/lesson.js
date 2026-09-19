document.addEventListener('click', (event) => {
  const card = event.target.closest('.flip-card');
  if (!card) return;
  const flipped = card.classList.toggle('is-flipped');
  card.setAttribute('aria-pressed', String(flipped));
});
