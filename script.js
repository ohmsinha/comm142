/* ============================================================
   RIT SIS & myCourses Wiki — JavaScript
   Scroll-spy, smooth scrolling, FAQ toggle, mobile menu
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll-spy: highlight active sidebar link ---
  const sections = document.querySelectorAll('.main-content section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  const observerOpts = { rootMargin: '-20% 0px -75% 0px', threshold: 0 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove('active'));
        const active = document.querySelector(`.sidebar-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, observerOpts);

  sections.forEach((s) => observer.observe(s));

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  // --- Mobile nav toggle ---
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.sidebar-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.querySelector('.toggle-icon').textContent =
        nav.classList.contains('open') ? '▲' : '▼';
    });
    // Close mobile nav when a link is clicked
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('open');
          toggle.querySelector('.toggle-icon').textContent = '▼';
        }
      });
    });
  }
});
