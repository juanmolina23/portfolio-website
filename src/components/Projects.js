import React, { useEffect, useState } from "react"
import { Container, CardGroup, Row } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

//components
import FadeInCard from "./FadeInCard"

//Images
import underlinePic from "../assets/the-underline.jpg"
import expensifyPic from "../assets/expensify.jpg"
import complexPic from "../assets/complex-app.png"

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
            image={underlinePic}
            link='https://sparkdevteams.github.io/underline-frontend/#/'
            title='The Underline'
            projects={true}
            text='
            The Underline is a non-profit organization with a close partnership with FIU. 
            Together we developed An Event Management System with features such as authentication, and authorization using modern technologies.'
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
            image={expensifyPic}
            link='https://molina-expensify-app.herokuapp.com/'
            title='Expensify App'
            projects={true}
            text='Expensify is one of my first solo projects I developed as I began my career in software development. It is a web application
             that allows users to keep track of their expenses. It has on-demand features such as authentication with Google.'
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
            image={complexPic}
            link='https://molina-complexapp.netlify.app/'
            title='Complex Social Media App'
            projects={true}
            text='Complex App is blog-style social media platform in which users can create an account, create simple blogs, follow other users and instant message with them.
             It has many desirable features and it was for the most part of the most complex project to date.'
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
