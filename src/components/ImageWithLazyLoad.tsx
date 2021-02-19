import { useState } from 'react'
import { Blurhash } from 'react-blurhash'

interface ImageWithLazyLoadProps {
  hash: string
  imageUrl: string
  width: string | number
  height: string | number
}

export default function ImageWithLazyLoad({
  hash,
  imageUrl,
  width,
  height
}: ImageWithLazyLoadProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <img
        src={imageUrl}
        onLoad={() => setIsLoading(true)}
        style={{ display: !isLoading ? 'none' : 'block' }}
      />
      <Blurhash
        hash={hash}
        width={width}
        height={height}
        punch={1}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  )
}
