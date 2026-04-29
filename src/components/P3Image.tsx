type P3ImageProps = {
  imageUrl: string
  alt: string
}

export function P3Image({ imageUrl, alt }: P3ImageProps) {
  return (
    <div className="p3-wrap">
      <div className="p3">
        <img src={imageUrl} alt={alt} loading="lazy" decoding="async" />
      </div>
    </div>
  )
}
