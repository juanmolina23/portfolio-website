import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useInView } from "react-intersection-observer"

import profilePic from "../images/profile-pic.png"

function AboutMe() {
  const { ref, inView, entry } = useInView()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(inView)
    }
  }, [inView])

  return (
    <Container fluid id="about" className="d-flex flex-row justify-content-center align-items-center border border-dark">
      <div className="border border-dark">
        <img src={profilePic} alt="" ref={ref} className={`border border-dark about-me-img fade-in ${isVisible ? "is-visible" : ""}`} />
      </div>
      <div className="flex-column border border-dark">
        <h1>About Me</h1>
        <p>Hi! My name is Juan Molina, and I'm a Software Developer who is passionate about developing apps that solve real world problems, and also caring for my houseplants.</p>
        <p>My career in web development began when I worked for a interior design company building online catalogs with HTML and CSS that the designers would use to customize homes for new homebuyers, and in four years I helped sell over 3000 new homes throughout California and Colorado.</p>
        <p>I wanted to challenge myself and looked into JavaScript. I was hooked once I realized I can use logic to create dynamic and interactive web pages and apps. I decided to quit my job to learn software development fulltime at LearningFuze to become a software developer. One of my first projects was a recipe finder app to help my friends with dietary restrictions find new ideas for meals, and now they use it as part of their daily routine for meal planning.</p>
        <p>Those are the kinds of problems I like to solve to help make the world a little better.</p>
        <p>I have built full-stack web applications using React.js, Node.js, Express, and PostgreSQL in solo projects and group hackathons, and I am always learning new technologies to add to my skillset. After a full day of coding, I pamper my houseplants, laugh about life with my roommates, and think about the next new app I can create.</p>
      </div>
    </Container>
  )
}

export default AboutMe
