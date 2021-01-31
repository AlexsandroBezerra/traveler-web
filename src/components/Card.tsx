import { Container } from '../styles/components/Card'

interface CardProps {
  title: string
  imageUrl: string
  description: string
}

export default function Card({
  title,
  imageUrl,
  description
}: CardProps): JSX.Element {
  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <strong>{title}</strong>
      <p>{description}</p>
    </Container>
  )
}
