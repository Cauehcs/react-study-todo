import styled, { css } from 'styled-components'

interface ContainerProps {
  title: 'Incomplete' | 'Complete'
}

export const Container = styled.section<ContainerProps>`
  ${props => props.title === 'Complete' && css`
    margin-top: 5.3125rem;
  `}

  strong {
    font-size: 1.125rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 11.25rem;
      background-color: #000;
      left: calc(100% + 1rem);
      top: 50%;
    }
  }
`