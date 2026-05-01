import { useEffect, useId, useRef } from 'react'

type P1SectionProps = {
  imageUrl: string
  title: string
  subtitle: string
  imageAlt?: string
}

export function P1Section({
  imageUrl,
  title,
  subtitle,
  imageAlt = '',
}: P1SectionProps) {
  const titleId = useId()
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    const img = imgRef.current
    const content = contentRef.current
    if (!section || !img || !content) return

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Text block reveal — reversible
    const obs = new IntersectionObserver(
      ([entry]) => {
        content.classList.toggle('fade-up--visible', entry.isIntersecting)
      },
      { threshold: 0.15 },
    )
    obs.observe(content)

    if (rm) return () => obs.disconnect()

    // Scroll-linked parallax on background image
    // The image has extra height in CSS (120%) so translate never shows a gap.
    const update = () => {
      const rect = section.getBoundingClientRect()
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
    <section ref={sectionRef} className="p1" aria-labelledby={titleId}>
      <img
        ref={imgRef}
        className="p1__media"
        src={imageUrl}
        alt={imageAlt}
        decoding="async"
        aria-hidden={!imageAlt}
      />
      <div className="p1__scrim" aria-hidden />
      <div ref={contentRef} className="p1__content fade-up">
        <h2 id={titleId} className="p1__title">
          {title}
        </h2>
        <p className="p1__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
