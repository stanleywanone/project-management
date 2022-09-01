import { Dispatch, SetStateAction, useState } from "react"

export interface UseAuthProps {
  signIn: boolean
  setSignIn: Dispatch<SetStateAction<boolean>>
}

export const useAuth = () => {
  const [signIn, setSignIn] = useState(true)

  return {
    signIn,
    setSignIn,
  }
}
