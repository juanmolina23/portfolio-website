import React, { useEffect } from "react"

import { Button, Image, Container } from "react-bootstrap"

import professionalPic from "../assets/images/professional-pic.jpg"

function Home() {
  return (
    <Container
      fluid
      id='home'
      className='bg-image d-flex flex-column justify-content-center align-items-center'
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
