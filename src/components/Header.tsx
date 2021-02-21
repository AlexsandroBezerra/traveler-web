import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
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
  backButton?: string
}

export default function Header({
  children,
  backButton
}: HeaderProps): JSX.Element {
  const { push } = useRouter()

  const goBack = useCallback(() => {
    push(backButton)
  }, [])

  return (
    <Container backButton={!!backButton}>
      <div>
        <LogoContainer backButton={!!backButton}>
          <TravelerLogo />
          {!!backButton && (
            <Link href={backButton}>
              <BackButton type="button" onClick={goBack}>
                <FiArrowLeft size={20} />
              </BackButton>
            </Link>
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
