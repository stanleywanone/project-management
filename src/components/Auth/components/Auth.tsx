import styled from "styled-components"
import { Text } from "../../../commons/Text"
import AuthSignUp from "./AuthSignUp"

export const AuthContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template: "welcome user";
  grid-templatecolumns: 60% 40%;
`

export const AuthWelcome = styled.div`
  grid-area: welcome;
  background-color: var(--secondary-color);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const User = styled.div`
  grid-area: user;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export interface AuthProps {
  auth: string
}

export const Auth = ({ auth }: AuthProps) => {
  return (
    <AuthContainer>
      <AuthWelcome>
        <Text fontSize={"56px"} fontWeight={"bold"}>
          Welcome back!
        </Text>
        <Text fontSize={"16px"}>
          You can sign in to access with your existing account.
        </Text>
      </AuthWelcome>
      <User>
        <AuthSignUp />
      </User>
    </AuthContainer>
  )
}

export default Auth
