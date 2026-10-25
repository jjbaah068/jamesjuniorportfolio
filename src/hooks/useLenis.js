import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Smooth scrolling for the whole site. Skipped for people who prefer reduced motion.
export default function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.1, anchors: true })
    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
