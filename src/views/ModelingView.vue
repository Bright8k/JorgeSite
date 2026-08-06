<script setup>
const measurements = [
  { label: 'Height', value: "5'8\"" },
  { label: 'Chest', value: '40"' },
  { label: 'Waist', value: '32"' },
  { label: 'Shoe', value: '11 US' },
  { label: 'Hair', value: 'Black' },
  { label: 'Eyes', value: 'Brown' },
]

const gallery = Array.from({ length: 9 }, (_, i) => ({
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

  <section class="media-break bleed">
    <span>Full-Bleed Editorial Shot</span>
  </section>

  <section class="section section-invert">
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
        <div v-for="c in campaigns" :key="c.name + c.year" class="campaigns__item">
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
  padding: 5rem 0 3.5rem;
}

.page-hero__lede {
  max-width: 55ch;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.media-break {
  position: relative;
  height: 75vh;
  min-height: 460px;
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

.measurements {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 2rem;
  text-align: center;
}

.measurements__item {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.measurements__item:first-child {
  border-left: none;
}

.measurements__value {
  font-family: var(--font-display);
  font-size: 1.9rem;
}

.measurements__label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  margin-top: 0.35rem;
}

.gallery {
  margin-top: 2rem;
  columns: 3;
  column-gap: 1.5rem;
}

.gallery__item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  transition: opacity 0.25s ease;
}

.gallery__item:hover {
  opacity: 0.7;
}

.campaigns {
  margin-top: 2rem;
  display: grid;
  gap: 0;
}

.campaigns__item {
  padding: 1.75rem 0;
  border-top: 1px solid var(--color-border);
}

.campaigns__item:last-child {
  border-bottom: 1px solid var(--color-border);
}

.campaigns__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.campaigns__header h3 {
  margin: 0;
}

.campaigns__item p {
  margin: 0;
  max-width: 60ch;
}

@media (max-width: 960px) {
  .measurements {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.5rem;
  }

  .measurements__item:nth-child(4) {
    border-left: none;
  }

  .gallery {
    columns: 2;
  }
}

@media (max-width: 640px) {
  .measurements {
    grid-template-columns: repeat(2, 1fr);
  }

  .measurements__item:nth-child(odd) {
    border-left: none;
  }
}
</style>
