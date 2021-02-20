import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 1.6rem;
  background: ${props => props.theme.shapes.primary};
  border: 2px solid ${props => props.theme.shapes.secondary};
  overflow: hidden;
  cursor: pointer;
  min-width: 2rem;

  img {
    width: 100%;
    height: 17.5rem;
    object-fit: cover;
  }

  canvas {
    width: 100%;
    height: 17.5rem;
  }

  strong {
    font-size: 2rem;
    font-weight: 500;
    margin: 1.6rem 3.2rem 0;
    display: block;
    color: ${props => props.theme.text.title};
  }

  p {
    margin: 0 3.2rem 1.6rem;
  }

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 730px) {
    strong {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 350px) {
    & {
      min-width: 1.4rem;
    }
  }
`
