import { useEffect, useRef } from 'react'

export type ScrollySlide = {
  imageUrl: string
  quote: string
  attribution?: string
}

type Props = {
  slides: ScrollySlide[]
}


/** Direct-DOM scroll handler — avoids React re-renders on every frame */
export function ScrollyHero({ slides }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imgsRef = useRef<(HTMLImageElement | null)[]>([])
  const quotesRef = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef(0)
  const reducedMotionRef = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMqChange = () => {
      reducedMotionRef.current = mq.matches
    }
    mq.addEventListener('change', onMqChange)
    return () => mq.removeEventListener('change', onMqChange)
  }, [])

  useEffect(() => {
    const n = slides.length

    const update = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const rect = wrapper.getBoundingClientRect()
      const vh = window.innerHeight
      // Each slide owns 200vh of scroll distance.
      const sectionH = vh * 2
      // How many px we've scrolled past the top of the wrapper.
      const scrolledIn = Math.max(0, -rect.top)
      const rm = reducedMotionRef.current

      for (let i = 0; i < n; i++) {
        const img = imgsRef.current[i]
        const quote = quotesRef.current[i]
        if (!img && !quote) continue

        const raw = (scrolledIn - i * sectionH) / sectionH
        const progress = Math.max(0, Math.min(1, raw))

        /* ── Image opacity ─────────────────────────────────────── */
        let imgOpacity: number
        if (raw < 0) {
          imgOpacity = i === 0 ? 1 : 0
        } else if (raw >= 1) {
          imgOpacity = i === n - 1 ? 1 : 0
        } else if (progress < 0.82) {
          imgOpacity = 1
        } else {
          // Fade out over the last 18 % of this section (unless it's the last)
          imgOpacity = i === n - 1 ? 1 : 1 - (progress - 0.82) / 0.18
        }
        if (img) img.style.opacity = String(Math.max(0, Math.min(1, imgOpacity)))

        if (!quote) continue

        /* ── Quote transform & opacity ─────────────────────────── */
        if (rm) {
          // Reduced motion: snap show/hide, no translate
          quote.style.transform = 'translateY(0)'
          const visible =
            (i === 0 && raw <= 0) || (progress > 0.1 && progress < 0.9)
          quote.style.opacity = visible ? '1' : '0'
          continue
        }

        let quoteY: number // in vh units
        let quoteOpacity: number

        if (i === 0 && raw < 0) {
          // First slide: visible and centred before any scrolling
          quoteY = 0
          quoteOpacity = 1
        } else if (raw < 0) {
          // Other slides not yet reached
          quoteY = 65
          quoteOpacity = 0
        } else if (raw >= 1) {
          // Section fully passed
          quoteY = -65
          quoteOpacity = 0
        } else if (i === 0) {
          // First slide: starts centred (Y=0) and scrolls up to -65vh
          quoteY = -progress * 65
          quoteOpacity = progress > 0.92 ? (1 - progress) / 0.08 : 1
        } else {
          // All other slides: full parallax from +65vh → -65vh
          quoteY = (0.5 - progress) * 130
          if (progress < 0.08) {
            quoteOpacity = progress / 0.08
          } else if (progress > 0.92) {
            quoteOpacity = (1 - progress) / 0.08
          } else {
            quoteOpacity = 1
          }
        }

        quote.style.transform = `translateY(${quoteY}vh)`
        quote.style.opacity = String(Math.max(0, Math.min(1, quoteOpacity)))
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [slides])

  return (
    <div
      ref={wrapperRef}
      className="scrolly-wrapper"
      style={{ height: `${slides.length * 200}dvh` }}
    >
      <div className="scrolly-sticky" aria-label="Opening quotes">
        {/* Background images — stacked, cross-fade via opacity */}
        {slides.map((slide, i) => (
          <img
            key={`img-${i}`}
            ref={el => {
              imgsRef.current[i] = el
            }}
            className="scrolly-img"
            src={slide.imageUrl}
            alt=""
            decoding="async"
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}

        {/* Quote panels — translate over the sticky layer */}
        {slides.map((slide, i) => (
          <div
            key={`quote-${i}`}
            ref={el => {
              quotesRef.current[i] = el
            }}
            className="scrolly-quote-layer"
            aria-hidden={i !== 0}
            style={
              i === 0
                ? { opacity: 1, transform: 'translateY(0)' }
                : { opacity: 0, transform: 'translateY(65vh)' }
            }
          >
            <blockquote className="quote-hero__box">
              <p className="quote-hero__text">{slide.quote}</p>
              {slide.attribution ? (
                <cite className="quote-hero__cite">{slide.attribution}</cite>
              ) : null}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}
