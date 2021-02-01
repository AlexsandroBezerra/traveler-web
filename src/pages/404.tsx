import { useRouter } from 'next/router'

import TravelerLogo from '../assets/logo.svg'

import { Container } from '../styles/pages/soon'

export default function ComingSoon(): JSX.Element {
  const router = useRouter()

  return (
    <Container>
      <TravelerLogo />

      <h1>404 - Ocorreu um problema... </h1>
      <h2>
        A página solicitada mudou de endereço, ou não existe.
        <br />
        <br />
        :(
      </h2>

      <button type="button" onClick={router.back}>
        Voltar para o início
      </button>
    </Container>
  )
}
