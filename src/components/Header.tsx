import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

import TravelerLogo from '../assets/logo.svg'

import {
  BackButton,
  Container,
  LogoContainer,
  RestrictedAccessButton
} from '../styles/components/Header'

interface HeaderProps {
  children?: React.ReactNode
  backButton?: boolean
}

export default function Header({
  children,
  backButton = false
}: HeaderProps): JSX.Element {
  const router = useRouter()

  return (
    <Container backButton={backButton}>
      <div>
        <LogoContainer backButton={backButton}>
          <TravelerLogo />
          {backButton && (
            <BackButton type="button" onClick={router.back}>
              <FiArrowLeft size={20} />
            </BackButton>
          )}
        </LogoContainer>

        {children}

        <Link href="/soon">
          <RestrictedAccessButton type="button">
            Acesso restrito
          </RestrictedAccessButton>
        </Link>
      </div>
    </Container>
  )
}
