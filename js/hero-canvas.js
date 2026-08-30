/* ================================================================
   HERO-CANVAS.JS — RepForge AI
   Forge particle / ember effect on hero background canvas
================================================================ */

(function () {
  'use strict';

  const canvas = document.getElementById('forgeCanvas');
  if (!canvas) return;

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let W, H, particles;
  let animId;

  // ── Resize ────────────────────────────────────────────────────
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  // ── Particle class ────────────────────────────────────────────
  class Ember {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x    = Math.random() * W;
      this.y    = initial ? Math.random() * H : H + 10;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedY = -(Math.random() * 0.8 + 0.3);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.life   = 0;
      this.maxLife = Math.random() * 200 + 150;
      this.hue    = Math.random() * 30 + 10;   // 10–40 → amber to orange
    }

    update() {
      this.x    += this.speedX + Math.sin(this.life * 0.05) * 0.3;
      this.y    += this.speedY;
      this.life += 1;
      if (this.life > this.maxLife || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      const t       = this.life / this.maxLife;
      const opacity = t < 0.1
        ? t / 0.1
        : t > 0.7 ? (1 - t) / 0.3 : 1;

      ctx.save();
      ctx.globalAlpha = opacity * 0.55;
      ctx.fillStyle   = `hsl(${this.hue}, 100%, 60%)`;
      ctx.shadowColor = `hsl(${this.hue}, 100%, 55%)`;
      ctx.shadowBlur  = this.size * 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ── Grid lines (subtle forge grid) ───────────────────────────
  function drawGrid() {
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 69, 0, 0.025)';
    ctx.lineWidth   = 1;
    const step = 80;

    for (let x = 0; x < W; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // ── Init ──────────────────────────────────────────────────────
  function init() {
    resize();
    const count = Math.min(Math.floor((W * H) / 6000), 80);
    particles = Array.from({ length: count }, () => new Ember());
  }

  // ── Render loop ───────────────────────────────────────────────
  function render() {
    ctx.clearRect(0, 0, W, H);
    drawGrid();
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    animId = requestAnimationFrame(render);
  }

  // ── Lifecycle ─────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    resize();
    // Re-clamp particle count
    const count = Math.min(Math.floor((W * H) / 6000), 80);
    if (particles.length !== count) {
      particles = Array.from({ length: count }, () => new Ember());
    }
  }, { passive: true });

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(render);
    }
  });

  init();
  render();

})();
