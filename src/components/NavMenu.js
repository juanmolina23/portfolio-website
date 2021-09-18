import React, { useEffect, useState, useRef } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"

import resume from "../assets/juan-molina-resume.pdf"
function NavMenu() {
  const home = "home"
  const about = "about"
  const skills = "skills"
  const tools = "tools"
  const projects = "projects"
  const footer = "footer"

  const scrollTo = (e, el) => {
    console.log(el)
    e.preventDefault()
    document.getElementById(`${el}`).scrollIntoView()
  }

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      fixed='top'
      id='navbar-menu'
    >
      <Container>
        <Navbar.Brand id='navbar-menu-brand' onClick={e => scrollTo(e, home)}>
          Juan Molina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' id='navbar-menu-nav'>
            <Nav.Link onClick={e => scrollTo(e, about)}>About Me</Nav.Link>
            <Nav.Link onClick={e => scrollTo(e, skills)}>Skills</Nav.Link>
            <Nav.Link onClick={e => scrollTo(e, tools)}>Tools</Nav.Link>
            <Nav.Link onClick={e => scrollTo(e, projects)}>Projects</Nav.Link>
            <Nav.Link onClick={e => scrollTo(e, footer)}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <a href={resume} download className='text-center'>
              <Button variant='primary' size='lg' className=''>
                Download Resume
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu
