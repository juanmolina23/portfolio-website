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
      <div id='image-container'>
        <Image src={professionalPic} fluid roundedCircle />
      </div>
      <h1>Full-Stack Developer</h1>
      <Button href='#about' variant='primary' size='lg'>
        Learn About Me
      </Button>
    </Container>
  )
}

export default Home
