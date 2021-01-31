import { Container } from '../styles/pages/soon'
import { useRouter } from 'next/router'

export default function ComingSoon(): JSX.Element {
  const router = useRouter()

  return (
    <Container>
      <h1>Em breve...</h1>

      <button type="button" onClick={router.back}>
        Voltar para página anterior
      </button>
    </Container>
  )
}
