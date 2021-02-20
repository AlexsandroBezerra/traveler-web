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

      &:focus {
        outline: ${props => props.theme.secondary} solid 0.3rem;
      }

      &:hover {
        background: ${props => shade(0.1, props.theme.blueLow)};
      }
    }
  }

  @media (max-width: 400px) {
    header {
      svg {
        width: 12rem;
      }

      button {
        padding: 0.8rem 2.4rem;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 350px) {
    header {
      svg {
        width: 10rem;
      }

      button {
        padding: 0.8rem 1.2rem;
        font-size: 1.2rem;
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
      font: 600 4.8rem Barlow, 'sans-serif';
      color: ${props => props.theme.text.title};
    }

    p {
      margin: 4rem 0 4.8rem;
      font-size: 1.6rem;
    }

    button {
      padding: 2.4rem;
      background: ${props => props.theme.primary};
      color: ${props => props.theme.shapes.primary};
      border-radius: 1rem;
      font-weight: 500;
      border: none;

      &:focus {
        outline: ${props => props.theme.secondary} solid 0.3rem;
      }

      &:hover {
        background: ${props => shade(0.1, props.theme.primary)};
      }
    }
  }

  @media (min-width: 350px) {
    main {
      h1 {
        font-size: 5.6rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 400px) {
    main {
      h1 {
        font-size: 6.4rem;
      }

      p {
        font-size: 1.8rem;
      }
    }
  }

  @media (min-width: 700px) {
    main {
      max-width: 33rem;
      margin-right: 8rem;
      text-align: left;

      h1 {
        font-size: 8rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }
`

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  flex: 1;
  max-width: 54rem;
`
