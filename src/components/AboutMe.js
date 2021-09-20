import React, { useEffect, useState } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

import gradPic from "../assets/grad-img.jpg"

function AboutMe() {
  const { ref, inView, entry } = useInView()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(inView)
    }
  }, [inView])

  return (
    <Container fluid id='about' className='top-padding'>
      <div id='image-container'>
        <Image
          src={gradPic}
          fluid
          roundedCircle
          ref={ref}
          className={`margin-bottom fade-in ${isVisible ? "is-visible" : ""}`}
        />
      </div>
      <div id='about-me-summary'>
        <h1 className='text-start'>About Me</h1>
        <p className='text-start'>
          Hi there! My name is Juan Molina, and I am a Software Developer who is
          passionate about developing apps that solve real world problems.
        </p>
        <p>
          My career in software development began during my freshman year of
          college when I joined Upsilon Pi Epsilon (UPE) at Florida
          International University and attended ShellHacks, Florida's largest
          hackathon. However, my passion for technology dates back to when I was
          12 years old after receiving my very first Dell computer running
          Windows Vista.
        </p>
        <p>
          During my undergraduate program, I began pursuing a degree in
          Information Technology with a focus in software development. I
          completed multiple courses in programming using Java, relational
          databases with MySQL, and enterprise security. Although I enjoyed
          programming with Java, it wasn't until taking a web development
          course, in which I experienced creating web-based applications in
          JavaScript, that I became passionate about developing.
        </p>
        <p>
          Since then, I've created multiple web based applications to tackle
          different types of scenarios.
        </p>
        <p>
          I have built full-stack web applications using the MERN stack in which
          consists of React.js, Node.js, Express.js, and MongoDB in solo
          projects, group projects and hackathons. I am constantly working on my
          craft all the while learning new technologies to add to my skillset.
          After a full day of coding, I like to binge watch netflix series and
          go on long walks with my dog, Ghost.
        </p>
      </div>
    </Container>
  )
}

export default AboutMe
