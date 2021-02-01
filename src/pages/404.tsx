import Link from 'next/link'

import TravelerLogo from '../assets/logo.svg'

import { Container } from '../styles/pages/soon'

export default function ComingSoon(): JSX.Element {
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

      <Link href="/">
        <button type="button">Voltar para o início</button>
      </Link>
    </Container>
  )
}
