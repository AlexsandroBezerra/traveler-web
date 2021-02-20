import { useRouter } from 'next/router'

import TravelerLogo from '../assets/logo.svg'
import SEO from '../components/SEO'

import { Container } from '../styles/pages/soon'

export default function ComingSoon(): JSX.Element {
  const router = useRouter()

  return (
    <Container>
      <SEO />
      <TravelerLogo />

      <h1>Em construção...</h1>
      <h2>
        Essa página ainda não está completa, em breve terá algo aqui.
        <br />
        <br />
        :(
      </h2>

      <button type="button" onClick={router.back}>
        Voltar para página anterior
      </button>
    </Container>
  )
}
