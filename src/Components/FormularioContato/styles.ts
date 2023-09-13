import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-self: flex-start;
  justify-content: center;
  text-align: center;
  padding: 16px 32px;

  h2 {
    margin-bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 8px;

    input {
      height: 24px;
      padding: 8px 16px;
      border: 1px solid gray;
      border-radius: 4px;
    }
  }
`
