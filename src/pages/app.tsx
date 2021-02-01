import { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GetStaticProps } from 'next'

import Card from '../components/Card'
import api from '../services/api'

import {
  Container,
  Input,
  Main,
  Labels,
  CitiesCardContainer
} from '../styles/pages/app'
import Header from '../components/Header'

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
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

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
      <Header>
        <Input>
          <FiSearch size={20} />
          <input
            ref={searchInputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Qual cidade você procura?"
          />
        </Input>
      </Header>

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
              href="/app"
              title={city.name}
              imageUrl={city.imageUrl}
              description="02 locais"
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
