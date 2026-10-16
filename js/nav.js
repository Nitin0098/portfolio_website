/**
 * Navigation Bar Controller & Global Utilities
 * Handles mobile hamburger toggle, outside clicks, email obfuscation, and anti-spam form submission.
 */
(function () {
  const pageLoadTime = Date.now();

  function initNav() {
    const toggleBtn = document.querySelector('.nav-toggle-btn');
    const navMenu = document.querySelector('.nav-buttons');
    if (toggleBtn && navMenu) {
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

    // Obfuscate / Assemble Email Links dynamically (anti-crawler harvesting)
    document.querySelectorAll('.contact-email-link[data-user]').forEach(link => {
      const user = link.getAttribute('data-user');
      const domain = link.getAttribute('data-domain');
      if (user && domain) {
        const fullEmail = `${user}@${domain}`;
        link.href = `mailto:${fullEmail}`;
        link.textContent = fullEmail;
      }
    });

    // Tag all forms with initialization timestamp for time-trap validation
    document.querySelectorAll('.thoughts-form').forEach(form => {
      form._loadTimestamp = Date.now();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

  // Global Hardened Anti-Spam Form Submission Handler
  window.handleThoughtsSubmit = function (e, form) {
    e.preventDefault();

    const successBanner = form.querySelector('.form-success-banner');
    const errorBanner = form.querySelector('.form-error-banner');
    const btn = form.querySelector('.form-submit-btn');
    const originalBtnText = btn ? btn.innerHTML : 'Send Thoughts &rarr;';

    function showError(msg) {
      if (successBanner) successBanner.style.display = 'none';
      if (errorBanner) {
        errorBanner.textContent = msg;
        errorBanner.style.display = 'block';
        setTimeout(() => {
          errorBanner.style.display = 'none';
        }, 7000);
      } else {
        alert(msg);
      }
    }

    function showSuccess(msg) {
      if (errorBanner) errorBanner.style.display = 'none';
      if (successBanner) {
        successBanner.textContent = msg;
        successBanner.style.display = 'block';
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 7000);
      }
    }

    // 1. Honeypot Bot Trap Check
    const honey = form.querySelector('input[name="_honey"]');
    if (honey && honey.value.trim() !== '') {
      // Automated bot filled hidden honeypot. Silently fake success and abort network request.
      form.reset();
      showSuccess('Thank you! Your message has been sent to Nitin.');
      return;
    }

    // 2. Time-Trap Check (Prevent instant automated form submissions)
    const loadTime = form._loadTimestamp || pageLoadTime;
    const elapsedSeconds = (Date.now() - loadTime) / 1000;
    if (elapsedSeconds < 2.5) {
      showError('Please take a moment before submitting.');
      return;
    }

    // 3. Cooldown / Rate Limiting (Prevent spam flooding)
    const lastSubmit = sessionStorage.getItem('last_thoughts_submit');
    const now = Date.now();
    if (lastSubmit && (now - parseInt(lastSubmit, 10)) < 45000) {
      const waitTime = Math.ceil((45000 - (now - parseInt(lastSubmit, 10))) / 1000);
      showError(`Please wait ${waitTime} seconds before sending another message.`);
      return;
    }

    // 4. Input Length & Content Sanitization
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const messageVal = messageInput ? messageInput.value.trim() : '';

    if (!nameVal || !emailVal || !messageVal) {
      showError('Please fill in all required fields.');
      return;
    }

    if (nameVal.length > 80) {
      showError('Name exceeds the maximum length of 80 characters.');
      return;
    }

    if (emailVal.length > 120) {
      showError('Email exceeds the maximum length of 120 characters.');
      return;
    }

    if (messageVal.length > 2500) {
      showError('Message exceeds the maximum limit of 2,500 characters.');
      return;
    }

    // Spam URL link flood check (reject messages with more than 2 web links)
    const urlMatches = messageVal.match(/https?:\/\/|www\./gi);
    if (urlMatches && urlMatches.length > 2) {
      showError('To prevent automated spam, messages with multiple links are not permitted.');
      return;
    }

    // 5. Send Request via AJAX
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
        sessionStorage.setItem('last_thoughts_submit', Date.now().toString());
        showSuccess('Thank you! Your message has been sent to Nitin.');
        form.reset();
        // Reset form timestamp
        form._loadTimestamp = Date.now();
      })
      .catch(err => {
        showError('Could not send message right now. Please try again or reach out via direct email.');
      })
      .finally(() => {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalBtnText;
        }
      });
  };
})();
