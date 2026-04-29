import { ArticleColumn } from './components/ArticleColumn'
import { P1Section } from './components/P1Section'
import { P2Section } from './components/P2Section'
import { QuoteHero } from './components/QuoteHero'
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

const gridItems: [GridItem, GridItem, GridItem, GridItem] = [
  { src: images.grid[0], alt: 'Panel one: placeholder street scene' },
  { src: images.grid[1], alt: 'Panel two: placeholder interior' },
  { src: images.grid[2], alt: 'Panel three: placeholder waterfront' },
  { src: images.grid[3], alt: 'Panel four: placeholder skyline detail' },
]

function Prose({ text }: { text: string }) {
  const blocks = toParagraphs(text)
  return (
    <>
      {blocks.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  )
}

export default function App() {
  return (
    <main>
      <QuoteHero imageUrl={images.quote1} quote={quotes[0]} />
      <QuoteHero imageUrl={images.quote2} quote={quotes[1]} />
      <QuoteHero imageUrl={images.quote3} quote={quotes[2]} />

      <header>
        <h1 className="overall-title">{overallTitle}</h1>
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
