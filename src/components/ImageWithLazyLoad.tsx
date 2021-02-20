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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <img
        src={imageUrl}
        // onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
      <Blurhash
        hash={hash}
        width={width}
        height={height}
        punch={1}
        style={{ display: !isLoading ? 'none' : 'block' }}
      />
    </>
  )
}
