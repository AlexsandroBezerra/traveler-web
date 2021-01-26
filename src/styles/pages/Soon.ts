import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font: 600 5.6rem Barlow, 'sans-serif';
    color: ${props => props.theme.text.title};
  }

  button {
    padding: 2.4rem;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.shapes.primary};
    border-radius: 1rem;
    font-weight: 500;
    border: none;
    margin-top: 3.2rem;
    width: 40rem;
    transition: background-color 0.2s;

    &:focus {
      outline: ${props => props.theme.secondary} solid 0.3rem;
    }

    &:hover {
      background: ${props => shade(0.1, props.theme.primary)};
    }
  }
`
