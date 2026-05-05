import { Fragment, useEffect, useRef, type ReactNode } from 'react'
import { ArticleColumn } from './components/ArticleColumn'
import { P1Section } from './components/P1Section'
import { P2Section } from './components/P2Section'
import { ScrollyHero, type ScrollySlide } from './components/ScrollyHero'
import { ScrollHighlightGrid, type GridItem } from './components/ScrollHighlightGrid'
import {
  afterLineBreak3,
  afterP1c,
  afterP1d,
  afterP1e,
  afterP2i,
  afterP2j,
  afterP2k,
  afterP2l,
  afterP2m,
  afterP2m2,
  afterRuleBreak4,
  afterP2b,
  afterP2c,
  afterP2d,
  afterP2f,
  afterP2g,
  beforeGrid,
  followShort,
  images,
  introWide,
  narrowLong,
  overallTitle,
  overallSubtitle,
  p1SectionA,
  p1SectionB,
  p1SectionC,
  p1SectionD,
  p1SectionE,
  p2Caption,
  p2bCaption,
  p2cCaption,
  p2dCaption,
  p2eCaption,
  p2fCaption,
  p2gCaption,
  p2hCaption,
  p2iCaption,
  p2jCaption,
  p2kCaption,
  p2lCaption,
  p2mCaption,
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
function FadeP({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // If already in the viewport on mount, show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('fade-up--visible')
      return
    }

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
    <p ref={ref} className={`fade-up${className ? ` ${className}` : ''}`}>
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

  const tokens = text.split(' ')

  return (
    <h1 ref={ref} className="overall-title kt">
      {tokens.map((word, i) =>
        word === '|' ? (
          <br key={i} />
        ) : (
        <Fragment key={i}>
          <span
            className="kt-word"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {word}
          </span>{' '}
        </Fragment>
      ))}
    </h1>
  )
}

function Prose({ text }: { text: string }) {
  const blocks = toParagraphs(text)
  return (
    <>
      {blocks.map((p, i) =>
        p === '---' ? (
          <hr key={i} className="section-rule" />
        ) : p.startsWith('*') && p.endsWith('*') ? (
          <FadeP key={i} className="text-center"><em>{p.slice(1, -1)}</em></FadeP>
        ) : (
          <FadeP key={i}>{p}</FadeP>
        )
      )}
    </>
  )
}

export default function App() {
  return (
    <main>
      <ScrollyHero slides={heroSlides} />

      <header>
        <KineticTitle text={overallTitle} />
        <p className="overall-subtitle">{overallSubtitle}</p>
      </header>

      <ArticleColumn variant="wide">
        <Prose text={introWide} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1a}
        title={p1SectionA.title}
        subtitle={p1SectionA.subtitle}
        caption={p1SectionA.caption}
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
        portrait
      />

      <ArticleColumn variant="narrow">
        <Prose text={beforeGrid} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2b} caption={p2bCaption} compact />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2b} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2c} caption={p2cCaption} compact flip />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2c} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1c}
        title={p1SectionC.title}
        subtitle={p1SectionC.subtitle}
        caption={p1SectionC.caption}
      />

      <ArticleColumn variant="narrow">
        <Prose text={afterP1c} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2d} caption={p2dCaption} compact small />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2d} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2e} caption={p2eCaption} compact flip />

      <P2Section imageUrl={images.p2f} caption={p2fCaption} compact small />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2f} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2g} caption={p2gCaption} compact flip />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2g} />
        <Prose text={afterLineBreak3} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1d}
        title={p1SectionD.title}
        subtitle={p1SectionD.subtitle}
        caption={p1SectionD.caption}
      />

      <ArticleColumn variant="narrow">
        <Prose text={afterP1d} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2h} caption={p2hCaption} compact small />

      <div className="rule-spacer">
        <hr className="section-rule" />
      </div>

      <ArticleColumn variant="narrow">
        <Prose text={afterRuleBreak4} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2i} caption={p2iCaption} compact flip />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2i} />
      </ArticleColumn>

      <P1Section
        imageUrl={images.p1e}
        title={p1SectionE.title}
        subtitle={p1SectionE.subtitle}
        caption={p1SectionE.caption}
      />

      <ArticleColumn variant="narrow">
        <Prose text={afterP1e} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2j} caption={p2jCaption} compact small />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2j} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2k} caption={p2kCaption} compact flip />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2k} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2l} caption={p2lCaption} compact small />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2l} />
      </ArticleColumn>

      <P2Section imageUrl={images.p2m} caption={p2mCaption} compact flip />

      <ArticleColumn variant="narrow">
        <Prose text={afterP2m} />
        <Prose text={afterP2m2} />
      </ArticleColumn>

      <ScrollHighlightGrid items={gridItems} />

    </main>
  )
}
