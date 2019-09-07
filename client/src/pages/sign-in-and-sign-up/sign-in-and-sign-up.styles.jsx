import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      padding: 0 20px 0 20px;
      margin-bottom: 50px;
    }
    > *:last-child {
      padding: 0 20px 0 20px;
    }
  }
`
