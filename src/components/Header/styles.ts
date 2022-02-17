import styled from 'styled-components'

export const Container = styled.header`
  height: 7.625rem;
  width: 100%;
  background: #FF9E01;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.75rem;

  h1 {
    color: #fff;
    font-size: 2.25rem;
  }

  button {
    color: #fff;
    width: 6.25rem;
    height: 2.625rem;
    border: 4px solid #fff;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    background: transparent;
    transition: all 0.2s;

    &:hover {
      background: #fff;
      color: #FF9E01;
    }
  }
`