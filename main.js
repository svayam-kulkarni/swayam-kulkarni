/* ============================================================
   SVAYAM KULKARNI — PORTFOLIO
   main.js
   ============================================================ */

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // SCROLL REVEAL
  // ──────────────────────────────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.dataset.delay || '0') * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // ──────────────────────────────────────────────────────────
  // MOBILE NAV
  // ──────────────────────────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      const [s1, s2] = navToggle.querySelectorAll('span');
      s1.style.transform = open ? 'rotate(45deg) translateY(4.5px)' : '';
      s2.style.transform = open ? 'rotate(-45deg) translateY(-4.5px)' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelectorAll('span').forEach(s => s.style.transform = '');
      });
    });
  }

  // ──────────────────────────────────────────────────────────
  // NAV HIDE / SHOW ON SCROLL
  // ──────────────────────────────────────────────────────────
  const navWrap   = document.querySelector('.nav-wrap');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y <= 80) { navWrap.style.transform = ''; lastScrollY = y; return; }
    if (y > lastScrollY + 4)      navWrap.style.transform = 'translateY(-100%)';
    else if (y < lastScrollY - 4) navWrap.style.transform = '';
    lastScrollY = y;
  }, { passive: true });

})();
