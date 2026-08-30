/* ================================================================
   DASHBOARD.JS — RepForge AI
   Sidebar toggle, AI coach mini-chat, session interactions
================================================================ */

(function () {
  'use strict';

  // ── Sidebar toggle (mobile) ───────────────────────────────────
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar       = document.getElementById('sidebar');

  if (sidebarToggle && sidebar) {
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,.6);
        z-index:190;opacity:0;visibility:hidden;
        transition:opacity .25s,visibility .25s;
      `;
      document.body.appendChild(overlay);
    }

    function openSidebar() {
      sidebar.classList.add('is-open');
      overlay.style.opacity   = '1';
      overlay.style.visibility = 'visible';
      sidebarToggle.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
      sidebar.classList.remove('is-open');
      overlay.style.opacity   = '0';
      overlay.style.visibility = 'hidden';
      sidebarToggle.setAttribute('aria-expanded', 'false');
    }

    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  // ── AI Coach Mini-Chat ────────────────────────────────────────
  const coachInput = document.getElementById('coachInput');
  const coachSend  = document.getElementById('coachSend');
  const chatBox    = document.getElementById('coachMiniChat');

  // Canned AI responses for demo
  const aiResponses = [
    "Good question. Based on your last 4 sessions, your chest is responding well to higher volume. I'd keep Incline Press as your primary movement for at least 2 more weeks.",
    "Your RPE trend is slightly elevated this week vs last — nothing alarming, but worth noting. Make sure you're hitting at least 7 hours of sleep tonight before tomorrow's lower session.",
    "That's a great instinct. Progressive overload on compound lifts every 7–10 days is exactly right for your training age. I'll queue the load increase for next session.",
    "Based on your HRV pattern, your best training window is typically 10am–2pm. If you're training later today, expect performance to be 5–8% below your recent average.",
    "You've logged 94% of scheduled sessions this mesocycle. That consistency is the real driver behind your strength gains — keep it up.",
    "Noted. I'll swap Romanian Deadlifts for Leg Curl + Nordic this week to reduce hamstring damage accumulation before your lower session Thursday.",
  ];

  let responseIndex = 0;

  function appendMessage(text, isUser = false) {
    const msg = document.createElement('div');
    msg.className = `mini-msg mini-msg--${isUser ? 'user' : 'ai'}`;
    msg.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function sendMessage() {
    const text = coachInput.value.trim();
    if (!text) return;

    appendMessage(text, true);
    coachInput.value = '';
    coachSend.disabled = true;

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'mini-msg mini-msg--ai typing-indicator';
    typing.innerHTML = '<p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>';
    typing.style.cssText = 'opacity:.6;';
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const response = aiResponses[responseIndex % aiResponses.length];
      responseIndex++;
      appendMessage(response, false);
      coachSend.disabled = false;
    }, 1100 + Math.random() * 600);
  }

  if (coachSend) {
    coachSend.addEventListener('click', sendMessage);
  }

  if (coachInput) {
    coachInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }

  // ── Workout Exercise Check-off ────────────────────────────────
  document.querySelectorAll('.workout-ex').forEach(ex => {
    ex.addEventListener('click', () => {
      const dot = ex.querySelector('.workout-ex__status');
      if (!dot) return;

      const isDone = dot.classList.contains('workout-ex__status--done');
      dot.classList.toggle('workout-ex__status--done', !isDone);
      dot.classList.toggle('workout-ex__status--pending', isDone);
      dot.setAttribute('aria-label', isDone ? 'Pending' : 'Complete');

      if (!isDone) {
        ex.style.opacity = '0.6';
        ex.querySelector('strong').style.textDecoration = 'line-through';
      } else {
        ex.style.opacity = '';
        ex.querySelector('strong').style.textDecoration = '';
      }
    });

    ex.style.cursor = 'pointer';
  });

  // ── Animated volume bars on load ─────────────────────────────
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const fills = document.querySelectorAll('.vmb-fill, .vol-fill');
    fills.forEach(fill => {
      const target = fill.style.width;
      fill.style.width = '0%';
      setTimeout(() => {
        fill.style.transition = 'width 1.2s cubic-bezier(0.22,1,0.36,1)';
        fill.style.width = target;
      }, 300);
    });
  }

  // ── Greeting based on time of day ────────────────────────────
  const greetingEl = document.querySelector('.topbar-title');
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour >= 5  && hour < 12) greeting = 'Good morning';
    if (hour >= 12 && hour < 17) greeting = 'Good afternoon';
    greetingEl.textContent = `${greeting}, Miloš 👋`;
  }

})();
