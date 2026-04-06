# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static showcase website for "Black & White by Joel Soto", a lifestyle brand selling jewelry and apparel. No build tools or package manager.

**Live URL:** `https://dajozu2513.github.io/black-and-white-joel`

## Development

No build or compile step. Open `index.html` directly in a browser, or serve locally:

```bash
# Node (custom server — handles all asset paths correctly)
node .claude/server.js

# npx serve (serves from project root)
npx serve . -l 8080
```

The Node server (`.claude/server.js`) serves the project root on port 8081 and is the preferred option since it resolves all relative paths correctly.

## Architecture

All HTML, CSS, and JavaScript are currently embedded in a single `index.html` (~30KB) at the project root. The `css/` and `js/` folders exist for a planned split.

**File structure:**
```
index.html               — entire site (HTML + CSS + JS)
css/                     — planned: extracted stylesheet
js/                      — planned: extracted scripts
pictures/
  background/chain.JPG  — parallax background used in hero + separator
  products/             — 9 product images (Void, Star, Monolith, Static,
                          Together, Meridian, Heart, Echo, Snake)
```

**HTML structure (top-to-bottom):**
1. `<header>` — Fixed nav; gains `.scrolled` class via JS when `scrollY > 60px`
2. `#hero` — Full-viewport hero; `chain.JPG` background via `.hero-bg`
3. Pillars section — Three brand statements with `.observe-fade` scroll animation
4. Separator — Parallax divider; also uses `chain.JPG`
5. `#coleccion` — 9-slide product carousel with product modal
6. `<footer>` — Brand name and copyright

**JavaScript (bottom of `index.html`):**
- `updateParallax()` — background-position offsets at 30–35% scroll speed
- `goTo(n)` — carousel navigation (click, dot nav, touch swipe 40px threshold, keyboard arrows)
- `openModal(name, imgSrc)` — product detail modal with description + WhatsApp CTA
- `IntersectionObserver` on `.observe-fade` elements (12% threshold) for fade-in

**CSS custom properties** (defined on `:root`):
- `--bg`, `--surface`, `--ink`, `--ink-mid`, `--ink-light`, `--border`, `--radius`
- Fonts: Cormorant Garamond (display) + Montserrat (body) via Google Fonts

## Content

- Language: Spanish (`lang="es"`, locale `es_CR`)
- 9 products: Void, Star, Monolith, Static, Together, Meridian, Heart, Echo, Snake
- Each product has a unique poetic description stored in the `PRODUCTS` JS object
- WhatsApp CTA links to `wa.me/50660062513` with a pre-filled message per product
- Clicking a product image or name opens a modal with image, description, and WhatsApp button
