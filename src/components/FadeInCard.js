import React from "react"
import { Card, Col } from "react-bootstrap"

function FadeInCard(props) {
  const { image, title } = props
  return (
    <Col className='d-flex justify-content-center'>
      <Card className='border-0 card-size'>
        <Card.Img variant='top' src={image} className='card-img-size' />
        <Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default FadeInCard
