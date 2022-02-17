import styled, { css } from 'styled-components'

interface ContainerProps {
  done: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;

  input {
    aspect-ratio: 1;
    width: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: #323333;

    ${props => props.done && css`
      text-decoration: line-through;
    `}
  }
`