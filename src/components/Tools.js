import React, { useEffect, useState } from "react"
import { Container, CardGroup, Row, Col } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

//components
import FadeInCard from "./FadeInCard"

//images
import babelLogo from "../assets/images/babel.svg"
import firebaseLogo from "../assets/images/firebase.svg"
import gitLogo from "../assets/images/Git.svg"
import githubLogo from "../assets/images/github.svg"
import mongodbLogo from "../assets/images/MongoDB.svg"
import netlifyLogo from "../assets/images/netlify.svg"
import npmLogo from "../assets/images/npm.svg"
import postmanLogo from "../assets/images/postman.svg"
import vscodeLogo from "../assets/images/vs-code.svg"
import webpackLogo from "../assets/images/webpack.svg"

function SkillsTools() {
  const { ref, inView, entry } = useInView()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(inView)
    }
  }, [inView])
  return (
    <Container id='tools' fluid className='top-padding'>
      <h1 className='text-center'>Tools</h1>
      <CardGroup className='top-padding d-flex flex-row justify-content-center'>
        <Row
          sm={2}
          md={2}
          lg={5}
          xl={5}
          xxl={5}
          ref={ref}
          className={`fade-in ${isVisible ? "is-visible" : ""}`}
        >
          <FadeInCard image={babelLogo} title='Babel' />
          <FadeInCard image={firebaseLogo} title='Firebase' />
          <FadeInCard image={gitLogo} title='Git' />
          <FadeInCard image={githubLogo} title='Github' />
          <FadeInCard image={mongodbLogo} title='MongoDB' />
          <FadeInCard image={netlifyLogo} title='Netlify' />
          <FadeInCard image={npmLogo} title='NPM' />
          <FadeInCard image={postmanLogo} title='Postman' />
          <FadeInCard image={vscodeLogo} title='VS Code' />
          <FadeInCard image={webpackLogo} title='Webpack' />
        </Row>
      </CardGroup>
    </Container>
  )
}

export default SkillsTools
