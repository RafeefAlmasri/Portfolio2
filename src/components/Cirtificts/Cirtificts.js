import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CitirtifctsCard from "./CirtifictCard";
import Particle from "../Particle";
import Project9 from "../../Images/9.jpeg";
import Project10 from "../../Images/10.jpeg";
import Project11 from "../../Images/11.jpeg";
import Project12 from "../../Images/12.jpeg";
import Project13 from "../../Images/13.jpeg";
import Project14 from "../../Images/14.jpeg";
import Project15 from "../../Images/15.jpeg";
import Project16 from "../../Images/16.jpeg";
import Project17 from "../../Images/17.jpeg";
import Project18 from "../../Images/18.jpeg";
import Project19 from "../../Images/19.jpeg";
import Project20 from "../../Images/20.jpeg";
import Project22 from "../../Images/22.jpeg";

function Citirtifcts() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Citirtifcts </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Citirtifcts I've earned it.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project9}  
              title="Crown Prince Foundation"

            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project10}
              title="Liwan Youth Organization"

            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project11}        
              title="Albalasmeh Business Company"
  
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project12}
              title="Data Stream Team"

            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project13}    
              title="EFE Company"
   
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project14}
              title="EFE Company"
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project15}
              title="Soul Team"
            />
          </Col>

          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project16}
              title="Coch You Team"
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project17}
              title="IEEE BAU"
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project18}
              title="Jordanian Forum for Youth Creativity"
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project19}
              title="Dot Jordan Company"
            />
          </Col>
          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project20}
              title="Dot Jordan Company"
            />
          </Col>
   
   

          <Col md={4} className="project-card">
            <CitirtifctsCard
              imgPath={Project22}
              title="Know-How Center"
            />
          </Col>
   
        </Row>
      </Container>
    </Container>
  );
}

export default Citirtifcts;
