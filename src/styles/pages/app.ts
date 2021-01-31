import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  header {
    background: ${props => props.theme.shapes.primary};
    border-bottom: 1px solid ${props => props.theme.shapes.secondary};

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin: 0 auto;
      max-width: 112rem;
      padding: 2.4rem 0;

      button {
        padding: 1.1rem 3.2rem;
        border-radius: 1rem;
        background: ${props => props.theme.blueLow};
        border: none;
        color: ${props => props.theme.secondary};
        font-weight: 500;
        transition: background-color 0.2s;

        &:focus {
          outline: ${props => props.theme.secondary} solid 0.3rem;
        }

        &:hover {
          background: ${props => shade(0.1, props.theme.blueLow)};
        }
      }
    }
  }

  h2 {
    font-size: 3.6rem;
    font-weight: 500;
    color: ${props => props.theme.text.title};
  }
`

export const Input = styled.div`
  background: ${props => props.theme.background};
  border-radius: 1rem;
  padding: 1.4rem 1.6rem;
  width: 100%;
  max-width: 41.6rem;
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
`

export const Main = styled.main`
  margin: 4rem auto 0;
  max-width: 112rem;
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
  }
`

export const CitiesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
  justify-content: flex-start;
  gap: 3.2rem;
`
