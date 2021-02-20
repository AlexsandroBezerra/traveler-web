import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;
  padding: 0 4.8rem;

  svg {
    margin-bottom: 8rem;
  }

  h1 {
    font: 600 4.8rem Barlow, 'sans-serif';
    color: ${props => props.theme.text.title};
    margin-bottom: 1.8rem;
  }

  h2 {
    font: 500 2.4rem Barlow, 'sans-serif';
  }

  button {
    padding: 2.4rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.shapes.primary};
    border-radius: 1rem;
    font-weight: 500;
    border: none;
    margin-top: 4.8rem;

    &:focus {
      outline: ${props => props.theme.secondary} solid 0.3rem;
    }

    &:hover {
      background: ${props => shade(0.1, props.theme.primary)};
    }
  }

  @media (max-width: 730px) {
    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 1.8rem;
    }

    button {
      padding: 1.8rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    button {
      padding: 1.6rem;
      font-size: 1.4rem;
    }
  }
`
