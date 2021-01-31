import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import Card from '../components/Card'
import TravelerLogo from '../assets/logo.svg'
import api from '../services/api'

import {
  Container,
  Input,
  CitiesCardContainer,
  Main
} from '../styles/pages/app'

interface AppProps {
  cities: Array<{
    id: string
    name: string
    imageUrl: string
  }>
}

export default function App({ cities }: AppProps): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <Container>
      <header>
        <div>
          <TravelerLogo />

          <Input>
            <FiSearch size={20} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Qual cidade você procura?"
            />
          </Input>

          <Link href="soon">
            <button type="button">Acesso restrito</button>
          </Link>
        </div>
      </header>

      <Main>
        <div>
          <h2>Selecione uma cidade</h2>
          <div>
            <button type="button">Todas</button>
          </div>
        </div>

        <CitiesCardContainer>
          {cities.map(city => (
            <Card key={city.id} title={city.name} imageUrl={city.imageUrl} />
          ))}
        </CitiesCardContainer>
      </Main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/cities')

  return {
    props: {
      cities: response.data
    }
  }
}
