import { useCallback, useEffect, useRef, useState } from 'react'
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
  const imgRef = useRef<HTMLImageElement>(null)

  const onLoad = useCallback(() => setIsLoading(false), [])

  useEffect(() => imgRef.current.complete && onLoad(), [])

  return (
    <>
      <img
        src={imageUrl}
        ref={imgRef}
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={onLoad}
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
