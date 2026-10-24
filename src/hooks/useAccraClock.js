import { useEffect, useState } from 'react'

function accraTime() {
  try {
    return new Date().toLocaleTimeString('en-GB', { timeZone: 'Africa/Accra', hour: '2-digit', minute: '2-digit' })
  } catch {
    return '--:--'
  }
}

// Current time in Accra (HH:MM), refreshed every `intervalMs`.
// Also returns a tick counter for simple timed animations.
export default function useAccraClock(intervalMs = 1000) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])
  return { clock: accraTime(), tick }
}
