import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows, // Windows icon
  SiLinux,   // Linux Mint icon
  SiMicrosoftoffice, // Office icon
  SiClickup, // ClickUp icon
  SiCanva,   // Canva icon
  SiSkype,   // Skype icon
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Windows Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      
      {/* Linux Mint Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      
      {/* Visual Studio Code Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      {/* Postman Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      
      {/* Slack Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      
      {/* Vercel Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      
      {/* Microsoft Office Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>

      {/* ClickUp Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>

      {/* Canva Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>

      {/* Skype Icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSkype />
      </Col>
    </Row>
  );
}

export default Toolstack;


