import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import Card from '../components/Card'
import TravelerLogo from '../assets/logo.svg'
import api from '../services/api'

import {
  Container,
  Input,
  Main,
  Labels,
  CitiesCardContainer
} from '../styles/pages/app'

interface AppProps {
  initialCities: Array<{
    id: string
    name: string
    imageUrl: string
  }>
}

export default function App({ initialCities }: AppProps): JSX.Element {
  const [query, setQuery] = useState('')
  const [cities, setCities] = useState(initialCities)

  useEffect(() => {
    if (query) {
      api
        .get('/cities/search', {
          params: {
            q: query
          }
        })
        .then(response => setCities(response.data))
    } else {
      setCities(initialCities)
    }
  }, [query])

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
        <Labels>
          <h2>Selecione uma cidade</h2>
          <div>
            <button type="button">Todas</button>
          </div>
        </Labels>

        <CitiesCardContainer>
          {cities.map(city => (
            <Card
              key={city.id}
              title={city.name}
              imageUrl={city.imageUrl}
              description="## locais"
            />
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
      initialCities: response.data
    }
  }
}
