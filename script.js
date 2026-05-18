/* ─── CANVAS GRID BACKGROUND ─────────────────────────────── */
(function () {
  const c = document.getElementById('bgCanvas');
  const ctx = c.getContext('2d');

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    const gap = 60;
    for (let x = 0; x <= c.width; x += gap) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, c.height); ctx.stroke();
    }
    for (let y = 0; y <= c.height; y += gap) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke();
    }
  }

  resize();
  draw();
  window.addEventListener('resize', function () { resize(); draw(); });
})();

/* ─── COPY TO CLIPBOARD ──────────────────────────────────── */
function copy(btn, text) {
  // Decode HTML entities so copied text is clean
  const decoded = text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g,  '&')
    .replace(/&lt;/g,   '<')
    .replace(/&gt;/g,   '>');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(decoded)
      .then(function () { showOK(btn); })
      .catch(function () { fallback(decoded, btn); });
  } else {
    fallback(decoded, btn);
  }
}

function fallback(text, btn) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity  = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showOK(btn); } catch (e) {}
  document.body.removeChild(ta);
}

function showOK(btn) {
  const orig = btn.textContent;
  btn.textContent = '✓ done';
  btn.classList.add('ok');

  const toast = document.getElementById('toast');
  toast.classList.add('on');

  setTimeout(function () {
    btn.textContent = orig;
    btn.classList.remove('ok');
    toast.classList.remove('on');
  }, 1800);
}

/* ─── SEARCH ─────────────────────────────────────────────── */
document.getElementById('searchBox').addEventListener('input', function () {
  const q = this.value.trim().toLowerCase();
  let total = 0;

  document.querySelectorAll('section.section').forEach(function (sec) {
    let vis = 0;
    sec.querySelectorAll('.card').forEach(function (card) {
      const haystack = (card.dataset.search || '') + ' ' + card.textContent.toLowerCase();
      const match = !q || haystack.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) vis++;
    });
    sec.style.display = vis > 0 ? '' : 'none';
    total += vis;
  });

  document.getElementById('noResults').style.display = total === 0 ? 'block' : 'none';
});

/* ─── KEYBOARD SHORTCUTS ─────────────────────────────────── */
document.addEventListener('keydown', function (e) {
  // Ctrl/Cmd + K  →  focus search
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchBox').focus();
  }
  // Escape  →  clear search
  if (e.key === 'Escape') {
    const s = document.getElementById('searchBox');
    s.value = '';
    s.dispatchEvent(new Event('input'));
  }
});

/* ─── ACTIVE NAV (click) ─────────────────────────────────── */
function setActive(el) {
  setTimeout(function () {
    document.querySelectorAll('.nav-item').forEach(function (n) {
      n.classList.remove('active');
    });
    el.classList.add('active');
    // Auto-close sidebar on mobile after navigation
    if (window.innerWidth <= 760) {
      document.querySelector('.sidebar').classList.remove('open');
    }
  }, 10);
}

/* ─── ACTIVE NAV (scroll) ────────────────────────────────── */
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(function (s) {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  document.querySelectorAll('.nav-item').forEach(function (n) {
    n.classList.toggle('active', n.getAttribute('href') === '#' + current);
  });
}, { passive: true });

/* ─── MOBILE SIDEBAR CLOSE ON CONTENT CLICK ─────────────── */
document.getElementById('main').addEventListener('click', function () {
  if (window.innerWidth <= 760) {
    document.querySelector('.sidebar').classList.remove('open');
  }
});