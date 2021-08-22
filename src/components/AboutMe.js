import React, { useEffect } from "react"
import { Button } from "react-bootstrap"

import imageBg from "../images/main-bg2.jpg"
import profilePic from "../images/profile-pic.png"

function AboutMe() {
  return (
    <div id="about" className="aboutme-section">
      <img src={imageBg} className="image-bg" />
      <div className="testdiv">
        <img src={profilePic} alt="Profile picture" className="profile-pic" />
        <h1>Full-Stack Developer</h1>
        <Button variant="primary" size="lg">
          Download Resume
        </Button>
      </div>
    </div>
  )
}

export default AboutMe
