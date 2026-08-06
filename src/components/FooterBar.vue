<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        Jorge <span>De La Nuez</span>
        <p>Football athlete &amp; model.</p>
      </div>

      <nav class="footer__links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/football">Football</RouterLink>
        <RouterLink to="/modeling">Modeling</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <div class="footer__social">
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="TikTok">TikTok</a>
        <a href="#" aria-label="X / Twitter">X</a>
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
  background: var(--color-bg-alt);
  padding: 3.5rem 0 1.5rem;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
}

.footer__brand {
  font-family: var(--font-display);
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.footer__brand span {
  color: var(--color-accent);
}

.footer__brand p {
  font-family: var(--font-body);
  text-transform: none;
  letter-spacing: normal;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

.footer__links,
.footer__social {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--color-text-dim);
}

.footer__links a:hover,
.footer__social a:hover {
  color: var(--color-text);
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  margin: 0;
}

@media (max-width: 700px) {
  .footer__inner {
    grid-template-columns: 1fr;
  }
}
</style>
