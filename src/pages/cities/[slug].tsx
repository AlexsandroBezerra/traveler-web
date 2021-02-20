import { useEffect } from 'react'
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
} from '../../styles/pages/city'
import SEO from '../../components/SEO'

interface City {
  id: string
  name: string
  imageHash: string
  imageUrl: string
  description: string
  famousFor: string
  slug: string
}

interface CityProps {
  city: City
}

export default function City({ city }: CityProps): JSX.Element {
  useEffect(() => {
    api.post(`cities/${city.slug}/access`)
  }, [])

  return (
    <Container>
      <SEO
        title={`Traveler | ${city.name}`}
        description={city.description}
        image={city.imageUrl}
        imageAlt={`Image da cidade de ${city.name}.`}
      />

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
    const response = await api.get<City>(`/cities/${ctx.params.slug}`)

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
        slug: city.slug
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}
