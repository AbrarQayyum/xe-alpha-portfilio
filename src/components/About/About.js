import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard"; // Fixed casing for consistency
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={7} className="about-text">
            <h1 className="about-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col md={5} className="about-img" style={{ paddingTop: "120px" }}>
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
};

export default About;

