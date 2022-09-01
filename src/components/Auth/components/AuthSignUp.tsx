import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { Text } from "../../../commons/Text"
import { FaUserCircle, FaLock, FaMailBulk } from "react-icons/fa"
import { SignUp } from "../api/post"
import { useToast } from "@chakra-ui/react"

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
`

const InputContainer = styled.div`
  border: 1px solid lightGray;
  margin-bottom: 10px;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  background-color: var(--secondary-color);
  border-radius: 20px;
  color: white;
  margin-top: 40px;
  padding: 10px;
  font-size: 24px;
`

const Form = styled.form`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Banner = styled.div`
  color: var(--secondary-color);
  font-size: 18px;
  text-align: center;
`

export interface AuthSignUpProps {
  setSignIn: Dispatch<SetStateAction<boolean>>
}

export const AuthSignUp = ({ setSignIn }: AuthSignUpProps) => {
  const toast = useToast()
  const [user, setUser] = useState({ username: "", password: "", email: "" })

  const onSubmit = (e: any) => {
    e.preventDefault()
    SignUp(user).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Account created success",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        setSignIn(true)
        return
      }
      toast({
        title: "Account created failed",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Text
          fontSize="56px"
          fontWeight="bold"
          color={"var(--secondary-color)"}
          margin="10px 0px"
        >
          Sign Up
        </Text>
        <InputContainer>
          <FaUserCircle color={"var(--secondary-color)"} />
          <Input
            name="username"
            placeholder="username"
            value={user.username}
            onChange={(e) =>
              setUser((pre) => ({ ...pre, username: e.target.value }))
            }
          />
        </InputContainer>
        <InputContainer>
          <FaLock color={"var(--secondary-color)"} />
          <Input
            name="password"
            placeholder="password"
            value={user.password}
            onChange={(e) =>
              setUser((pre) => ({ ...pre, password: e.target.value }))
            }
          />
        </InputContainer>
        <InputContainer>
          <FaMailBulk color={"var(--secondary-color)"} />
          <Input
            name="email"
            placeholder="email"
            value={user.email}
            onChange={(e) =>
              setUser((pre) => ({ ...pre, email: e.target.value }))
            }
          />
        </InputContainer>
        <Button type="submit">Sign Up</Button>
      </Form>
      <Banner>
        Back to{" "}
        <span
          style={{ color: "#72bcd4", cursor: "pointer" }}
          onClick={() => setSignIn(true)}
        >
          Sign In
        </span>
      </Banner>
    </Container>
  )
}

export default AuthSignUp
