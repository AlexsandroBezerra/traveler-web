import Link from 'next/link'

import { Container } from '../styles/components/Card'

interface CardProps {
  title: string
  imageUrl: string
  description: string
  href: string
}

export default function Card({
  title,
  imageUrl,
  description,
  href
}: CardProps): JSX.Element {
  return (
    <Link href={href}>
      <Container>
        <img src={imageUrl} alt={title} />
        <strong>{title}</strong>
        <p>{description}</p>
      </Container>
    </Link>
  )
}
