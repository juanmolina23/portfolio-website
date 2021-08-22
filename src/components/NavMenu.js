import React, { useEffect } from "react"
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap"
function NavMenu() {
  return (
    <Navbar sticky="top" expand="sm" bg="dark" variant="dark">
      <Container fluid={true} className="justify-content-between">
        <div>
          <Navbar.Brand>Juan Molina</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills &amp; Tools</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Button variant="primary" size="sm">
                Download Resume
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavMenu
