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
  return (
    <figure className="p2">
      <img
        className="p2__media"
        src={imageUrl}
        alt={imageAlt}
        decoding="async"
        aria-hidden={!imageAlt}
      />
      <figcaption className="p2__caption">{caption}</figcaption>
    </figure>
  )
}
