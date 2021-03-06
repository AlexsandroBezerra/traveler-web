import { useEffect, useRef, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import Header from '../../components/Header'
import Card from '../../components/Card'
import api from '../../services/api'

import Emoji from '../../assets/mehh-emoji.svg'

import {
  Container,
  Input,
  Main,
  Labels,
  CitiesCardContainer,
  NotFoundContainer
} from '../../styles/pages/cities'
import SEO from '../../components/SEO'

interface AppProps {
  initialCities: Array<{
    id: string
    name: string
    imageUrl: string
    imageHash: string
    slug: string
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
      <SEO title="Traveler | Dashboard" />

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
        {cities.length > 0 && (
          <>
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
                  href={`cities/${city.slug}`}
                  title={city.name}
                  imageUrl={city.imageUrl}
                  imageHash={city.imageHash}
                  description="02 locais"
                />
              ))}
            </CitiesCardContainer>
          </>
        )}

        {cities.length === 0 && (
          <NotFoundContainer>
            <Emoji />
            Sem resultados. <br />
            Tente uma nova busca
          </NotFoundContainer>
        )}
      </Main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/cities')

  return {
    revalidate: 60,
    props: {
      initialCities: response.data
    }
  }
}
