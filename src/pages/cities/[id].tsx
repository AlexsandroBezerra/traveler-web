import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'

import Header from '../../components/Header'
import api from '../../services/api'

import {
  Container,
  Content,
  Main,
  ImageContainer
} from '../../styles/pages/cities'

interface City {
  id: string
  name: string
  imageUrl: string
  description: string
  famousFor: string
}

interface CityProps {
  city: City
}

export default function City({ city }: CityProps): JSX.Element {
  return (
    <Container>
      <Header backButton>
        <h2>Cidade</h2>
      </Header>

      <Content>
        <ImageContainer>
          <Image
            src={city.imageUrl}
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
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
  const response = await api.get<City>(`/cities/${ctx.params.id}`)

  return {
    props: {
      city: response.data
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
