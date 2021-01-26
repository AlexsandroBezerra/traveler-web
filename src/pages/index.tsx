import Link from 'next/link'

import TravelerLogo from '../assets/logo.svg'

import { Background, Container, Content } from '../styles/pages/Home'

function Home(): JSX.Element {
  return (
    <Container>
      <header>
        <TravelerLogo />

        <Link href="soon">
          <button type="button">Acesso restrito</button>
        </Link>
      </header>

      <Content>
        <main>
          <h1>Viva uma grande aventura</h1>

          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas do
            Ceará.
          </p>

          <Link href="soon">
            <button>Descobrir todos os lugares</button>
          </Link>
        </main>

        <Background />
      </Content>
    </Container>
  )
}

export default Home
