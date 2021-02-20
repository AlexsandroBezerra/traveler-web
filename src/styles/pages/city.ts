import styled from 'styled-components'

export const Container = styled.div`
  header {
    h2 {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: ${props => props.theme.text.secondary};
    }
  }
`

export const Content = styled.main`
  width: 100%;
  position: relative;
`

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 34rem;
  top: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: 50% 35%;
  }
`

export const Main = styled.main`
  padding: 42rem 3.2rem 3.2rem;
  max-width: 112rem;
  margin: auto 4rem;

  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 5.4rem;
    line-height: 5.4rem;
    color: ${props => props.theme.text.title};
  }

  p {
    color: ${props => props.theme.text.title};
    max-width: 50.6rem;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 4rem;
  }

  span {
    display: block;
    max-width: 50.6rem;
    margin-top: 3.2rem;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  @media (max-width: 730px) {
    h1 {
      font-size: 4.8rem;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 3.6rem;
    }

    p {
      font-size: 1.8rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`
