import Link from 'next/link'
import Head from 'next/head'

import TravelerLogo from '../assets/logo.svg'

import { Background, Container, Content } from '../styles/pages/home'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Traveler | Viva uma grande aventura</title>
      </Head>

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

          <Link href="app ">
            <button>Descobrir todos os lugares</button>
          </Link>
        </main>

        <Background />
      </Content>
    </Container>
  )
}
