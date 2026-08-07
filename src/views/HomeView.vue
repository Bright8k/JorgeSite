<template>
  <section class="hero">
    <div class="hero__media">
      <span>Hero Photo — Full Bleed Action Shot</span>
    </div>
  </section>

  <section class="section section-invert intro">
    <div class="container intro__copy">
      <p class="eyebrow">Athlete &amp; Model</p>
      <h1>Jorge De La Nuez</h1>
      <p class="intro__lede">
        Competing on the field, commanding the frame. Discipline, presence,
        and versatility — across football and fashion.
      </p>
      <div class="intro__actions">
        <RouterLink to="/football" class="btn btn-solid">Football Profile</RouterLink>
        <RouterLink to="/modeling" class="btn">Modeling Portfolio</RouterLink>
      </div>
    </div>
  </section>

  <section class="media-break bleed">
    <span>Off the Field — Editorial Still</span>
  </section>

  <section class="section teaser">
    <div class="container">
      <p class="eyebrow">Explore</p>
      <h2>Two Disciplines</h2>
    </div>
    <div class="teaser__grid">
      <RouterLink to="/football" class="teaser__card">
        <div class="teaser__media">
          <span>Football</span>
        </div>
        <div class="teaser__body">
          <p class="eyebrow">On the field</p>
          <h3>Football</h3>
          <p>Stats, highlights, and season history.</p>
        </div>
      </RouterLink>

      <RouterLink to="/modeling" class="teaser__card">
        <div class="teaser__media">
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
  position: relative;
  height: 100vh;
  min-height: 640px;
  overflow: hidden;
}

.hero__media {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, var(--color-surface) 0%, var(--color-bg-alt) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2rem;
}

.hero__media span {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.intro__copy h1 {
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
}

.intro__lede {
  max-width: 48ch;
  font-size: 1.1rem;
}

.intro__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.media-break {
  position: relative;
  height: 70vh;
  min-height: 420px;
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

.teaser {
  padding-bottom: 0;
}

.teaser .container {
  margin-bottom: 3rem;
}

.teaser__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.teaser__card {
  position: relative;
  display: block;
  overflow: hidden;
}

.teaser__media {
  aspect-ratio: 3 / 4;
  background: linear-gradient(160deg, var(--color-surface) 0%, var(--color-bg-alt) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1.5rem;
  transition: opacity 0.3s ease;
}

.teaser__media span {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.teaser__card:hover .teaser__media {
  opacity: 0.7;
}

.teaser__body {
  padding: 2rem 0.5rem;
  border-top: 1px solid var(--color-border);
  margin-top: 1.5rem;
}

.teaser__body h3 {
  margin: 0 0 0.4rem;
}

.teaser__body p:last-child {
  margin-bottom: 0;
}

@media (max-width: 860px) {
  .teaser__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
