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

The contact form in `AboutView.vue` submits to **Netlify Forms** (see below) — no backend code required.

## Deploying to Netlify

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build settings are already defined in [netlify.toml](netlify.toml) (`npm run build`, publish `dist`) — Netlify will pick them up automatically.
4. Deploy. Netlify's build bot detects the hidden static form in `index.html` and wires up form handling automatically — submissions from the real form on the About page will show up under **Site → Forms** in the Netlify dashboard.
5. Optional: add a **Forms → Notifications** rule in Netlify to email you (or Jorge's booking address) on each new submission, and set a custom domain under **Domain settings**.

If you ever change the contact form's fields, update both the real form in `src/views/AboutView.vue` and its hidden replica in `index.html` — Netlify only detects fields present in the static HTML at build time.
