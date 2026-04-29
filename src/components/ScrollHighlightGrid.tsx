import { useEffect, useRef, useState } from 'react'

export type GridItem = { src: string; alt: string }

type Props = { items: [GridItem, GridItem, GridItem, GridItem] }

const THRESHOLDS = Array.from({ length: 21 }, (_, k) => k / 20)

export function ScrollHighlightGrid({ items }: Props) {
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const ratios = useRef([0, 0, 0, 0])
  const cellRefs = useRef<(HTMLDivElement | null)[]>([])
  const observersRef = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    observersRef.current.forEach((o) => o.disconnect())
    observersRef.current = []

    let cancelled = false
    const frame = requestAnimationFrame(() => {
      if (cancelled) return

      items.forEach((_, i) => {
        const el = cellRefs.current[i]
        if (!el) return

        const index = i
        const obs = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              ratios.current[index] = entry.intersectionRatio
            }
            const r = ratios.current
            const max = Math.max(...r)
            const winner = r.indexOf(max)
            if (max > 0.02) setActive(winner)
          },
          {
            root: null,
            rootMargin: '-18% 0px -18% 0px',
            threshold: THRESHOLDS,
          },
        )

        obs.observe(el)
        observersRef.current.push(obs)
      })
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      observersRef.current.forEach((o) => o.disconnect())
      observersRef.current = []
    }
  }, [items])

  return (
    <div className="p4" role="group" aria-label="Highlighted image grid">
      <div className="p4__grid">
        {items.map((item, i) => {
          const isActive = i === active
          const dim = !reducedMotion && !isActive
          return (
            <div
              key={`${item.src}-${i}`}
              ref={(el) => {
                cellRefs.current[i] = el
              }}
              className={`p4__cell ${dim ? 'p4__cell--dim' : ''} ${isActive ? 'p4__cell--active' : ''}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
