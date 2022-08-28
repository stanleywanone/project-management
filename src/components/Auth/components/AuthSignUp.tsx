import styled from "styled-components"
import { Text } from "../../../commons/Text"
import { FaUserCircle } from "react-icons/fa"

const Input = styled.input`
  border: 1px solid lightGray;
  margin-bottom: 15px;
  border-radius: 20px;

  padding: 10px;
`

const Button = styled.button`
  background-color: var(--secondary-color);
  border-radius: 20px;
  color: white;
  padding: 10px;
`

export const AuthSignUp = () => {
  return (
    <>
      <form
        style={{
          width: "300px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          fontSize="56px"
          fontWeight="bold"
          color={"var(--secondary-color)"}
        >
          Sign Up
        </Text>
        <div
          style={{
            border: "1px solid lightGray",
            marginBottom: "15px",
            borderRadius: "20px",
            padding: "10px",
          }}
        ></div>
        <Input name="username" placeholder="username" />
        <Input name="password" placeholder="password" />
        <Input name="email" placeholder="email" />
        <Button>Sign Up</Button>
      </form>
    </>
  )
}

export default AuthSignUp
