import React, { useEffect, useState } from "react"
import { Container, CardGroup, Row } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

//components
import FadeInCard from "./FadeInCard"

//images
import underlineCover from "../images/projects/underline.gif"

function Projects() {
  const { ref, inView, entry } = useInView()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(inView)
    }
  }, [inView])
  return (
    <Container id='projects' fluid className='top-padding'>
      <h1 className='text-center'>Projects</h1>
      <CardGroup className='top-padding d-flex justify-content-center'>
        <Row
          sm={1}
          md={1}
          lg={3}
          xl={3}
          xxl={3}
          ref={ref}
          className={`fade-in ${isVisible ? "is-visible" : ""}`}
        >
          <FadeInCard
            image='underline'
            title='The Underline'
            projects={true}
            text='Some example text here'
            tools={["test1", "test2", "test3", "test4"]}
          />
          <FadeInCard
            image='expensify'
            title='The Underline'
            projects={true}
            text='Some example text here'
            tools={["test1", "test2", "test3"]}
          />
          <FadeInCard
            image='complexapp'
            title='The Underline'
            projects={true}
            text='Some example text here'
            tools={["test1", "test2", "test3"]}
          />
        </Row>
      </CardGroup>
    </Container>
  )
}

export default Projects
