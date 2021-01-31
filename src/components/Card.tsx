import { Container } from '../styles/components/Card'

interface CardProps {
  title: string
  imageUrl: string
}

export default function Card({ title, imageUrl }: CardProps): JSX.Element {
  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <strong>{title}</strong>
      <p>13 locais</p>
    </Container>
  )
}
