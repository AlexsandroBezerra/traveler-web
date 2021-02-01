import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  background: ${props => props.theme.shapes.primary};
  border-bottom: 1px solid ${props => props.theme.shapes.secondary};
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    margin: 0 3.2rem;
    max-width: 112rem;
    padding: 2.4rem 0;

    button {
      padding: 1.1rem 3.2rem;
      border-radius: 1rem;
      background: ${props => props.theme.blueLow};
      border: none;
      color: ${props => props.theme.secondary};
      font-weight: 500;
      margin-left: 3.2rem;
      transition: background-color 0.2s;

      &:focus {
        outline: ${props => props.theme.secondary} solid 0.3rem;
      }

      &:hover {
        background: ${props => shade(0.1, props.theme.blueLow)};
      }
    }

    @media (max-width: 730px) {
      > div :nth-child(2) {
        order: 3;
        margin: 2.4rem auto 0;
      }

      button {
        margin-left: 0;
      }
    }
  }
`

export const LogoContainer = styled.div`
  margin-right: 3.2rem;

  @media (max-width: 730px) {
    & {
      margin-right: 0;
    }
  }
`
