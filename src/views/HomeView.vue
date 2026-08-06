<script setup>
const stats = [
  { label: 'Position', value: 'WR' },
  { label: 'Seasons', value: '5+' },
  { label: 'Height', value: "6'1\"" },
  { label: 'Agency', value: 'TBD' },
]
</script>

<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="eyebrow">Athlete &amp; Model</p>
        <h1>Jorge<br />De La Nuez</h1>
        <p class="hero__lede">
          Competing on the field, commanding the frame. Jorge De La Nuez brings
          discipline, presence, and versatility to football and fashion alike.
        </p>
        <div class="hero__actions">
          <RouterLink to="/football" class="btn btn-solid">Football Profile</RouterLink>
          <RouterLink to="/modeling" class="btn">Modeling Portfolio</RouterLink>
        </div>
      </div>

      <div class="hero__media placeholder-img" style="--ratio: 4 / 5">
        <span>Hero Photo</span>
      </div>
    </div>
  </section>

  <section class="stats section-alt">
    <div class="container stats__grid">
      <div v-for="stat in stats" :key="stat.label" class="stats__item">
        <div class="stats__value">{{ stat.value }}</div>
        <div class="stats__label">{{ stat.label }}</div>
      </div>
    </div>
  </section>

  <section class="section teaser">
    <div class="container teaser__grid">
      <RouterLink to="/football" class="teaser__card card">
        <div class="placeholder-img" style="--ratio: 16 / 10">
          <span>Football</span>
        </div>
        <div class="teaser__body">
          <p class="eyebrow">On the field</p>
          <h3>Football</h3>
          <p>Stats, highlights, and season history.</p>
        </div>
      </RouterLink>

      <RouterLink to="/modeling" class="teaser__card card">
        <div class="placeholder-img" style="--ratio: 16 / 10">
          <span>Modeling</span>
        </div>
        <div class="teaser__body">
          <p class="eyebrow">In the frame</p>
          <h3>Modeling</h3>
          <p>Portfolio, comp card, and past campaigns.</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4.5rem 0 3rem;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

.hero__lede {
  max-width: 40ch;
  font-size: 1.1rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stats__value {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--color-accent);
}

.stats__label {
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-top: 0.25rem;
}

.teaser__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.teaser__card {
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.teaser__card:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.teaser__body {
  padding: 1.5rem;
}

.teaser__body p:last-child {
  margin-bottom: 0;
}

@media (max-width: 860px) {
  .hero__inner,
  .teaser__grid {
    grid-template-columns: 1fr;
  }

  .stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
