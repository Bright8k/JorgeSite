<script setup>
const year = new Date().getFullYear()

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/the_j.d23' },
  { label: 'TikTok', href: '#' },
  { label: 'X', href: '#' },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <p class="footer__wordmark">Jorge De La Nuez</p>
        <p class="footer__tagline">Football athlete &amp; model</p>
      </div>

      <nav class="footer__links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/football">Football</RouterLink>
        <RouterLink to="/modeling">Modeling</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <div class="footer__social">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :target="social.href !== '#' ? '_blank' : undefined"
          :rel="social.href !== '#' ? 'noopener' : undefined"
          :aria-label="social.label"
        >
          {{ social.label }}
        </a>
      </div>
    </div>

    <div class="container">
      <p class="footer__copy">&copy; {{ year }} Jorge De La Nuez. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: 4.5rem 0 2rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
}

.footer__wordmark {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  margin: 0;
}

.footer__tagline {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  margin-top: 0.5rem;
}

.footer__links,
.footer__social {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-dim);
}

.footer__links a:hover,
.footer__social a:hover {
  color: var(--color-text);
}

.footer__copy {
  font-size: 0.78rem;
  color: var(--color-text-dim);
  margin: 0;
}

@media (max-width: 700px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
