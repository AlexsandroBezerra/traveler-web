import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import Header from '../../components/Header'
import api from '../../services/api'
import ImageWithLazyLoad from '../../components/ImageWithLazyLoad'

import {
  Container,
  Content,
  Main,
  ImageContainer
} from '../../styles/pages/cities'
import { useEffect } from 'react'

interface City {
  id: string
  name: string
  imageHash: string
  imageUrl: string
  description: string
  famousFor: string
}

interface CityProps {
  city: City
}

export default function City({ city }: CityProps): JSX.Element {
  useEffect(() => {
    api.post(`cities/${city.id}/access`)
  }, [])

  return (
    <Container>
      <Head>
        <title>Traveler | {city.name}</title>
      </Head>

      <Header backButton>
        <h2>{city.name}</h2>
      </Header>

      <Content>
        <ImageContainer>
          <ImageWithLazyLoad
            imageUrl={city.imageUrl}
            hash={city.imageHash}
            width="100%"
            height="100%"
          />
        </ImageContainer>

        <Main>
          <h1>{city.name}</h1>

          <p>{city.description}</p>
          <span>{city.famousFor}</span>
        </Main>
      </Content>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  try {
    const response = await api.get<City>(`/cities/${ctx.params.id}`)

    return {
      revalidate: 60,
      props: {
        city: response.data
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await api.get<City[]>('/cities')

  const paths = response.data.map(city => {
    return {
      params: {
        id: city.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}
