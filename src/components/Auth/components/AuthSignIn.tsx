import { Dispatch, SetStateAction, useState } from "react"
import styled from "styled-components"
import { Text } from "../../../commons/Text"
import { FaUserCircle, FaLock } from "react-icons/fa"
import { SignIn } from "../api/post"
import { useNavigate } from "react-router-dom"
import { useError } from "../../../utlies/useError"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

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
  height: 300px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  color: var(--secondary-color);
  font-size: 18px;
  text-align: center;
`
export interface AuthSignInProps {
  setSignIn: Dispatch<SetStateAction<boolean>>
}

export const AuthSignIn = ({ setSignIn }: AuthSignInProps) => {
  const navigate = useNavigate()
  const { errorResult } = useError()
  const [user, setUser] = useState({ username: "", password: "" })

  const onSubmit = (e: any) => {
    e.preventDefault()
    SignIn(user).then((res: any) => {
      if (res.access) {
        localStorage.setItem("access", res.access)
        localStorage.setItem("refresh", res.refresh)
        return navigate("/projects")
      } else {
        errorResult(res)
      }
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
          Sign In
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
        <Button type="submit">Sign In</Button>
      </Form>
      <Banner>
        New here?{" "}
        <span
          style={{ color: "#72bcd4", cursor: "pointer" }}
          onClick={() => setSignIn(false)}
        >
          Create an Account
        </span>
      </Banner>
    </Container>
  )
}

export default AuthSignIn
