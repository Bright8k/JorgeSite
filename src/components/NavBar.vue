<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/football', label: 'Football' },
  { to: '/modeling', label: 'Modeling' },
  { to: '/about', label: 'About' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__brand" @click="closeMenu">
        Jorge <span>De La Nuez</span>
      </RouterLink>

      <button
        class="navbar__toggle"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <nav class="navbar__links" :class="{ 'is-open': isOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
        <RouterLink to="/about" class="btn btn-solid navbar__cta" @click="closeMenu">
          Book Jorge
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(11, 11, 13, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
}

.navbar__brand {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
}

.navbar__brand span {
  color: var(--color-accent);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar__link {
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  transition: color 0.2s ease;
}

.navbar__link:hover,
.navbar__link.router-link-active {
  color: var(--color-text);
}

.navbar__cta {
  padding: 0.6em 1.4em;
  font-size: 0.9rem;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.navbar__toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text);
}

@media (max-width: 780px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: 4.5rem;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--color-bg-alt);
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
  }

  .navbar__links.is-open {
    max-height: 24rem;
  }

  .navbar__link,
  .navbar__cta {
    width: 100%;
    padding: 1rem 1.5rem;
  }

  .navbar__cta {
    margin: 0.5rem 1.5rem 1rem;
    width: auto;
    justify-content: center;
  }
}
</style>
