import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql} from "react-icons/si";
import { TbBrandGolang ,TbBrandWordpress ,TbBrandPhp ,TbBrandMysql  } from "react-icons/tb";
import { FaReact ,FaNodeJs  } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
 
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
       
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandWordpress />
      </Col>
    </Row>
  );
}

export default Techstack;
