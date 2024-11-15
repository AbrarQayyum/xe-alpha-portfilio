import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/AbrarQayyum",
    icon: <AiFillGithub />,
  },
  {
    href: "https://www.facebook.com/yourprofile", // Replace with your Facebook profile link
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.linkedin.com/in/abrar-qayyum-92a816174/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://www.instagram.com/axe_alpha1/",
    icon: <AiFillInstagram />,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Abrar Qayyum (Axe Alpha)</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Axe Alpha</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socialLinks.map(({ href, icon }) => (
              <li className="social-icons" key={href}>
                <a href={href} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

