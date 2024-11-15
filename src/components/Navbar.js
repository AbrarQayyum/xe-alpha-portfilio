import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineYoutube, AiFillStar } from "react-icons/ai";

function NavBar() {
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Home">
          <img src={logo} alt="Brand Logo" className="img-fluid logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" aria-label="Home">
              <AiOutlineHome /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" aria-label="About">
              <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" aria-label="Projects">
              <AiOutlineFundProjectionScreen /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" aria-label="Resume">
              <CgFileDocument /> Resume
            </Nav.Link>
            <Nav.Link href="https://www.youtube.com/watch?v=x3J3S8n0O5M" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <AiOutlineYoutube /> YouTube
            </Nav.Link>
            <Nav.Item className="fork-btn">
              <Button href="https://github.com/AbrarQayyum" target="_blank" rel="noopener noreferrer" className="fork-btn-inner">
                <CgGitFork /> <AiFillStar />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
