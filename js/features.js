/* ================================================================
   FEATURES.JS — RepForge AI
   Exercise library demo, feature tab active states, heatmap gen
================================================================ */

(function () {
  'use strict';

  // ── Exercise Library Demo Data ────────────────────────────────
  const exercises = [
    { name: 'Incline Dumbbell Press',    muscle: 'Upper Chest',          sfr: 9.1, equip: 'Dumbbells',   category: 'chest' },
    { name: 'Cable Fly (High-to-Low)',   muscle: 'Lower Chest',          sfr: 8.7, equip: 'Cable',        category: 'chest' },
    { name: 'Barbell Bench Press',       muscle: 'Chest, Triceps',       sfr: 8.2, equip: 'Barbell',      category: 'chest' },
    { name: 'Chest Dip',                 muscle: 'Lower Chest',          sfr: 7.8, equip: 'Bodyweight',   category: 'chest' },
    { name: 'Seated Cable Row',          muscle: 'Mid Back, Rhomboids',  sfr: 9.3, equip: 'Cable',        category: 'back'  },
    { name: 'Pull-Up',                   muscle: 'Lats, Biceps',         sfr: 8.9, equip: 'Bodyweight',   category: 'back'  },
    { name: 'Lat Pulldown',              muscle: 'Lats',                 sfr: 8.6, equip: 'Cable',        category: 'back'  },
    { name: 'Chest-Supported Row',       muscle: 'Upper Back',           sfr: 9.0, equip: 'Dumbbells',   category: 'back'  },
    { name: 'Romanian Deadlift',         muscle: 'Hamstrings, Glutes',   sfr: 9.4, equip: 'Barbell',      category: 'legs'  },
    { name: 'Leg Press',                 muscle: 'Quads, Glutes',        sfr: 8.5, equip: 'Machine',      category: 'legs'  },
    { name: 'Hack Squat',                muscle: 'Quads',                sfr: 9.1, equip: 'Machine',      category: 'legs'  },
    { name: 'Nordic Hamstring Curl',     muscle: 'Hamstrings',           sfr: 8.8, equip: 'Bodyweight',   category: 'legs'  },
    { name: 'Lateral Raise (Cable)',     muscle: 'Side Delts',           sfr: 9.2, equip: 'Cable',        category: 'shoulders' },
    { name: 'Seated DB Shoulder Press',  muscle: 'Front & Side Delts',   sfr: 8.4, equip: 'Dumbbells',   category: 'shoulders' },
    { name: 'Face Pull',                 muscle: 'Rear Delts, Rotators', sfr: 9.0, equip: 'Cable',        category: 'shoulders' },
    { name: 'Incline DB Curl',           muscle: 'Long Head Biceps',     sfr: 9.3, equip: 'Dumbbells',   category: 'arms'  },
    { name: 'Overhead Tricep Extension', muscle: 'Long Head Triceps',    sfr: 9.1, equip: 'Cable',        category: 'arms'  },
    { name: 'Hammer Curl',               muscle: 'Brachialis, Biceps',   sfr: 8.6, equip: 'Dumbbells',   category: 'arms'  },
  ];

  let activeFilter = 'all';
  let searchQuery  = '';

  function renderExercises() {
    const list = document.getElementById('exerciseList');
    if (!list) return;

    const filtered = exercises.filter(ex => {
      const matchesFilter   = activeFilter === 'all' || ex.category === activeFilter;
      const matchesSearch   = ex.name.toLowerCase().includes(searchQuery) ||
                              ex.muscle.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      list.innerHTML = `<p style="color:var(--mid-steel);font-size:var(--text-sm);padding:var(--space-6) 0;">No exercises found. Try a different search or filter.</p>`;
      return;
    }

    list.innerHTML = filtered.map(ex => `
      <div class="exercise-item" role="listitem">
        <div>
          <div class="exercise-item__name">${ex.name}</div>
          <div class="exercise-item__muscle">${ex.muscle}</div>
        </div>
        <div style="text-align:right">
          <div class="exercise-item__sfr">${ex.sfr}</div>
          <div class="exercise-item__sfr-label">SFR Score</div>
        </div>
        <div class="exercise-item__equip">${ex.equip}</div>
      </div>
    `).join('');
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      activeFilter = btn.dataset.filter;
      renderExercises();
    });
  });

  // Search input
  const searchInput = document.getElementById('exerciseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderExercises();
    });
  }

  renderExercises();

  // ── Consistency Heatmap ───────────────────────────────────────
  function buildHeatmap() {
    const grid = document.getElementById('heatmapGrid');
    if (!grid) return;

    // 12 weeks × 7 days
    const totalDays = 84;
    const cells = [];
    for (let i = 0; i < totalDays; i++) {
      // Simulate realistic training pattern (4-5 days/week)
      const week = Math.floor(i / 7);
      const day  = i % 7;
      let level  = 0;
      if (day < 5 && Math.random() > 0.25) level = Math.floor(Math.random() * 3) + 1;
      if (day >= 5 && Math.random() > 0.7) level = 1;
      cells.push(level);
    }

    grid.innerHTML = cells.map(level =>
      `<div class="heatmap-cell" data-level="${level}" aria-hidden="true"></div>`
    ).join('');
  }

  buildHeatmap();

  // ── Feature Tabs Active Scroll Highlight ─────────────────────
  const featureSections = document.querySelectorAll('.feature-section[id]');
  const featureTabs     = document.querySelectorAll('.feature-tab');

  if (featureSections.length && featureTabs.length) {
    const tabObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            featureTabs.forEach(tab => {
              tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.4, rootMargin: `-${72 + 48}px 0px 0px 0px` }
    );

    featureSections.forEach(s => tabObserver.observe(s));
  }

})();
