import { useEffect, useState } from 'react'

// Full-screen loader shown on the first page load: counts 0 → 100% while fonts and
// images load, then slides up to reveal the site. Route changes don't show it again.
const MIN_TIME = 1500 // never finish faster than this, so the count doesn't just flash
const MAX_TIME = 7000 // give up waiting on slow assets after this

export default function Preloader() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(reduce)

  useEffect(() => {
    if (reduce) return
    const root = document.documentElement
    root.style.overflow = 'hidden'

    // Real progress: fonts + every image on the page
    let done = 0
    const imgs = Array.from(document.images).filter((img) => !img.complete)
    const total = imgs.length + 1
    const step = () => { done += 1 }
    imgs.forEach((img) => {
      img.addEventListener('load', step, { once: true })
      img.addEventListener('error', step, { once: true })
    })
    document.fonts?.ready.then(step) ?? step()

    const start = performance.now()
    let shown = 0
    let frame
    const tick = (now) => {
      const elapsed = now - start
      const real = elapsed > MAX_TIME ? 1 : done / total
      const goal = Math.min(real, elapsed / MIN_TIME) * 100
      shown += (goal - shown) * 0.12
      if (goal === 100 && shown > 99.5) shown = 100
      setCount(Math.floor(shown))
      if (shown < 100) frame = requestAnimationFrame(tick)
      else setTimeout(() => setLeaving(true), 250)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      imgs.forEach((img) => {
        img.removeEventListener('load', step)
        img.removeEventListener('error', step)
      })
      root.style.overflow = ''
    }
  }, [reduce])

  useEffect(() => {
    if (!leaving) return
    document.documentElement.style.overflow = ''
    window.scrollTo(0, 0)
    const t = setTimeout(() => setGone(true), 900)
    return () => clearTimeout(t)
  }, [leaving])

  if (gone) return null

  return (
    <div className={'preloader' + (leaving ? ' out' : '')} data-lenis-prevent role="status" aria-live="polite" aria-label={`Loading ${count}%`}>
      <div className="pl-top mono">
        <span>James Junior Baah</span>
        <span>Portfolio / 2026</span>
      </div>
      <div className="pl-bottom">
        <span className="pl-label mono">Loading</span>
        <span className="pl-count">{count}<span className="pl-pct">%</span></span>
      </div>
      <div className="pl-bar" style={{ transform: `scaleX(${count / 100})` }} />
    </div>
  )
}
