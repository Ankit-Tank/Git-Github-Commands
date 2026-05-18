// ============================================
// GIT COMMANDS REFERENCE - INTERACTIVE JS
// ============================================

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  setupSearch();
  setupCopyFunctionality();
  setupKeyboardShortcuts();
  setupNavigation();
  setupScrollToTop();
  setupThemeToggle();
  setupCardStaggerAnimation();
  initializeActiveTab();
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.command-card');
    const sections = document.querySelectorAll('.category-section');
    let totalVisible = 0;
    let visibleSections = 0;

    // Filter cards
    sections.forEach(section => {
      let visibleInSection = 0;
      
      section.querySelectorAll('.command-card').forEach(card => {
        const searchText = card.dataset.search || '';
        const commandName = card.querySelector('.command-name').textContent.toLowerCase();
        const commandDesc = card.querySelector('.command-desc').textContent.toLowerCase();
        
        const matches = !query || 
                       searchText.includes(query) || 
                       commandName.includes(query) || 
                       commandDesc.includes(query);
        
        card.style.display = matches ? '' : 'none';
        if (matches) {
          visibleInSection++;
          totalVisible++;
        }
      });
      
      // Show/hide section
      section.style.display = visibleInSection > 0 ? '' : 'none';
      if (visibleInSection > 0) {
        visibleSections++;
      }
    });

    // Show/hide no results message
    if (totalVisible === 0) {
      noResults.classList.add('show');
      noResults.style.display = 'block';
    } else {
      noResults.classList.remove('show');
      noResults.style.display = 'none';
    }

    // Save to history
    if (query) {
      saveSearchHistory(query);
    }
  });

  // Focus on load
  setTimeout(() => {
    searchInput.blur();
  }, 100);
}

// ============================================
// COPY TO CLIPBOARD FUNCTIONALITY
// ============================================

function setupCopyFunctionality() {
  const content = document.querySelector('.content');
  
  content.addEventListener('click', (e) => {
    const codeLine = e.target.closest('.code-line');
    if (codeLine) {
      copyToClipboard(codeLine.textContent);
    }
  });

  // Double-click to copy
  content.addEventListener('dblclick', (e) => {
    const codeLine = e.target.closest('.code-line');
    if (codeLine) {
      copyToClipboard(codeLine.textContent);
    }
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard! ✨');
    
    // Add visual feedback
    const activeCard = event?.target?.closest('.code-line');
    if (activeCard) {
      activeCard.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
      setTimeout(() => {
        activeCard.style.backgroundColor = '';
      }, 300);
    }
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied! ✨');
  });
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, duration = 2000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('searchInput').focus();
      showToast('Search focused 🔍');
    }

    // Esc to clear search
    if (e.key === 'Escape') {
      const searchInput = document.getElementById('searchInput');
      if (searchInput.value) {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
        showToast('Search cleared ✨');
      }
    }

    // ? to show shortcuts
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
      toggleShortcutsHint();
    }
  });
}

function toggleShortcutsHint() {
  const hint = document.getElementById('shortcutsHint');
  hint.classList.toggle('show');
  
  if (hint.classList.contains('show')) {
    setTimeout(() => {
      document.addEventListener('click', closeShortcutsHint);
    }, 100);
  }
}

function closeShortcutsHint() {
  const hint = document.getElementById('shortcutsHint');
  hint.classList.remove('show');
  document.removeEventListener('click', closeShortcutsHint);
}

// ============================================
// NAVIGATION AND ACTIVE STATES
// ============================================

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.category-section');

  // Handle nav item clicks
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active from all
      navItems.forEach(i => i.classList.remove('active'));
      
      // Add active to clicked
      item.classList.add('active');
      
      // Scroll to section
      const href = item.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Update active nav on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 450;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#' + current) {
        item.classList.add('active');
      }
    });
  }, { passive: true });
}

function initializeActiveTab() {
  const firstNavItem = document.querySelector('.nav-item');
  if (firstNavItem) {
    firstNavItem.classList.add('active');
  }
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function setupScrollToTop() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Hover effects
  scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.15) translateY(-4px)';
  });

  scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
  });
}

// ============================================
// THEME TOGGLE
// ============================================

function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('git-commands-theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('git-commands-theme', newTheme);
  });
}

function setTheme(theme) {
  const htmlElement = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  
  htmlElement.setAttribute('data-theme', theme);
  
  if (theme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    themeToggle.title = 'Switch to Light Mode';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.title = 'Switch to Dark Mode';
  }
}

// ============================================
// CARD STAGGER ANIMATION
// ============================================

function setupCardStaggerAnimation() {
  const cards = document.querySelectorAll('.command-card');
  
  cards.forEach((card, index) => {
    card.style.setProperty('--stagger-delay', `${index * 0.05}s`);
    card.style.animationDelay = `${index * 0.05}s`;
  });

  // Re-animate on search
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    setTimeout(() => {
      const visibleCards = document.querySelectorAll('.command-card:not([style*="display: none"])');
      visibleCards.forEach((card, index) => {
        card.style.animation = 'none';
        setTimeout(() => {
          card.style.animation = 'scaleIn 0.4s ease-out backwards';
          card.style.animationDelay = `${index * 0.03}s`;
        }, 10);
      });
    }, 50);
  });
}

// ============================================
// SEARCH HISTORY
// ============================================

function saveSearchHistory(query) {
  const MAX_HISTORY = 10;
  let history = JSON.parse(localStorage.getItem('git-commands-search-history') || '[]');
  
  // Remove if already exists
  history = history.filter(item => item !== query);
  
  // Add to beginning
  history.unshift(query);
  
  // Keep only last 10
  history = history.slice(0, MAX_HISTORY);
  
  localStorage.setItem('git-commands-search-history', JSON.stringify(history));
}

// ============================================
// PERFORMANCE: LAZY LOADING
// ============================================

function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          cardObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.command-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      cardObserver.observe(card);
    });
  }
}

// ============================================
// ACCESSIBILITY
// ============================================

function setupAccessibility() {
  // Add keyboard focus visible styles
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });

  // ARIA attributes
  const cards = document.querySelectorAll('.command-card');
  cards.forEach((card, index) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const codeLine = card.querySelector('.code-line');
        if (codeLine) {
          copyToClipboard(codeLine.textContent);
        }
      }
    });
  });
}

// ============================================
// SMOOTH SCROLL WITH OFFSET
// ============================================

function setupSmoothScroll() {
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.hasAttribute('href')) {
      const href = e.target.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  });
}

// ============================================
// RESPONSIVE SIDEBAR
// ============================================

function setupResponsiveSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const navItems = document.querySelectorAll('.nav-item');

  // Close sidebar on nav item click on mobile
  if (window.innerWidth <= 768) {
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    });
  }
}

// ============================================
// PAGE VISIBILITY DETECTION
// ============================================

function setupPageVisibility() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.title = '⏸ Git Commands';
    } else {
      document.title = 'Git & GitHub Commands - Master Your Workflow';
    }
  });
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

function logPerformanceMetrics() {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`📊 Page loaded in ${pageLoadTime}ms`);
  });
}

// ============================================
// DEBUG MODE
// ============================================

window.gitDebug = {
  getTotalCommands: () => document.querySelectorAll('.command-card').length,
  getVisibleCommands: () => document.querySelectorAll('.command-card:not([style*="display: none"])').length,
  getSearchHistory: () => JSON.parse(localStorage.getItem('git-commands-search-history') || '[]'),
  clearHistory: () => localStorage.removeItem('git-commands-search-history'),
  getStats: () => ({
    total: document.querySelectorAll('.command-card').length,
    visible: document.querySelectorAll('.command-card:not([style*="display: none"])').length,
    categories: document.querySelectorAll('.category-section').length,
  })
};

// ============================================
// EXPORTS FOR DATA ANALYSIS
// ============================================

window.exportAllCommands = function() {
  const commands = [];
  document.querySelectorAll('.command-card').forEach(card => {
    const name = card.querySelector('.command-name').textContent;
    const desc = card.querySelector('.command-desc').textContent;
    const codes = Array.from(card.querySelectorAll('.code-line')).map(c => c.textContent);
    const difficulty = card.querySelector('.difficulty').textContent;
    
    commands.push({
      name,
      description: desc,
      examples: codes,
      difficulty
    });
  });
  return JSON.stringify(commands, null, 2);
};

// ============================================
// INITIALIZE ALL FEATURES
// ============================================

// Setup lazy loading
setupLazyLoading();

// Setup accessibility
setupAccessibility();

// Setup smooth scroll
setupSmoothScroll();

// Setup responsive sidebar
setupResponsiveSidebar();

// Setup page visibility
setupPageVisibility();

// Log performance metrics
logPerformanceMetrics();

// Console message
console.log('%c🚀 Git Commands Reference Ready!', 'color: #F54D27; font-size: 16px; font-weight: bold;');
console.log('%cCommands available: ' + document.querySelectorAll('.command-card').length, 'color: #06b6d4;');
console.log('%cDebug tools available at: window.gitDebug', 'color: #10b981;');
console.log('%cExport all commands: window.exportAllCommands()', 'color: #8b5cf6;');

// Service Worker Registration (optional - for offline support)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {
    // Service worker not available
  });
}