# ⬡ RepForge AI — Website Architecture

> AI-powered hypertrophy training platform website. Premium, dark, performance-focused design inspired by Garmin and RP Hypertrophy.

---

## 📁 Full File Architecture

```
repforge-ai/
│
├── index.html                     # Homepage — hero, features, testimonials, pricing teaser
│
├── css/
│   ├── reset.css                  # Modern CSS reset with a11y focus styles
│   ├── tokens.css                 # ALL design tokens — colors, spacing, type, shadows, easings
│   ├── components.css             # Reusable UI components — buttons, cards, nav, footer, badges
│   ├── layout.css                 # Page-level layout systems — hero, sections, grids, responsive
│   ├── animations.css             # All keyframes and animation utilities
│   └── pages/
│       ├── pricing.css            # Pricing page — billing toggle, comparison table, FAQ
│       ├── auth.css               # Signup + Login shared styles — split layout, form inputs
│       ├── features.css           # Features page — feature grid, analytics cards, library
│       ├── science.css            # Science page — principle cards, volume chart, SFR table
│       ├── athletes.css           # Athletes page — story cards, before/after, wall of love
│       ├── dashboard.css          # App dashboard — sidebar, topbar, card grid, all widgets
│       └── legal.css              # Privacy + Terms — TOC sidebar, legal content typography
│
├── js/
│   ├── nav.js                     # Sticky nav, scroll progress bar, mobile menu, smooth scroll
│   ├── hero-canvas.js             # Canvas ember/particle forge animation on hero background
│   ├── counter.js                 # Animated number counters triggered by IntersectionObserver
│   ├── scroll-reveal.js           # Scroll-reveal via IntersectionObserver + CSS transitions
│   ├── features.js                # Exercise library demo, filter/search, feature tab highlighting
│   ├── dashboard.js               # Sidebar toggle, AI coach chat demo, workout checkoff, volume bars
│   └── legal.js                   # TOC scroll-spy for privacy & terms pages
│
├── pages/
│   ├── pricing.html               # Full pricing page — 3 plans, comparison table, FAQ
│   ├── signup.html                # Registration — social auth, email form, password strength
│   ├── login.html                 # Login — social auth, email/password, demo redirect
│   ├── features.html              # Features — sticky tabs, programming/coach/analytics/library/integrations
│   ├── science.html               # Science — 3 mechanisms, volume landmarks, SFR table, AI engine
│   ├── athletes.html              # Athletes — success stories, before/after stats, wall of love
│   ├── dashboard.html             # App dashboard — full UI after login
│   ├── privacy.html               # Privacy Policy — full GDPR/CCPA compliant document
│   └── terms.html                 # Terms of Service — full legal document
│
└── assets/
    └── icons/                     # (SVG icons — inline in HTML for performance)
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--ink-black` | `#0A0A0F` | Hero bg, deepest surfaces |
| `--steel-navy` | `#1A1A2E` | Card backgrounds |
| `--dark-steel` | `#2D2D3D` | Borders, dividers |
| `--mid-steel` | `#4A4A5E` | Muted text, icons at rest |
| `--cold-white` | `#E8E8F0` | Body text |
| `--pure-white` | `#FFFFFF` | Headings, high emphasis |
| `--forge` | `#FF4500` | Primary accent — molten orange-red |
| `--forge-dim` | `#CC3700` | Hover state |
| `--forge-glow` | `rgba(255,69,0,.25)` | Ambient glow |
| `--green-gain` | `#22C55E` | Positive deltas, gains |
| `--amber-warn` | `#F59E0B` | Warnings, deload alerts |

### Typography
| Role | Font | Usage |
|------|------|-------|
| Display | `Bebas Neue` | All headings, hero, stats |
| Body | `Inter` | All prose, UI labels |
| Mono | `JetBrains Mono` | Data, metrics, eyebrows, code |

### Spacing Scale
8px base — `--space-1` (4px) through `--space-32` (128px)

---

## 📄 Pages

### `index.html` — Homepage
- **Hero** — Full-viewport with canvas particle animation, animated headline, proof stats counters
- **Logos strip** — Auto-scrolling marquee of press mentions
- **How it Works** — 4-step card grid
- **App Showcase** — 3 alternating feature highlights with mock app screens
- **Science** — Grid + animated muscle map visual
- **Testimonials** — Featured + 2 supporting testimonial cards
- **Pricing Teaser** — 3-column pricing cards
- **Final CTA** — Forge-glow call to action
- **Footer** — Full 4-column footer with social links

### `pages/pricing.html` — Pricing
- Billing toggle (monthly ↔ annual with JS price swap)
- 3 detailed plan cards with full feature lists
- Full feature comparison table
- FAQ with `<details>` accordion

### `pages/signup.html` — Sign Up
- Split layout: decorative left panel + form right panel
- Social auth buttons (Google, GitHub)
- Full form with real-time password strength meter
- Form validation with error states

### `pages/login.html` — Log In
- Same split layout as signup
- Simplified form with "forgot password" link
- Demo redirect to dashboard on submit

### `pages/features.html` — Features
- Sticky internal tab navigation (Programming / AI Coach / Analytics / Library / Integrations)
- Adaptive scroll highlight on tabs
- Interactive exercise library with search + category filters
- Live SFR scores, equipment tags
- Analytics card demos with SVG charts
- Consistency heatmap generated by JS
- Integrations grid with connected states

### `pages/science.html` — The Science
- 3 hypertrophy mechanism cards with real citations
- MEV / MAV / MRV volume landmark explanations + bar chart visual
- SFR scoring table with color-coded scores
- 4-step AI engine diagram

### `pages/athletes.html` — Athletes
- Stats bar with aggregate numbers
- 6 athlete story cards (1 featured with before/after stats, 5 regular)
- Wall of love — 6 mini quote cards
- All stories have real deltas and training context

### `pages/dashboard.html` — App Dashboard
Full SaaS app UI:
- **Sidebar** — Logo, navigation with badges/dots, user profile, mesocycle progress bar
- **Top bar** — Greeting, wearable data (HRV + sleep), notification bell
- **Today's Workout** — Clickable exercise checklist with load notes, volume bar
- **AI Coach** — Live mini-chat with canned AI responses, send on Enter
- **Strength Delta** — SVG area chart + 3 lift stats
- **Weekly Volume** — Per-muscle animated bar chart
- **Readiness** — SVG gauge + HRV/sleep/fatigue breakdown
- **Mesocycle Progress** — Visual week-by-week progress bars (MEV → MRV → Deload)
- **Recent Sessions** — Last 4 sessions with duration, sets, RPE, PR badges

### `pages/privacy.html` — Privacy Policy
- Sticky TOC sidebar with scroll-spy highlighting
- Full GDPR/CCPA compliant policy
- 11 sections covering collection, use, rights, security, cookies, children

### `pages/terms.html` — Terms of Service
- Same sticky TOC layout
- Full ToS with health disclaimer, subscription/refund policy, arbitration clause

---

## ⚙️ JavaScript Modules

### `nav.js`
- Scroll progress bar (CSS `scaleX` transform)
- `nav--scrolled` class at 60px scroll
- Active link highlighting via IntersectionObserver on sections
- Mobile drawer open/close with overlay
- Smooth scroll to anchor with nav height offset

### `hero-canvas.js`
- Canvas 2D particle system — ember/fire particles rising from bottom
- Subtle grid lines at `rgba(255,69,0,0.025)` opacity
- Particle count scales with viewport area (max 80)
- Respects `prefers-reduced-motion`
- Pauses on `visibilitychange` to save battery

### `counter.js`
- Eased number animation (cubic ease-out) triggered by IntersectionObserver
- Formats numbers: `127000` → `127K`, `2400000` → `2.4M`
- Duration: 2000ms
- Respects `prefers-reduced-motion`

### `scroll-reveal.js`
- Adds `.is-visible` to `[data-reveal]` elements on intersection
- `[data-reveal-delay="1/2/3/4"]` for staggered reveals
- Immediately reveals all at once if reduced motion preferred

### `features.js`
- Exercise library — filter by muscle group + text search, renders cards
- 18 exercises with SFR scores, muscle groups, equipment tags
- Consistency heatmap generation (84 cells, randomized realistic pattern)
- Feature tab active state via IntersectionObserver on sections

### `dashboard.js`
- Sidebar toggle with overlay (mobile)
- AI Coach mini-chat — Enter to send, typing indicator, 6 canned AI responses
- Workout exercise click-to-complete with visual state
- Volume bars animate from 0 on load
- Greeting updates based on time of day

### `legal.js`
- TOC scroll-spy — highlights current section as user scrolls
- Accounts for nav height offset

---

## 🔁 User Flow

```
Homepage (index.html)
    ├─ → How It Works (scroll)
    ├─ → Features (features.html)
    │       └─ Sticky tabs: Programming / Coach / Analytics / Library / Integrations
    ├─ → The Science (science.html)
    ├─ → Pricing (pricing.html)
    │       └─ Monthly ↔ Annual toggle
    ├─ → Athletes (athletes.html)
    │
    ├─ Sign Up (signup.html)  ←── All CTAs
    │       └─ → Dashboard (dashboard.html)
    └─ Log In (login.html)
            └─ → Dashboard (dashboard.html)

Dashboard (dashboard.html)
    ├─ Today's Workout (interactive checklist)
    ├─ AI Coach (live chat widget)
    ├─ Strength Delta (SVG chart)
    ├─ Weekly Volume (animated bars)
    ├─ Readiness (gauge + wearable data)
    ├─ Mesocycle Progress (visual timeline)
    └─ Recent Sessions (history list)

Footer links:
    ├─ Privacy Policy (privacy.html)
    └─ Terms of Service (terms.html)
```

---

## 🚀 Quick Start

```bash
# No build system needed — pure HTML/CSS/JS
# Just open in browser or serve with any static server:

npx serve .
# or
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## ♿ Accessibility

- All interactive elements have `aria-label` or visible labels
- `role="list"` on navigation lists (VoiceOver Safari fix)
- `role="dialog"` + `aria-modal` on mobile nav drawer
- Focus-visible ring using `:focus-visible` (keyboard only)
- `prefers-reduced-motion` respected in all animations
- `aria-current="page"` on active nav links in dashboard
- Color contrast: all text meets WCAG AA (4.5:1 minimum)
- Semantic HTML throughout (`<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`)

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Desktop | ≥ 1024px | Full layout, sidebar nav |
| Tablet | 640–1023px | Stacked showcases, hidden nav links, burger menu |
| Mobile | < 640px | Single column, mobile nav drawer, simplified topbar |

---

## 🧩 Key Components

| Component | Location | Description |
|-----------|----------|-------------|
| `.btn` | `components.css` | Button system — primary/ghost/outline/forge variants, sm/md/lg/xl sizes |
| `.nav-wrapper` | `components.css` | Sticky glassmorphism nav with progress bar |
| `.step-card` | `components.css` | How It Works cards with forge hover glow |
| `.mock-screen` | `components.css` | Fake app UI screenshots with scan-line animation |
| `.testi-card` | `components.css` | Testimonial cards with featured variant |
| `.pricing-card` | `components.css` | Pricing cards with featured shimmer animation |
| `.dash-card` | `dashboard.css` | Dashboard widget base with 12-col grid placement |
| `.sidebar` | `dashboard.css` | Full app sidebar with user footer |
| `.legal-layout` | `legal.css` | TOC sidebar + content grid for legal pages |

---

*Built for RepForge AI · © 2025 RepForge AI Inc.*
