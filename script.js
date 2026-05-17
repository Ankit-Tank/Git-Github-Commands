// ========== COPY COMMAND FUNCTIONALITY ==========
function copyCmd(btn, text) {
  // Copy text to clipboard
  navigator.clipboard.writeText(text).then(() => {
    // Store original text
    const originalText = btn.textContent;
    
    // Update button state
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    
    // Show toast notification
    const toast = document.getElementById('toast');
    toast.textContent = '📋 Command copied to clipboard';
    toast.classList.add('show');
    
    // Reset button after delay
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('copied');
      toast.classList.remove('show');
    }, 1800);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1800);
  });
}

// ========== SEARCH FUNCTIONALITY ==========
document.getElementById('searchBox').addEventListener('input', function () {
  const q = this.value.toLowerCase().trim();
  let total = 0;
  let visibleSections = 0;

  // Search through all sections
  document.querySelectorAll('.section').forEach(sec => {
    let visible = 0;
    const sectionTitle = sec.querySelector('.section-title').textContent.toLowerCase();
    
    // Check cards
    sec.querySelectorAll('.card').forEach(card => {
      const searchData = card.dataset.search || '';
      const cardTitle = card.querySelector('h3').textContent.toLowerCase();
      const cardDesc = card.querySelector('.card-desc').textContent.toLowerCase();
      
      const matches = !q || 
                      searchData.includes(q) || 
                      cardTitle.includes(q) || 
                      cardDesc.includes(q) ||
                      sectionTitle.includes(q);
      
      card.style.display = matches ? '' : 'none';
      if (matches) visible++;
    });
    
    // Show/hide section
    sec.style.display = visible > 0 ? '' : 'none';
    if (visible > 0) visibleSections++;
    total += visible;
  });

  // Show "no results" message
  const noResults = document.getElementById('noResults');
  noResults.style.display = total === 0 ? 'block' : 'none';

  // Update active nav link based on visible sections
  if (total === 0) {
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.remove('active');
    });
  }
});

// ========== NAVIGATION ACTIVE STATE ==========
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(s => {
    const sectionTop = s.offsetTop;
    const sectionHeight = s.offsetHeight;
    
    if (window.scrollY >= sectionTop - 150) {
      current = s.id;
    }
  });
  
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// Update active nav link on nav click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// ========== SMOOTH SCROLL WITH OFFSET ==========
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.hasAttribute('href')) {
    const href = e.target.getAttribute('href');
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
});

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('searchBox').focus();
  }
  
  // Escape to clear search
  if (e.key === 'Escape') {
    const searchBox = document.getElementById('searchBox');
    if (searchBox.value) {
      searchBox.value = '';
      searchBox.dispatchEvent(new Event('input'));
      searchBox.blur();
    }
  }
});

// ========== COPY ON DOUBLE CLICK ==========
document.addEventListener('dblclick', (e) => {
  const codeBlock = e.target.closest('.code-block');
  if (codeBlock) {
    const code = codeBlock.querySelector('code').textContent;
    const btn = codeBlock.querySelector('.copy-btn');
    if (btn) {
      copyCmd(btn, code);
    }
  }
});

// ========== SHOW SEARCH HINT ==========
document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('searchBox');
  
  // Add keyboard shortcut hint
  const hint = document.createElement('div');
  hint.style.cssText = `
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--surface3);
    color: var(--muted);
    font-family: var(--mono);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 4px;
    pointer-events: none;
    white-space: nowrap;
  `;
  hint.textContent = 'Ctrl + K';
  
  const searchWrap = document.querySelector('.search-wrap');
  searchWrap.style.position = 'relative';
  searchWrap.appendChild(hint);
  
  // Hide hint when focused
  searchBox.addEventListener('focus', () => {
    hint.style.display = 'none';
  });
  
  searchBox.addEventListener('blur', () => {
    hint.style.display = 'block';
  });
});

// ========== SECTION COUNTER UPDATES ==========
function updateSectionCounts() {
  document.querySelectorAll('.section').forEach(section => {
    const sectionId = section.id;
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (navLink) {
      const visibleCards = section.querySelectorAll('.card:not([style*="display: none"])').length;
      const countBadge = navLink.querySelector('.nav-count');
      if (countBadge) {
        const originalCount = countBadge.textContent;
        if (visibleCards < parseInt(originalCount)) {
          countBadge.style.color = 'var(--muted)';
          countBadge.textContent = `${visibleCards}/${originalCount}`;
        } else {
          countBadge.textContent = originalCount;
        }
      }
    }
  });
}

// Update counts when search changes
const originalInput = document.getElementById('searchBox').oninput;
document.getElementById('searchBox').addEventListener('input', () => {
  updateSectionCounts();
});

// ========== CARD STAGGER ANIMATION ==========
function animateCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.03}s`;
  });
}

// Re-animate on search
const searchBox = document.getElementById('searchBox');
const originalSearchListener = searchBox.oninput;
searchBox.addEventListener('input', () => {
  setTimeout(animateCards, 100);
});

// Initial animation
animateCards();

// ========== STATS COUNTER ANIMATION ==========
function animateStats() {
  const stats = document.querySelectorAll('.stat-num');
  stats.forEach((stat) => {
    const finalValue = stat.textContent;
    const isNumber = /^\d+/.test(finalValue);
    
    if (isNumber) {
      const number = parseInt(finalValue);
      let current = 0;
      const increment = Math.ceil(number / 20);
      
      const interval = setInterval(() => {
        current += increment;
        if (current >= number) {
          stat.textContent = finalValue;
          clearInterval(interval);
        } else {
          stat.textContent = current + '+';
        }
      }, 30);
    }
  });
}

// Animate stats on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', animateStats);
} else {
  animateStats();
}

// ========== CODE BLOCK FEATURES ==========
// Add hover effect to code blocks
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.code-block code')) {
    e.target.closest('.code-block').style.backgroundColor = 'rgba(59, 130, 246, 0.08)';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.code-block code')) {
    e.target.closest('.code-block').style.backgroundColor = '';
  }
});

// ========== SEARCH HISTORY (LOCAL STORAGE) ==========
const MAX_HISTORY = 5;

function saveSearchHistory(query) {
  if (!query.trim()) return;
  
  let history = JSON.parse(localStorage.getItem('gitCommandsSearchHistory') || '[]');
  history = history.filter(item => item !== query);
  history.unshift(query);
  history = history.slice(0, MAX_HISTORY);
  localStorage.setItem('gitCommandsSearchHistory', JSON.stringify(history));
}

document.getElementById('searchBox').addEventListener('change', (e) => {
  if (e.target.value.trim()) {
    saveSearchHistory(e.target.value);
  }
});

// ========== THEME DETECTION ==========
// Detect system dark mode preference
function initTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.style.colorScheme = 'dark';
  }
}

initTheme();

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initTheme);

// ========== PERFORMANCE: LAZY LOAD CARDS ==========
if ('IntersectionObserver' in window) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.5s ease';
    cardObserver.observe(card);
  });
}

// ========== PRINT STYLE SUPPORT ==========
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.breakInside = 'avoid';
  });
});

// ========== ACCESSIBILITY: FOCUS MANAGEMENT ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-focus');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-focus');
});

// ========== SHARE FUNCTIONALITY ==========
function shareCommand(command) {
  if (navigator.share) {
    navigator.share({
      title: 'Git Command',
      text: `Git command: ${command}`,
      url: window.location.href
    }).catch(err => console.log('Error sharing:', err));
  }
}

// Add share buttons to cards if share API available
if (navigator.share) {
  document.querySelectorAll('.card').forEach(card => {
    const code = card.querySelector('code');
    if (code && !card.querySelector('.share-btn')) {
      const shareBtn = document.createElement('button');
      shareBtn.className = 'copy-btn share-btn';
      shareBtn.textContent = 'Share';
      shareBtn.style.marginTop = '8px';
      shareBtn.onclick = () => shareCommand(code.textContent);
      card.querySelector('.code-block') && card.appendChild(shareBtn);
    }
  });
}

// ========== SCROLL TO TOP BUTTON ==========
function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.innerHTML = '↑';
  btn.id = 'scrollTopBtn';
  btn.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 28px;
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    z-index: 998;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    font-weight: bold;
  `;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  btn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  btn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
  
  document.body.appendChild(btn);
}

createScrollTopButton();

// ========== DEBUG MODE (Optional) ==========
window.gitCommandsDebug = {
  getTotalCommands: () => document.querySelectorAll('.card').length,
  getVisibleCommands: () => document.querySelectorAll('.card:not([style*="display: none"])').length,
  clearSearchHistory: () => localStorage.removeItem('gitCommandsSearchHistory'),
  exportAll: () => {
    const commands = [];
    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('h3').textContent;
      const desc = card.querySelector('.card-desc').textContent;
      const codeBlocks = Array.from(card.querySelectorAll('.code-block code')).map(c => c.textContent);
      commands.push({ title, desc, codeBlocks });
    });
    return JSON.stringify(commands, null, 2);
  }
};

console.log('💡 Git Commands loaded! Type gitCommandsDebug in console for utilities.');