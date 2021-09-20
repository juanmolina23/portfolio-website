import React, { useEffect } from "react"

import { Button, Image, Container } from "react-bootstrap"

import professionalPic from "../assets/professional-pic.jpg"
import backgroundImg from "../assets/dark-overlay-bg.gif"

function Home() {
  var sectionStyle = {
    backgroundImage: `url(${backgroundImg})`
  }
  return (
    <Container
      fluid
      id='home'
      className='bg-image d-flex flex-column justify-content-center align-items-center'
      style={sectionStyle}
    >
      <h1 id='main-header' className='display-1 text-center '>
        Juan Molina
      </h1>
      <h1 id='main-subheader'>Software Developer</h1>
      <Button href='#about' variant='primary' size='lg' id='learn-about-me-btn'>
        Learn About Me
      </Button>
    </Container>
  )
}

export default Home
