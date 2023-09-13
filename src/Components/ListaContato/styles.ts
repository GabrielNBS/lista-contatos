import styled from 'styled-components'
import { Button } from '../../styles'

export const Container = styled.div`
  padding: 16px 32px;

  h2 {
    text-align: center;
    margin-bottom: 16px;
  }

  div {
    display: inline-flex;
    gap: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 8px 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      flex-direction: column;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 16px 36px;
      gap: 8px;

      span {
        display: flex;
        gap: 4px;
      }
    }
  }
`
export const EditButton = styled(Button)`
  background-color: blue;
`

export const RemoveButton = styled(Button)`
  background-color: red;
`

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  position: absolute;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`
