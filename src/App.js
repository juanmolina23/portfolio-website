import React, { useEffect, useState } from "react"

import Home from "./components/Home"
import NavMenu from "./components/NavMenu"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Tools from "./components/Tools"

function App() {
  const [showScroll, setShowScroll] = useState(false)

  window.onscroll = e => {
    if (window.scrollY > 500) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }

  function backToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div>
      <NavMenu />
      <Home />
      <button
        onClick={backToTop}
        className={`btn btn-primary btn-floating btn-lg`}
        id={`btn-back-to-top${showScroll ? "-displayed" : ""}`}
      >
        <i className='fas fa-angle-up'></i>
      </button>
      <AboutMe />
      <Skills />
      <Tools />
      <Projects />

      <Footer />
    </div>
  )
}

export default App
