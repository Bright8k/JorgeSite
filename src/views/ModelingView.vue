<script setup>
const measurements = [
  { label: 'Height', value: "6'1\"" },
  { label: 'Chest', value: '40"' },
  { label: 'Waist', value: '32"' },
  { label: 'Shoe', value: '11 US' },
  { label: 'Hair', value: 'Black' },
  { label: 'Eyes', value: 'Brown' },
]

const gallery = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  ratio: i % 3 === 0 ? '3 / 4' : i % 3 === 1 ? '1 / 1' : '4 / 5',
}))

const campaigns = [
  { name: 'Brand / Campaign', year: '2025', text: 'Placeholder description of the shoot or campaign.' },
  { name: 'Brand / Campaign', year: '2024', text: 'Placeholder description of the shoot or campaign.' },
  { name: 'Brand / Campaign', year: '2023', text: 'Placeholder description of the shoot or campaign.' },
]
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__inner">
      <p class="eyebrow">Modeling</p>
      <h1>In the Frame</h1>
      <p class="page-hero__lede">
        Editorial, commercial, and athletic-wear work. A portfolio built on presence,
        versatility, and a camera-ready instinct honed on the field.
      </p>
      <a href="#" class="btn btn-solid">Download Comp Card</a>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <p class="eyebrow">Comp Card</p>
      <h2>Measurements</h2>
      <div class="measurements">
        <div v-for="m in measurements" :key="m.label" class="measurements__item">
          <div class="measurements__value">{{ m.value }}</div>
          <div class="measurements__label">{{ m.label }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <p class="eyebrow">Portfolio</p>
      <h2>Gallery</h2>
      <div class="gallery">
        <div
          v-for="photo in gallery"
          :key="photo.id"
          class="placeholder-img gallery__item"
          :style="{ '--ratio': photo.ratio }"
        >
          <span>Photo {{ photo.id }}</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <p class="eyebrow">Selected Work</p>
      <h2>Campaigns</h2>
      <div class="campaigns">
        <div v-for="c in campaigns" :key="c.name + c.year" class="campaigns__item card">
          <div class="campaigns__header">
            <h3>{{ c.name }}</h3>
            <span class="tag">{{ c.year }}</span>
          </div>
          <p>{{ c.text }}</p>
        </div>
      </div>
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
  margin-bottom: 1.5rem;
}

.measurements {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
}

.measurements__value {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: var(--color-accent);
}

.measurements__label {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-top: 0.25rem;
}

.gallery {
  margin-top: 1.5rem;
  columns: 4;
  column-gap: 1.25rem;
}

.gallery__item {
  break-inside: avoid;
  margin-bottom: 1.25rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.gallery__item:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.campaigns {
  margin-top: 1.5rem;
  display: grid;
  gap: 1.25rem;
}

.campaigns__item {
  padding: 1.5rem;
}

.campaigns__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.campaigns__header h3 {
  margin: 0;
}

.campaigns__item p {
  margin: 0;
}

@media (max-width: 960px) {
  .measurements {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery {
    columns: 3;
  }
}

@media (max-width: 640px) {
  .measurements {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery {
    columns: 2;
  }
}
</style>
