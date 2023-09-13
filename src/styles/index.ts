import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: sans-serif;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  align-items: center;
`

export const Button = styled.button`
  display: block;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  background-color: green;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`

export default GlobalStyle
