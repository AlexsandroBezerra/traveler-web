import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'

import TravelerLogo from '../assets/logo.svg'

import {
  Container,
  Input,
  CitiesCardContainer,
  Main
} from '../styles/pages/app'
import Card from '../components/Card'

export default function App(): JSX.Element {
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
          <Card
            title="Fortaleza"
            imageUrl="https://observatorio3setor.org.br/wp-content/uploads/2016/08/Fortaleza_Brazil_6.jpg"
          />

          <Card
            title="Fortaleza"
            imageUrl="https://observatorio3setor.org.br/wp-content/uploads/2016/08/Fortaleza_Brazil_6.jpg"
          />
          <Card
            title="Fortaleza"
            imageUrl="https://observatorio3setor.org.br/wp-content/uploads/2016/08/Fortaleza_Brazil_6.jpg"
          />
          <Card
            title="Fortaleza"
            imageUrl="https://observatorio3setor.org.br/wp-content/uploads/2016/08/Fortaleza_Brazil_6.jpg"
          />
          <Card
            title="Fortaleza"
            imageUrl="https://observatorio3setor.org.br/wp-content/uploads/2016/08/Fortaleza_Brazil_6.jpg"
          />
        </CitiesCardContainer>
      </Main>
    </Container>
  )
}
