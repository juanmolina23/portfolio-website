import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

function Footer() {
  return (
    <Container
      fluid
      id='footer'
      className='text-white d-flex flex-column justify-content-center'
    >
      <Row
        sm={1}
        md={1}
        lg={3}
        xl={3}
        xxl={3}
        className='justify-content-center text-center'
      >
        <Col className='contact-info-ctn d-flex justify-content-center w-100'>
          <div className=' contact-info'>
            <i className='fas fa-map-marker-alt'> Miami, FL</i>
          </div>
          <div className='contact-info'>
            <i className='fas fa-phone'> (305) 798-7154</i>
          </div>
          <div className='contact-info'>
            <i className='fas fa-envelope'> juanmolinajiron@gmail.com</i>
          </div>
        </Col>
      </Row>
      <Row
        sm='auto'
        md='auto'
        lg='auto'
        xl='auto'
        xxl='auto'
        className='flex-row justify-content-center'
      >
        <Col className='text-end'>
          <a target='_blank' href='https://github.com/juanmolina23'>
            <i className='fab fa-github social-icon'></i>
          </a>
        </Col>
        <Col className='text-start'>
          <a href='https://www.linkedin.com/in/juanmolina23/' target='_blank'>
            <i className='fab fa-linkedin social-icon'></i>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center'>© Juan Molina 2021</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
