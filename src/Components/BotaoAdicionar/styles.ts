import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-size: 40px;
  bottom: 40px;
  right: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
`
