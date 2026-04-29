import { useId, type ReactNode } from 'react'

type Variant = 'wide' | 'narrow'

type ArticleColumnProps = {
  variant: Variant
  children: ReactNode
  sectionLabel?: string
}

export function ArticleColumn({ variant, children, sectionLabel }: ArticleColumnProps) {
  const headingId = useId()

  return (
    <section
      className={`article article--${variant}`}
      aria-labelledby={sectionLabel ? headingId : undefined}
    >
      {sectionLabel ? (
        <h2 id={headingId} className="section-heading">
          {sectionLabel}
        </h2>
      ) : null}
      <div className="article__prose">{children}</div>
    </section>
  )
}
