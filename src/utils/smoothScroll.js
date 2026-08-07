// Gentle ease-out glide — decelerates into the target with no overshoot.
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function smoothScrollTo(targetY, { duration = 1200 } = {}) {
  return new Promise((resolve) => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const startY = window.scrollY
    const distance = targetY - startY

    if (prefersReducedMotion || Math.abs(distance) < 1) {
      window.scrollTo({ top: targetY, left: 0, behavior: 'auto' })
      resolve()
      return
    }

    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(t)

      // behavior: 'auto' forces an immediate jump per frame — without this,
      // CSS `scroll-behavior: smooth` would fight our own animation loop.
      window.scrollTo({ top: startY + distance * eased, left: 0, behavior: 'auto' })

      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        window.scrollTo({ top: targetY, left: 0, behavior: 'auto' })
        resolve()
      }
    }

    requestAnimationFrame(step)
  })
}
