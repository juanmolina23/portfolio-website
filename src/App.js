import React, { useEffect } from "react"

import Home from "./components/Home"
import NavMenu from "./components/NavMenu"
import AboutMe from "./components/AboutMe"
import SkillsTools from "./components/SkillsTools"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavMenu />
      <Home />
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
