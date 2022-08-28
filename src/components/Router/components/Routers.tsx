import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "../../Auth/components/Auth"
import AuthLogin from "../../Auth/components/AuthSignIn"
import AuthSignUp from "../../Auth/components/AuthSignUp"

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signup" element={<Auth auth={"signup"} />} />
        <Route path="/auth/signin" element={<Auth auth={"signin"} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
