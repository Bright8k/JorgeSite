import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { smoothScrollTo } from '../utils/smoothScroll'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Skip on the initial page load — only animate scroll for actual in-app
    // navigations, otherwise the page visibly scrolls right after it loads.
    if (from === START_LOCATION) {
      return savedPosition || undefined
    }

    return new Promise((resolve) => {
      // Let the new route's DOM settle before measuring hash targets / animating.
      setTimeout(() => {
        let targetY = 0

        if (savedPosition) {
          targetY = savedPosition.top
        } else if (to.hash) {
          const el = document.querySelector(to.hash)
          if (el) {
            targetY = el.getBoundingClientRect().top + window.scrollY
          }
        }

        smoothScrollTo(targetY).then(() => resolve(false))
      }, 60)
    })
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/football', name: 'football', component: () => import('../views/FootballView.vue') },
    { path: '/modeling', name: 'modeling', component: () => import('../views/ModelingView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  ],
})

export default router
