import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"

export interface UserErrorReturns {
  errorResult: (res: any) => void
}

export const useError = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  useEffect(() => {
    if (error.length === 0) return
    switch (error) {
      case "No active account found with the given credentials":
        toast({
          title: "Incorrect username or password",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
        return
      case "Given token not valid for any token type":
        return navigate("/auth/signin")
    }

    toast({
      title: "There is something wrong",
      status: "error",
      duration: 3000,
      isClosable: true,
    })
    return
  })

  const errorResult = useCallback((res: any) => {
    if (res.detail) return setError(res.detail)
    if (res.message) return setError(res.message)
    if (res.status) return setError(res.status)

    return
  }, [])

  return { errorResult }
}
