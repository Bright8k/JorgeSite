<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const hasEntered = ref(false)
const isScrollHidden = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/football', label: 'Football' },
  { to: '/modeling', label: 'Modeling' },
  { to: '/about', label: 'About' },
]

function closeMenu() {
  isOpen.value = false
}

let lastScrollY = 0
let ticking = false
let entryTimer = null

function updateScrollState() {
  const currentY = window.scrollY
  isScrollHidden.value = hasEntered.value && currentY > lastScrollY && currentY > 120
  if (isScrollHidden.value) {
    isOpen.value = false
  }
  lastScrollY = currentY
  ticking = false
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollState)
    ticking = true
  }
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', onScroll, { passive: true })
  entryTimer = setTimeout(() => {
    hasEntered.value = true
  }, 400)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  clearTimeout(entryTimer)
})
</script>

<template>
  <header
    class="navbar"
    :class="{ 'navbar--visible': hasEntered, 'navbar--scroll-hidden': isScrollHidden }"
  >
    <div class="container navbar__inner">
      <RouterLink to="/" class="navbar__brand" @click="closeMenu">
        Jorge De La Nuez
      </RouterLink>

      <button
        class="navbar__toggle"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
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
        <RouterLink to="/about" class="navbar__cta" @click="closeMenu">
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
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.6s ease, transform 0.4s ease;
}

.navbar--visible {
  opacity: 1;
  transform: translateY(0);
}

.navbar--scroll-hidden {
  transform: translateY(-100%);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
}

.navbar__brand {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.35rem;
  letter-spacing: 0.01em;
  color: var(--color-text);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.navbar__link {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-dim);
  transition: color 0.2s ease;
}

.navbar__link:hover,
.navbar__link.router-link-exact-active {
  color: var(--color-text);
}

.navbar__cta {
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 0.7em 1.5em;
  border: 1px solid var(--color-text);
  color: var(--color-text);
  transition: background 0.2s ease, color 0.2s ease;
}

.navbar__cta:hover {
  background: var(--color-text);
  color: var(--color-bg);
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.navbar__toggle span {
  width: 22px;
  height: 1px;
  background: var(--color-text);
}

@media (max-width: 780px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: absolute;
    top: 5rem;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    background: var(--color-bg);
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
    padding: 1.1rem 1.75rem;
    border: none;
    border-top: 1px solid var(--color-border);
  }

  .navbar__cta:hover {
    background: transparent;
    color: var(--color-text);
  }
}
</style>
