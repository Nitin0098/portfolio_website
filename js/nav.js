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

  // Global Form Submission Handler (AJAX via FormSubmit to nitinfromindia4@gmail.com)
  window.handleThoughtsSubmit = function (e, form) {
    e.preventDefault();
    const banner = form.querySelector('.form-success-banner');
    const btn = form.querySelector('.form-submit-btn');
    const originalBtnText = btn ? btn.innerHTML : 'Send Thoughts &rarr;';

    if (btn) {
      btn.disabled = true;
      btn.innerHTML = 'Sending...';
    }

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/nitinfromindia4@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
      .then(response => {
        if (!response.ok) throw new Error('Submission failed');
        return response.json();
      })
      .then(data => {
        if (banner) {
          banner.textContent = 'Thank you! Your message has been sent to Nitin.';
          banner.style.display = 'block';
        }
        form.reset();
        setTimeout(() => {
          if (banner) banner.style.display = 'none';
        }, 6000);
      })
      .catch(err => {
        form.submit();
      })
      .finally(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalBtnText;
        }
      });
  };
})();
