import React, { useEffect } from "react"

import Home from "./components/Home"
import NavMenu from "./components/NavMenu"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Tools from "./components/Tools"

function App() {
  return (
    <div>
      <NavMenu />
      <Home />
      <AboutMe />
      <Skills />
      <Tools />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
