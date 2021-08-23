import React, { useEffect } from "react"

import { Button } from "react-bootstrap"

import profilePic from "../images/profile-pic.png"

import AboutMe from "./AboutMe"
import SkillsTools from "./SkillsTools"
import Projects from "./Projects"
import Footer from "./Footer"

function Home() {
  return (
    <>
      <div id='home' className='bg-image'>
        <div className='overlay'>
          <img src={profilePic} alt='Profile picture' className='profile-pic' />
          <h1>Full-Stack Developer</h1>
          <Button variant='primary' size='lg'>
            Download Resume
          </Button>
        </div>
      </div>
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
