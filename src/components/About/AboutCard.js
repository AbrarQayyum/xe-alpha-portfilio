import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abrar Qayyum (Axe Alpha)</span>,
            <br />
            a passionate developer with a background in Computer Science from UMT.
            <br />
            I have completed my Integrated BS in Software Engineering.
            <br /><br />
            Apart from coding, here are some activities I love:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>
          <p style={{ color: "rgb(155, 126, 172)" }}>
            "The best code is the one that solves problems!" 
          </p>
          <footer className="blockquote-footer">Abrar Qayyum (Axe Alpha)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
