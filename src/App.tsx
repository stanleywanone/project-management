import "./App.css"
import { Header } from "./components/Header"
import { Body } from "./components/Body"

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Body />
      </div>
    </div>
  )
}

export default App
