# SteelSet Website

Static marketing, product, support, and legal website for SteelSet.

Live target: `https://steelset.pages.dev/`

## Stack

- Static HTML
- CSS
- Vanilla JavaScript
- Cloudflare Pages

There is no build framework required for the public site. The repository is deployed as static files.

## Current public pages

- `index.html` — homepage
- `404.html` — not-found page
- `pages/training-system.html` — planning and Weekly Planner
- `pages/performance.html` — workout execution and progression
- `pages/recovery.html` — recovery and Visual AI
- `pages/community.html` — Community overview
- `pages/features.html` — full feature overview
- `pages/plans.html` — Free / Pro / trial information
- `pages/support.html` — support contact and troubleshooting
- `pages/privacy.html` — Privacy Policy
- `pages/terms.html` — Terms of Service
- `pages/community-guidelines.html` — Community Guidelines
- `pages/delete-account.html` — account deletion instructions and external request path

## Public identity

- Brand: **SteelSet**
- Public website: `https://steelset.pages.dev/`
- Support and account-deletion contact: `steelsetsupport@gmail.com`
- Public navigation emblem: `assets/images/steelset-emblem-transparent.png`
- Social / Open Graph image: `assets/images/steelset-social-icon.png`

## Main structure

```text
.
├── index.html
├── 404.html
├── _headers
├── robots.txt
├── sitemap.xml
├── assets/
│   └── images/
├── css/
│   ├── reset.css
│   ├── tokens.css
│   ├── components.css
│   ├── layout.css
│   ├── animations.css
│   └── mobile-accessibility.css
├── js/
│   └── nav.js
└── pages/
    ├── training-system.html
    ├── performance.html
    ├── recovery.html
    ├── community.html
    ├── features.html
    ├── plans.html
    ├── support.html
    ├── privacy.html
    ├── terms.html
    ├── community-guidelines.html
    └── delete-account.html
```

## SEO and public URLs

Canonical URLs, Open Graph URLs, `robots.txt`, and `sitemap.xml` should use:

`https://steelset.pages.dev`

When adding a new public page, update its metadata and add it to `sitemap.xml` if appropriate.

## Legal and support

The legal and support pages are production-facing content. Brand, support email, account-deletion instructions, privacy statements, and Terms copy should be changed deliberately and reviewed before deployment.

Current support address:

`steelsetsupport@gmail.com`

## Design-system compatibility note

Some internal CSS identifiers still use legacy names such as `--forge`, `--forge-dim`, `--forge-glow`, and `.btn--forge`.

These are internal implementation identifiers, not public branding. They are intentionally retained to avoid unnecessary design-system churn and should not be renamed through a blind global replacement.

## Deployment workflow

Before deployment:

1. Confirm the working tree contains only intended changes.
2. Search the public HTML and metadata for stale brand names, domains, and support addresses.
3. Verify `robots.txt` and `sitemap.xml`.
4. Open the site locally and check desktop and mobile navigation, key CTA links, legal links, images, and responsive layout.
5. Commit the validated state before deployment.

Do not use blind global replacement for future brand, legal, or URL migrations.
