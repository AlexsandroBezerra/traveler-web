import Link from 'next/link'

import TravelerLogo from '../assets/logo.svg'

import { Container, LogoContainer } from '../styles/components/Header'

interface HeaderProps {
  children?: React.ReactNode
  backButton?: boolean
}

export default function Header({
  children,
  backButton = false
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <div>
        <LogoContainer>
          <TravelerLogo />
          {backButton && <div />}
        </LogoContainer>

        {children}

        <Link href="soon">
          <button type="button">Acesso restrito</button>
        </Link>
      </div>
    </Container>
  )
}
