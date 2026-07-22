'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotWrapRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineWrapRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  // Refs (not state) so mouse position updates never trigger a React
  // re-render or re-run this effect — that re-run-per-mousemove was
  // what caused the visible lag.
  const target = useRef({ x: -100, y: -100 })
  const trail = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    const onDown = () => {
      dotRef.current?.classList.add('is-clicking')
      outlineRef.current?.classList.add('is-clicking')
    }
    const onUp = () => {
      dotRef.current?.classList.remove('is-clicking')
      outlineRef.current?.classList.remove('is-clicking')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    // One single, persistent animation loop for the whole component
    // lifetime — it reads live values from refs each frame instead of
    // being torn down and rebuilt on every mousemove event.
    let animId: number
    const animate = () => {
      // Dot: tracks the real cursor 1:1, zero delay.
      if (dotWrapRef.current) {
        dotWrapRef.current.style.transform =
          `translate3d(${target.current.x - 4}px, ${target.current.y - 4}px, 0)`
      }

      // Outline: eases toward the cursor for a soft trailing effect.
      trail.current.x += (target.current.x - trail.current.x) * 0.25
      trail.current.y += (target.current.y - trail.current.y) * 0.25
      if (outlineWrapRef.current) {
        outlineWrapRef.current.style.transform =
          `translate3d(${trail.current.x - 18}px, ${trail.current.y - 18}px, 0)`
      }

      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotWrapRef} className="cursor-dot-wrap hidden md:block">
        <div ref={dotRef} className="cursor-dot" />
      </div>
      <div ref={outlineWrapRef} className="cursor-outline-wrap hidden md:block">
        <div ref={outlineRef} className="cursor-outline" />
      </div>
    </>
  )
}
