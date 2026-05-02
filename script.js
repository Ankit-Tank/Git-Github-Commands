function copyCmd(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Done';
    btn.classList.add('copied');
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
      toast.classList.remove('show');
    }, 1800);
  });
}

document.getElementById('searchBox').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  let total = 0;

  document.querySelectorAll('.section').forEach(sec => {
    let visible = 0;
    sec.querySelectorAll('.card').forEach(card => {
      const show = !q || (card.dataset.search + ' ' + card.innerText).toLowerCase().includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    sec.style.display = visible > 0 ? '' : 'none';
    total += visible;
  });

  document.getElementById('noResults').style.display = total === 0 ? 'block' : 'none';
});

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });
