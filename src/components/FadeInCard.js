import React from "react"
import { Card, Col, Badge, Row } from "react-bootstrap"

function FadeInCard(props) {
  const { image, title, projects, text, tools } = props
  if (projects) {
    return (
      <Col className='d-flex justify-content-center '>
        <Card className='card-projects-size bg-transparent'>
          <Card.Img
            variant='top'
            className={`card-projects-img-size ${image}-cover `}
          />

          <Card.Body>
            <Card.Title className='text-center'>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Subtitle className='text-center'>
              Developed using:{" "}
            </Card.Subtitle>
            <Row sm={2} md={2} lg={2} xl={3} xxl={3}>
              {tools.map(tool => {
                return (
                  <Col key={tool}>
                    <Badge key={tool} pill className='badge-bg-color'>
                      {tool}
                    </Badge>
                  </Col>
                )
              })}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    )
  } else {
    return (
      <Col className='d-flex justify-content-center'>
        <Card className='border-0 card-size bg-transparent'>
          <Card.Img variant='top' src={image} className='card-img-size' />
          <Card.Body>
            <Card.Title className='text-center'>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default FadeInCard
