<script setup>
const keyStats = [
  { label: 'Position', value: 'RB' },
  { label: 'Height', value: "5'8\"" },
  { label: 'Weight', value: '195 lbs' },
  { label: '40-yd Dash', value: '4.4s' },
]

const seasonStats = [
  { season: '2025', team: 'Team Name', apps: '12', yards: '840', tds: '9' },
  { season: '2024', team: 'Team Name', apps: '14', yards: '760', tds: '7' },
]

const history = [
  { year: '2023 – Present', text: 'Placeholder team / league — starting position, key achievements.' },
  { year: '2020 – 2023', text: 'Placeholder college / academy program — honors and highlights.' },
  { year: '2016 – 2020', text: 'Placeholder youth / development program — where it started.' },
]

const gallery = [
  { id: 1, caption: 'Game Day', ratio: '3 / 4' },
  { id: 2, caption: 'Training', ratio: '4 / 5' },
  { id: 3, caption: 'Sideline', ratio: '3 / 4' },
]
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">Football</p>
      <h1>On the Field</h1>
      <p class="page-hero__lede">
        Explosive, reliable, and built for the big moments. Position,
        measurables, and season-by-season production.
      </p>
    </div>
  </section>

  <section class="media-break bleed">
    <span>Full-Bleed Action Shot</span>
  </section>

  <section class="section section-invert stat-strip">
    <div class="container stat-strip__grid">
      <div v-for="stat in keyStats" :key="stat.label" class="stat-strip__item">
        <div class="stat-strip__value">{{ stat.value }}</div>
        <div class="stat-strip__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>

  <section class="section media-copy-section">
    <div class="container media-copy">
      <div class="placeholder-img" style="--ratio: 4 / 3">
        <span>Highlight Reel</span>
      </div>
      <div>
        <p class="eyebrow">Highlight Reel</p>
        <h2>Game Film</h2>
        <p>
          Embed a highlight video here (YouTube / Hudl link) once footage is ready.
          Placeholder shown until then.
        </p>
        <a href="#" class="btn btn-solid">Watch Highlights</a>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <p class="eyebrow">Season by Season</p>
      <h2>Career Stats</h2>
      <div class="table-wrap">
        <table class="stats-table">
          <thead>
            <tr>
              <th>Season</th>
              <th>Team</th>
              <th>Appearances</th>
              <th>Yards</th>
              <th>TDs</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in seasonStats" :key="row.season">
              <td>{{ row.season }}</td>
              <td>{{ row.team }}</td>
              <td>{{ row.apps }}</td>
              <td>{{ row.yards }}</td>
              <td>{{ row.tds }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section gallery-section">
    <div class="container">
      <p class="eyebrow">In Action</p>
      <h2>Gallery</h2>
      <div class="gallery">
        <div
          v-for="photo in gallery"
          :key="photo.id"
          class="placeholder-img"
          :style="{ '--ratio': photo.ratio }"
        >
          <span>{{ photo.caption }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-invert">
    <div class="container">
      <p class="eyebrow">Career Path</p>
      <h2>Team History</h2>
      <ul class="timeline">
        <li v-for="item in history" :key="item.year" class="timeline__item">
          <span class="timeline__year">{{ item.year }}</span>
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 5rem 0 3.5rem;
}

.page-hero__lede {
  max-width: 55ch;
  font-size: 1.1rem;
}

.media-break {
  position: relative;
  height: 60vh;
  min-height: 380px;
  background: linear-gradient(200deg, var(--color-surface) 0%, var(--color-bg-alt) 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem 2.5rem;
}

.media-break span {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.stat-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-strip__item {
  text-align: center;
  padding: 0 1.5rem;
  border-left: 1px solid var(--color-border);
}

.stat-strip__item:first-child {
  border-left: none;
}

.stat-strip__value {
  font-family: var(--font-display);
  font-size: 2.5rem;
}

.stat-strip__label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-top: 0.4rem;
}

.media-copy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.table-wrap {
  overflow-x: auto;
  margin-top: 2rem;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
}

.stats-table th,
.stats-table td {
  text-align: left;
  padding: 1rem 1rem 1rem 0;
  border-bottom: 1px solid var(--color-border);
  font-weight: 300;
}

.stats-table th {
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-text-dim);
}

.gallery {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.timeline {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
}

.timeline__item {
  padding: 1.75rem 0;
  border-top: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1.5rem;
}

.timeline__item:last-child {
  border-bottom: 1px solid var(--color-border);
}

.timeline__year {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.15rem;
}

.timeline__item p {
  margin: 0;
  max-width: 60ch;
}

@media (max-width: 860px) {
  .stat-strip__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  .stat-strip__item:nth-child(3) {
    border-left: none;
  }

  .media-copy {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: 1fr 1fr;
  }

  .timeline__item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
