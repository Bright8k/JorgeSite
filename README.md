# Jorge De La Nuez — Portfolio Site

Vue 3 + Vite site for Jorge De La Nuez, football athlete and model.

## Stack

- Vue 3 (`<script setup>`)
- Vite
- Vue Router 4
- Plain CSS (no framework) — theme variables in [src/assets/main.css](src/assets/main.css)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

- `src/views/` — `HomeView`, `FootballView`, `ModelingView`, `AboutView` (bio + contact)
- `src/components/` — `NavBar`, `FooterBar`
- `src/router/` — route definitions
- `src/assets/main.css` — theme tokens, layout utilities, `.placeholder-img` (checkerboard placeholder for photos)

## Content still needed

All copy, stats, and photos are placeholders. Swap in real content in:

- `HomeView.vue` — hero tagline, quick stats
- `FootballView.vue` — position, measurables, season stats table, team history
- `ModelingView.vue` — measurements, gallery photos, campaign list
- `AboutView.vue` — bio copy, achievements, contact details

The contact form in `AboutView.vue` is UI-only — wire it to a real backend (e.g. Formspree, a serverless function) before launch.
