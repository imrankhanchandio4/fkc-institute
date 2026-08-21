/* FKC Institute of Computer - Main JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      toggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggle.textContent = '☰';
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Animate on scroll
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Admission form handling
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(admissionForm);
      const name = formData.get('studentName');
      
      // Show success message
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.innerHTML = `<strong>Thank you, ${name}!</strong> Your admission application has been submitted successfully. Our team will contact you shortly.`;
        admissionForm.reset();
        
        // Scroll to message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide after 8 seconds
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 8000);
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('contactSuccess');
      if (successMsg) {
        successMsg.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
          successMsg.style.display = 'none';
        }, 6000);
      }
    });
  }

  // Gallery lightbox (simple)
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed; inset: 0; background: rgba(0,0,0,0.9);
          display: flex; align-items: center; justify-content: center;
          z-index: 9999; cursor: pointer;
        `;
        const fullImg = document.createElement('img');
        fullImg.src = img.src;
        fullImg.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);';
        overlay.appendChild(fullImg);
        overlay.addEventListener('click', () => overlay.remove());
        document.body.appendChild(overlay);
      }
    });
  });

  // Counter animation for stats
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        
        const update = () => {
          current += step;
          if (current < target) {
            el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
            requestAnimationFrame(update);
          } else {
            el.textContent = target + (el.getAttribute('data-suffix') || '');
          }
        };
        update();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // Admin login mock
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('adminUser').value;
      const pass = document.getElementById('adminPass').value;
      
      // Demo credentials
      if (user === 'admin' && pass === 'fkc2026') {
        window.location.href = 'dashboard.html';
      } else {
        const err = document.getElementById('loginError');
        if (err) {
          err.style.display = 'block';
          err.textContent = 'Invalid username or password. Try admin / fkc2026';
        }
      }
    });
  }

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
