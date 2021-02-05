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
`

export const Main = styled.main`
  padding-top: 42rem;
  max-width: 118.4rem;
  margin: 0 auto 4rem;

  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: 600;
    font-size: 54px;
    line-height: 54px;
    color: ${props => props.theme.text.title};
  }

  p {
    color: ${props => props.theme.text.title};
    max-width: 50.6rem;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    margin-top: 4rem;
  }

  span {
    display: block;
    max-width: 50.6rem;
    margin-top: 3.2rem;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`
