import { useId } from 'react'

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

  return (
    <section className="p1" aria-labelledby={titleId}>
      <img
        className="p1__media"
        src={imageUrl}
        alt={imageAlt}
        decoding="async"
        aria-hidden={!imageAlt}
      />
      <div className="p1__scrim" aria-hidden />
      <div className="p1__content">
        <h2 id={titleId} className="p1__title">
          {title}
        </h2>
        <p className="p1__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}
