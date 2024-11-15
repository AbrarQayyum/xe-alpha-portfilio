import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb"; // Uncomment if you want to include Go
// import { DiPython, DiJava } from "react-icons/di"; // Uncomment if you want to include Python and Java

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      
      {/* JavaScript Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      {/* Node.js Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      
      {/* React Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      {/* Solidity Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      
      {/* MongoDB Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      
      {/* Next.js Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      
      {/* Git Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      {/* Firebase Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      
      {/* Redis Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>

      {/* Uncomment to include additional technologies */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
