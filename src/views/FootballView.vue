<script setup>
const keyStats = [
  { label: 'Position', value: 'WR' },
  { label: 'Height', value: "6'1\"" },
  { label: 'Weight', value: '195 lbs' },
  { label: ' 40-yd Dash', value: '4.4s' },
]

const seasonStats = [
  { season: '2025', team: 'Team Name', apps: '12', yards: '840', tds: '9' },
  { season: '2024', team: 'Team Name', apps: '14', yards: '760', tds: '7' },
  { season: '2023', team: 'Team Name', apps: '11', yards: '605', tds: '5' },
]

const history = [
  { year: '2023 – Present', text: 'Placeholder team / league — starting position, key achievements.' },
  { year: '2020 – 2023', text: 'Placeholder college / academy program — honors and highlights.' },
  { year: '2016 – 2020', text: 'Placeholder youth / development program — where it started.' },
]
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">Football</p>
      <h1>On the Field</h1>
      <p class="page-hero__lede">
        Explosive, reliable, and built for the big moments. Here's a look at Jorge's
        game — position, measurables, and season-by-season production.
      </p>
    </div>
  </section>

  <section class="section stat-strip section-alt">
    <div class="container stat-strip__grid">
      <div v-for="stat in keyStats" :key="stat.label" class="stat-strip__item">
        <div class="stat-strip__value">{{ stat.value }}</div>
        <div class="stat-strip__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>

  <section class="section">
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

  <section class="section">
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
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--color-border);
}

.page-hero__lede {
  max-width: 55ch;
  font-size: 1.1rem;
}

.stat-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-strip__value {
  font-family: var(--font-display);
  font-size: 2.25rem;
  color: var(--color-accent);
}

.stat-strip__label {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-top: 0.25rem;
}

.media-copy {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.table-wrap {
  overflow-x: auto;
  margin-top: 1.5rem;
}

.stats-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
}

.stats-table th,
.stats-table td {
  text-align: left;
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--color-border);
}

.stats-table th {
  font-family: var(--font-display);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: var(--color-text-dim);
}

.timeline {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  border-left: 2px solid var(--color-border);
}

.timeline__item {
  position: relative;
  padding: 0 0 2rem 1.75rem;
}

.timeline__item::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
}

.timeline__year {
  display: block;
  font-family: var(--font-display);
  letter-spacing: 0.05em;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.timeline__item p {
  margin: 0;
  max-width: 60ch;
}

@media (max-width: 860px) {
  .stat-strip__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .media-copy {
    grid-template-columns: 1fr;
  }
}
</style>
