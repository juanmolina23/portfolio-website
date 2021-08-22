import React, { useEffect } from "react"

import AboutMe from "./AboutMe"
import SkillsTools from "./SkillsTools"
import Projects from "./Projects"
import Footer from "./Footer"

function Home() {
  return (
    <div>
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
