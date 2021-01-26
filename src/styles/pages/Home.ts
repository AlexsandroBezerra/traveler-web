import { shade } from 'polished'
import styled from 'styled-components'

import backgroundImg from '../../assets/home-background.png'

export const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  height: 100vh;
  padding: 0 3.2rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    padding: 2.4rem 0;

    svg {
      width: 15.6rem;
      height: 3.2rem;
    }

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
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  main {
    max-width: 100%;
    text-align: center;
    margin: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font: 600 8rem Barlow, 'sans-serif';
      color: ${props => props.theme.text.title};
    }

    p {
      margin: 4rem 0 4.8rem;
      font-size: 2rem;
    }

    button {
      padding: 2.4rem;
      background: ${props => props.theme.primary};
      color: ${props => props.theme.shapes.primary};
      border-radius: 1rem;
      font-weight: 500;
      border: none;
      transition: background-color 0.2s;

      &:focus {
        outline: ${props => props.theme.secondary} solid 0.3rem;
      }

      &:hover {
        background: ${props => shade(0.1, props.theme.primary)};
      }
    }
  }

  @media (min-width: 700px) {
    main {
      max-width: 33rem;
      margin-right: 8rem;
      text-align: left;
    }
  }
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  flex: 1;
  max-width: 54rem;
`
