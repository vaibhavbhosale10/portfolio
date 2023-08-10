import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import pp from "../images/self-modified.png";
import salon from "../images/salon.png";
import "../Experience/Experience.css";
import html from "../images/html5-logo-31813.png";
import css from "../images/css-3-logo-023C1A7171-seeklogo.com.png";
import js from "../images/js-logo-png-5.png";
import react from "../images/1611079.png";
import mongo from "../images/free-mongodb-3629020-3030245.webp";
import git from "../images/512x512-logo-github-icon-35.png";
import ContactForm from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Link from "../Links/link";
import "./scrollspy.css";
import { Navbar, Nav } from "react-bootstrap";
import { useEffect } from "react";
import ModernProjectDetails from "../modernProject/modProject";

function ScrollspyExample() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleToggleButton = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const styles = {
    home: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      marginTop: "-1%",
    },
    desc: {
      textAlign: "center",

      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      borderRadius: "4px",
    },
  };
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const profileImg = document.querySelector(".profile-img");
      const desc = document.querySelector(".desc");

      profileImg.style.animation = "slideInFromRight 1s ease-in-out forwards";
      desc.style.animation =
        "slideInFromLeft 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards";

      setTimeout(() => {
        profileImg.style.animation = "none";
        desc.style.animation = "none";
        setAnimate(false);
      }, 1000);
    }
  }, [animate]);

  const handleHomeClick = () => {
    setAnimate(true);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand style={{ color: "black" }} href="#">
            Vaibhav
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
          <Navbar.Collapse
            id="navbarScroll"
            className={`${isNavOpen ? "show" : ""}`}
          >
            <Nav className="ms-auto me-3 my-2 my-lg-0">
              <Nav.Link
                href="#home"
                style={{ color: "black" }}
                onClick={handleHomeClick}
                className="ms-3"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                href="#projects"
                className="ms-3"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                href="#experience"
                className="ms-3"
              >
                Experience
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                href="#contact"
                className="ms-3"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <h4 id="home"></h4>
        <Container fluid className="home" style={styles.home}>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col xs={12} className="desc" style={styles.desc}>
              <h1 style={{ color: "white" }}>Hi, I'm Vaibhav Bhosale</h1>
              <h5
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                Welcome to my portfolio! I'm a MERN stack developer who's great
                at creating web apps. I'm familiar with Next.js for smart
                front-ends, Redux for organized data, and TypeScript for strong
                code. I focus on making user-friendly experiences and top-notch
                solutions.
              </h5>
            </Col>

            <Col className="pp">
              <div
                className="profile-img"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <img
                  src={pp}
                  style={{
                    height: "280px",
                    width: "280px",
                    marginLeft: "20%",
                    border: "2px solid white",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>

        <h4 id="projects"></h4>
        <ModernProjectDetails />
        <h4 id="experience"></h4>
        <Experience />
        <h3
          id="contact"
          style={{ color: "darkBlue", textDecoration: "underline" }}
        >
          Contact
        </h3>
        <ContactForm />
      </div>
    </div>
  );
}

export default ScrollspyExample;
