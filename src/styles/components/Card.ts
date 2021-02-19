import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  border-radius: 1.6rem;
  background: ${props => props.theme.shapes.primary};
  border: 2px solid ${props => props.theme.shapes.secondary};
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  min-width: 2rem;

  img {
    width: 100%;
    height: 17.5rem;
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
`
