import { useEffect, useRef } from 'react'

type P2SectionProps = {
  imageUrl: string
  caption: string
  imageAlt?: string
}

export function P2Section({
  imageUrl,
  caption,
  imageAlt = '',
}: P2SectionProps) {
  const figureRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const captionRef = useRef<HTMLElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const figure = figureRef.current
    const img = imgRef.current
    const cap = captionRef.current
    if (!figure || !img || !cap) return

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Caption slides in from the left — reversible
    const obs = new IntersectionObserver(
      ([entry]) => {
        cap.classList.toggle('slide-left--visible', entry.isIntersecting)
      },
      { threshold: 0.2 },
    )
    obs.observe(cap)

    if (rm) return () => obs.disconnect()

    // Scroll-linked parallax on the full-bleed image
    const update = () => {
      const rect = figure.getBoundingClientRect()
      const vh = window.innerHeight
      const offset = (rect.top + rect.height / 2 - vh / 2) * 0.08
      img.style.transform = `translateY(${offset}px)`
    }

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      obs.disconnect()
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <figure ref={figureRef} className="p2">
      <img
        ref={imgRef}
        className="p2__media"
        src={imageUrl}
        alt={imageAlt}
        decoding="async"
        aria-hidden={!imageAlt}
      />
      <figcaption ref={captionRef} className="p2__caption slide-left">
        {caption}
      </figcaption>
    </figure>
  )
}
