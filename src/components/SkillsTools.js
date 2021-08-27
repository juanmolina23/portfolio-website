import React, { useEffect } from "react"

import { Card, CardGroup, Col, Container, Row } from "react-bootstrap"
import javascript from "../images/skills/javascript.svg"

function SkillsTools() {
  return (
    <Container fluid>
      <h1 className='text-center'>Technical Skills</h1>
      <CardGroup>
        <Row>
          <Col>
            <Card>
              <Card.Img variant='top' src={javascript} />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>
  )
}

export default SkillsTools
