import React, { useEffect, useState } from "react"
import { Container, CardGroup, Row } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

//components
import FadeInCard from "./FadeInCard"

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
            tools={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "Vue",
              "Node.js",
              "Express.js",
              "Mongoose.js",
              "Webpack",
              "Babel"
            ]}
          />
          <FadeInCard
            image='expensify'
            title='Expensify App'
            projects={true}
            text='Some example text here'
            tools={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "React",
              "Redux",
              "Firebase",
              "Node.js",
              "Express.js",
              "Webpack",
              "Babel"
            ]}
          />
          <FadeInCard
            image='complex'
            title='Complex Social Media App'
            projects={true}
            text='Some example text here'
            tools={[
              "HTML",
              "CSS",
              "Sass",
              "JavaScript",
              "React",
              "MongoDB",
              "Node.js",
              "Express.js",
              "Webpack",
              "Babel"
            ]}
          />
        </Row>
      </CardGroup>
    </Container>
  )
}

export default Projects
