import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
function NavMenu() {
  return (
    <Navbar
      id='navbarMenu'
      sticky='top'
      expand='sm'
      bg='dark'
      variant='dark'
      collapseOnSelect
    >
      <Container fluid={true} className='justify-content-center'>
        <div>
          <Navbar.Brand id='navbarMenuBrand' href='#home'>
            Juan Molina
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav id='navbarMenuNav' className='me-auto'>
              <Nav.Link href='#about'>About Me</Nav.Link>
              <Nav.Link href='#skills'>Skills &amp; Tools</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavMenu
