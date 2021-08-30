import React, { useEffect, useState } from "react"
import { Container, CardGroup, Row, Col } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

//components
import FadeInCard from "./FadeInCard"

//images

import bootstrapLogo from "../images/skills/bootstrap.svg"
import cssLogo from "../images/skills/css3.svg"
import expressLogo from "../images/skills/express.svg"
import htmlLogo from "../images/skills/html5.svg"
import javascriptLogo from "../images/skills/javascript.svg"
import netCoreLogo from "../images/skills/net-core.svg"
import nodeLogo from "../images/skills/node-js.svg"
import reactLogo from "../images/skills/react.svg"

function SkillsTools() {
  const { ref, inView, entry } = useInView()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(inView)
    }
  }, [inView])
  return (
    <Container id='skills' fluid className='top-padding'>
      <h1 className='text-center'>Technical Skills</h1>
      <CardGroup className='top-padding d-flex flex-row justify-content-center'>
        <Row
          sm={2}
          md={2}
          lg={4}
          xl={4}
          xxl={4}
          ref={ref}
          className={`fade-in ${isVisible ? "is-visible" : ""}`}
        >
          <FadeInCard image={bootstrapLogo} title='Bootstrap' />
          <FadeInCard image={cssLogo} title='CSS3' />
          <FadeInCard image={expressLogo} title='Express' />
          <FadeInCard image={htmlLogo} title='HTML5' />
          <FadeInCard image={javascriptLogo} title='Javascript' />
          <FadeInCard image={netCoreLogo} title='.NET Core' />
          <FadeInCard image={nodeLogo} title='Node.js' />
          <FadeInCard image={reactLogo} title='React.js' />
        </Row>
      </CardGroup>
    </Container>
  )
}

export default SkillsTools
