import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap"
function NavMenu() {
  const [scrollNum, setScrollNum] = useState(0)

  useEffect(() => {
    window.onscroll = e => {
      setScrollNum(window.pageYOffset)
    }
  }, [scrollNum])

  const onScrollSticky = () => {
    if (window.pageYOffset > 200) {
      setScrollNum(window.pageYOffset)
    }
  }

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      fixed='top'
      id='navbar-menu'
      className={`${scrollNum ? "" : ""}`}
      onScroll={onScrollSticky}
    >
      <Container>
        <Navbar.Brand id='navbar-menu-brand' href='#home'>
          Juan Molina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' id='navbar-menu-nav'>
            <Nav.Link href='#about'>About Me</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#tools'>Tools</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#footer'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary' size='lg' className=''>
              Download Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu
