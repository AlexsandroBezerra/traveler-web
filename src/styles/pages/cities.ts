import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 3.6rem;
    margin-right: 3.6rem;
    font-weight: 500;
    color: ${props => props.theme.text.title};
  }

  @media (max-width: 730px) {
    h2 {
      font-size: 3.2rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 2.4rem;
    }
  }
`

export const Input = styled.div`
  background: ${props => props.theme.background};
  border-radius: 1rem;
  padding: 1.4rem 1.6rem;
  max-width: 41.6rem;
  min-width: 26rem;
  flex: 1;
  cursor: text;
  max-height: 48px;

  display: flex;
  align-items: center;
  border: 2px solid ${props => props.theme.shapes.secondary};
  color: ${props => props.theme.text.secondary};

  &:focus-within {
    color: ${props => props.theme.primary};
  }

  input {
    background: transparent;
    color: ${props => props.theme.text.title};
    border: none;
    width: 100%;
    margin-left: 16px;
    outline: none;

    &::placeholder {
      color: ${props => props.theme.text.secondary};
    }
  }

  @media (max-width: 730px) {
    & {
      min-width: 100%;
    }
  }
`

export const Main = styled.main`
  margin: 4rem auto 0;
  padding: 3.2rem;
  max-width: 118.4rem;
`

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme.primary};
    padding-bottom: 1rem;
    font-weight: 500;
    color: ${props => props.theme.text.title};

    @media (max-width: 400px) {
      & {
        font-size: 1.4rem;
      }
    }
  }
`

export const CitiesCardContainer = styled.div`
  margin-top: 4rem;
  gap: 3.2rem;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));

  @media (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  }
`

export const NotFoundContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 14.7rem;
  text-align: center;
  font-size: 2.4rem;
  font-weight: 500;

  svg {
    margin-bottom: 3.2rem;
  }
`
