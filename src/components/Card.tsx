import Link from 'next/link'

import { Container } from '../styles/components/Card'
import ImageWithLazyLoad from './ImageWithLazyLoad'

interface CardProps {
  title: string
  imageUrl: string
  imageHash: string
  description: string
  href: string
}

export default function Card({
  title,
  imageUrl,
  imageHash,
  description,
  href
}: CardProps): JSX.Element {
  return (
    <Link href={href}>
      <Container>
        <ImageWithLazyLoad
          hash={imageHash}
          imageUrl={imageUrl}
          width="100%"
          height="17.5rem"
        />
        <strong>{title}</strong>
        <p>{description}</p>
      </Container>
    </Link>
  )
}
