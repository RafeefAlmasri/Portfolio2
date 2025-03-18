import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Project3 from "../../Images/3.jpeg";
import Project4 from "../../Images/4.jpeg";
import Project5 from "../../Images/5.jpeg";
import Project6 from "../../Images/6.jpeg";
import Project7 from "../../Images/7.jpeg";
import Project8 from "../../Images/8.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project8}
              isBlog={false}
              title="Rafeef Portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project3}
              isBlog={false}
              title="Rafeef Travel"
              description="A website designed using HTML,CSS,JS, consisting of one page in the Arabic language, through which services and matters related to the travel."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project4}
              isBlog={false}
              title="PMCJO"
              description="A website designed using WordPress, consisting of 45 pages translated into Arabic and English, through which the programs and courses offered by PMC are displayed. These programs or courses can also be booked through the communication forms with the PMC work team."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project5}
              isBlog={false}
              title="Smart Card"
              description="A website designed using WordPress, consisting of one page in the Arabic language, through which services and matters related to the Visa card provided by Digital Code Company are displayed."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project6}
              isBlog={false}
              title="Coffee House"
              description="A website designed using WordPress, consisting of 10 pages in the Arabic & English languages, through which services and matters related to the Coffee House."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project7}
              isBlog={false}
              title="Rafeef Almasri"
              description="My CV website is designed using HTML, CSS, JS & React, and it displays my experiences and skills in software engineering and programming in general."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
