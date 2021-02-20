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

    @media (max-width: 400px) {
      > div input {
        font-size: 1.4rem;
        padding: 1.8rem 0;
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
  display: flex;
  align-items: center;
  margin-right: 3.2rem;

  @media (max-width: 730px) {
    & {
      margin-right: 0;
    }
  }

  @media (max-width: 400px) {
    svg {
      width: 12rem;
    }
  }

  @media (max-width: 350px) {
    svg {
      width: 10rem;
    }
  }
`

export const BackButton = styled.button`
  background: none;
  padding: 1rem;
  margin-left: 3.2rem;
  border: 1px solid ${props => props.theme.shapes.secondary};
  color: ${props => props.theme.text.secondary};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    border: 1px solid ${props => props.theme.secondary};
    color: ${props => props.theme.secondary};
    background: ${props => shade(0.05, props.theme.shapes.primary)};
  }
`

export const RestrictedAccessButton = styled.button`
  padding: 1.1rem 3.2rem;
  border-radius: 1rem;
  background: ${props => props.theme.blueLow};
  border: none;
  color: ${props => props.theme.secondary};
  font-weight: 500;
  margin-left: 3.2rem;
  transition: 0.2s;

  &:focus {
    outline: ${props => props.theme.secondary} solid 0.3rem;
  }

  &:hover {
    background: ${props => shade(0.1, props.theme.blueLow)};
  }

  @media (max-width: 400px) {
    & {
      padding: 0.8rem 2.4rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 350px) {
    & {
      padding: 0.8rem 1.2rem;
      font-size: 1.2rem;
    }
  }
`
