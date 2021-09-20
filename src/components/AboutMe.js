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
          Hi there! My name is Juan Molina, and I'm a Software Developer who is
          passionate about developing apps that solve real world problems.
        </p>
        <p>
          My career in software development began during my Freshman Year of
          college when I joined UPE at Florida International University and
          attended ShellHacks, Florida's largest hackathon. However, my love for
          technology dates back to when I was just 12 years old when I got my
          very first Dell computer running Windows Vista!
        </p>
        <p>
          During my undergrad, I began pursuing a degree in Information
          Technology with a focus on software development in which I took
          multiple programming courses in Java. I also took courses related to
          relational databases with MySQL and enterprise security. Although I
          enjoyed programming with Java, it wasn't until taking web development,
          in which I learned about creating web-based applications with
          JavaScript, that I really fell in love with developing.
        </p>
        <p>
          Since then, I've created multiple web applications to tackle different
          types of problems.
        </p>
        <p>
          I have built full-stack web applications using the MERN stack in which
          consists of React.js, Node.js, Express.js, and MongoDB in solo
          projects, group projects and hackathons. I am always learning new
          technologies to add to my skillset ad constantly finding new ways to
          effectively handle different problems and scenarios. After a full day
          of coding, I like to binge watch netflix series and go on long walks
          with my dog, Ghost.
        </p>
      </div>
      {/* <div className='border border-dark about-me-img-container'>
        <img
          src={profilePic}
          alt=''
          ref={ref}
          className={`border border-dark about-me-img fade-in ${
            isVisible ? "is-visible" : ""
          }`}
        />
      </div>
      <div className='flex-column border border-dark about-me-summary '>
        <h1 className='text-start'>About Me</h1>
        <p className='text-start'>
          Hi! My name is Juan Molina, and I'm a Software Developer who is
          passionate about developing apps that solve real world problems, and
          also caring for my houseplants.
        </p>
        <p>
          My career in web development began when I worked for a interior design
          company building online catalogs with HTML and CSS that the designers
          would use to customize homes for new homebuyers, and in four years I
          helped sell over 3000 new homes throughout California and Colorado.
        </p>
        <p>
          I wanted to challenge myself and looked into JavaScript. I was hooked
          once I realized I can use logic to create dynamic and interactive web
          pages and apps. I decided to quit my job to learn software development
          fulltime at LearningFuze to become a software developer. One of my
          first projects was a recipe finder app to help my friends with dietary
          restrictions find new ideas for meals, and now they use it as part of
          their daily routine for meal planning.
        </p>
        <p>
          Those are the kinds of problems I like to solve to help make the world
          a little better.
        </p>
        <p>
          I have built full-stack web applications using React.js, Node.js,
          Express, and PostgreSQL in solo projects and group hackathons, and I
          am always learning new technologies to add to my skillset. After a
          full day of coding, I pamper my houseplants, laugh about life with my
          roommates, and think about the next new app I can create.
        </p>
      </div> */}
    </Container>
  )
}

export default AboutMe
