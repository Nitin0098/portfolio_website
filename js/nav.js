/**
 * Navigation Bar Controller
 * Handles mobile hamburger toggle, outside clicks, and accessible keyboard navigation.
 */
(function () {
  function initNav() {
    const toggleBtn = document.querySelector('.nav-toggle-btn');
    const navMenu = document.querySelector('.nav-buttons');
    if (!toggleBtn || !navMenu) return;

    function setMenuState(open) {
      navMenu.classList.toggle('is-open', open);
      toggleBtn.classList.toggle('is-active', open);
      toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('is-open');
      setMenuState(!isOpen);
    });

    // Close when clicking any nav button or link
    navMenu.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setMenuState(false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        setMenuState(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setMenuState(false);
      }
    });

    // Close menu when viewport resizes above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
        setMenuState(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
