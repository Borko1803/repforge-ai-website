/* ================================================================
   LEGAL.JS — RepForge AI
   TOC scroll-spy for privacy & terms pages
================================================================ */

(function () {
  'use strict';

  const tocLinks = document.querySelectorAll('.toc-link');
  if (!tocLinks.length) return;

  const sections = Array.from(
    document.querySelectorAll('.legal-section[id]')
  );

  const navHeight = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-height')
  ) || 72;

  function updateActive() {
    const scrollY = window.scrollY + navHeight + 32;

    let current = sections[0];
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section;
      }
    });

    tocLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current?.id);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

})();
