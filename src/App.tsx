import "./App.css"
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { Routers } from "./components/Router/components/Routers"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthSignUp from "./components/Auth/components/AuthSignUp"
import AuthLogin from "./components/Auth/components/AuthSignIn"

export const App = () => {
  return (
    <div className="app">
      {/* <div className="header">
        <Header />
      </div> */}
      <Routers />
      {/* <div className="body">
        <Body />
      </div> */}
    </div>
  )
}

export default App
