// Soft "slingshot" easing: eases in, slightly overshoots the target, then settles back.
// A gentler version of the classic easeOutBack curve (lower overshoot constant)
// so it reads as smooth momentum rather than a hard bounce.
function easeOutBack(t) {
  const c1 = 0.65
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

export function smoothScrollTo(targetY, { duration = 850 } = {}) {
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
      const eased = easeOutBack(t)

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
