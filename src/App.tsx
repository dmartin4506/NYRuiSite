import { useEffect, useRef, type ReactNode } from 'react'
import { ArticleColumn } from './components/ArticleColumn'
import { P1Section } from './components/P1Section'
import { P2Section } from './components/P2Section'
import { ScrollyHero, type ScrollySlide } from './components/ScrollyHero'
import { ScrollHighlightGrid, type GridItem } from './components/ScrollHighlightGrid'
import {
  beforeGrid,
  closingLong,
  followShort,
  images,
  introWide,
  narrowLong,
  overallTitle,
  p1SectionA,
  p1SectionB,
  p2Caption,
  quotes,
  toParagraphs,
} from './content/articleCopy'

const heroSlides: ScrollySlide[] = [
  { imageUrl: images.quote1, quote: quotes[0] },
  { imageUrl: images.quote2, quote: quotes[1] },
  { imageUrl: images.quote3, quote: quotes[2] },
]

const gridItems: [GridItem, GridItem, GridItem, GridItem] = [
  { src: images.grid[0], alt: 'Panel one: placeholder street scene' },
  { src: images.grid[1], alt: 'Panel two: placeholder interior' },
  { src: images.grid[2], alt: 'Panel three: placeholder waterfront' },
  { src: images.grid[3], alt: 'Panel four: placeholder skyline detail' },
]

/** Paragraph that fades up into view when it crosses the viewport */
function FadeP({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('fade-up--visible', entry.isIntersecting)
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <p ref={ref} className="fade-up">
      {children}
    </p>
  )
}

/** Headline that reveals word-by-word with a stagger when it enters the viewport */
function KineticTitle({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('kt--visible')
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('kt--visible', entry.isIntersecting)
      },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <h1 ref={ref} className="overall-title kt">
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="kt-word"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {word}{' '}
        </span>
      ))}
    </h1>
  )
}

function Prose({ text }: { text: string }) {
  const blocks = toParagraphs(text)
  return (
    <>
      {blocks.map((p, i) => (
        <FadeP key={i}>{p}</FadeP>
      ))}
    </>
  )
}

export default function App() {
  return (
    <main>
      <ScrollyHero slides={heroSlides} />

      <header>
        <KineticTitle text={overallTitle} />
      </header>

      <ArticleColumn variant="wide">
        <Prose text={introWide} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1a}
        title={p1SectionA.title}
        subtitle={p1SectionA.subtitle}
      />

      <ArticleColumn variant="narrow">
        <Prose text={narrowLong} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2large} caption={p2Caption} />

      <ArticleColumn variant="narrow">
        <Prose text={followShort} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1b}
        title={p1SectionB.title}
        subtitle={p1SectionB.subtitle}
      />

      <ArticleColumn variant="narrow">
        <Prose text={beforeGrid} />
      </ArticleColumn>

      <ScrollHighlightGrid items={gridItems} />

      <ArticleColumn variant="narrow">
        <Prose text={closingLong} />
      </ArticleColumn>
    </main>
  )
}
