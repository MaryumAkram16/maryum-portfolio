import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// Types and deletes each phrase in a loop. Starts with the first phrase fully
// typed (so the first paint is meaningful) and returns it unchanged when the
// user prefers reduced motion. `phrases` must be a stable array.
export function useTypewriter(phrases, { typeMs = 80, deleteMs = 45, holdMs = 1800, gapMs = 400 } = {}) {
  const [reduced] = useState(prefersReducedMotion)
  const [text, setText] = useState(phrases[0])

  useEffect(() => {
    if (reduced) return undefined
    let index = 0
    let length = phrases[0].length
    let deleting = true
    let timer

    const tick = () => {
      const phrase = phrases[index]
      if (deleting) {
        length -= 1
        setText(phrase.slice(0, length))
        if (length === 0) {
          deleting = false
          index = (index + 1) % phrases.length
          timer = setTimeout(tick, gapMs)
          return
        }
        timer = setTimeout(tick, deleteMs)
      } else {
        length += 1
        setText(phrase.slice(0, length))
        if (length === phrase.length) {
          deleting = true
          timer = setTimeout(tick, holdMs)
          return
        }
        timer = setTimeout(tick, typeMs)
      }
    }

    timer = setTimeout(tick, holdMs)
    return () => clearTimeout(timer)
  }, [phrases, reduced, typeMs, deleteMs, holdMs, gapMs])

  return { text, reduced }
}
