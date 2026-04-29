import { useEffect, useRef, useState } from 'react'

type QuoteHeroProps = {
  imageUrl: string
  quote: string
  attribution?: string
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t))
}

function easeInBlackToImage(t: number): number {
  const u = clamp01(t)
  return u * u * u
}

function easeImageToBlack(t: number): number {
  const u = clamp01(t)
  return 1 - (1 - u) ** 3
}

/** Scroll-linked opacity: photo dissolves through #000 at section edges */
function imageOpacityForViewport(rect: DOMRect, vh: number): number {
  const fade = Math.max(280, vh * 0.72)
  let o = 1

  if (rect.top > vh - fade && rect.top <= vh) {
    const linear = (vh - rect.top) / fade
    o = Math.min(o, easeInBlackToImage(linear))
  }

  if (rect.bottom < fade && rect.bottom >= 0) {
    const linear = rect.bottom / fade
    o = Math.min(o, easeImageToBlack(linear))
  }

  return clamp01(o)
}

export function QuoteHero({ imageUrl, quote, attribution }: QuoteHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [layerOffset, setLayerOffset] = useState(0)
  const [bgOpacity, setBgOpacity] = useState(1)
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    let raf = 0

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const sh = rect.height

      setBgOpacity(imageOpacityForViewport(rect, vh))

      if (reducedMotion || sh < 1) {
        setLayerOffset(0)
        return
      }

      const raw = (vh - rect.top) / (vh + sh)
      const progress = Math.max(0, Math.min(1, raw))
      const range = Math.min(80, vh * 0.1)
      setLayerOffset((progress - 0.5) * 2 * range)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reducedMotion])

  const layerStyle = reducedMotion
    ? undefined
    : { transform: `translate3d(0, ${layerOffset}px, 0)` }

  const stickyBgStyle = { opacity: bgOpacity }

  return (
    <section ref={sectionRef} className="quote-hero" aria-label="Opening quote">
      <div className="quote-hero__scroll">
        <div className="quote-hero__sticky-bg" style={stickyBgStyle} aria-hidden>
          <img
            className="quote-hero__media"
            src={imageUrl}
            alt=""
            decoding="async"
          />
        </div>
        <div className="quote-hero__layer" style={layerStyle}>
          <blockquote className="quote-hero__box">
            <p className="quote-hero__text">{quote}</p>
            {attribution ? (
              <cite className="quote-hero__cite">{attribution}</cite>
            ) : null}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
