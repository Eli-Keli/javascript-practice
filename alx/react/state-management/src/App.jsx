import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
