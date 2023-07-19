import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import pp from "../images/self-modified.png";
import "../projects/project.css";
import salon from "../images/salon.png";
import "../Experience/Experience.css";
import html from "../images/html5-logo-31813.png";
import css from "../images/css-3-logo-023C1A7171-seeklogo.com.png";
import js from "../images/js-logo-png-5.png";
import react from "../images/1611079.png";
import mongo from "../images/free-mongodb-3629020-3030245.webp";
import git from "../images/512x512-logo-github-icon-35.png";
import ContactForm from "../Contact/Contact";
import ProjectDetails from "../projects/project";
import Experience from "../Experience/Experience";
import Link from "../Links/link";
import "./scrollspy.css";
import { useEffect } from "react";
function ScrollspyExample() {
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
      <nav
        className="navbar navbar-expand-lg  sticky-top"
        style={{ backgroundColor: "#F8F8FF" }}
      >
        <a style={{ color: "black" }} className="navbar-brand" href="#">
          VB
        </a>
        <button
          className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#home"
                onClick={handleHomeClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "black" }}
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
              <h1 style={{ color: "black" }}>Hi, I'm Vaibhav Bhosale</h1>
              <h5
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                Welcome to my portfolio! As a MERN stack developer, I specialize
                in building robust and scalable web applications using the
                powerful combination of MongoDB, Express.js, React.js, and
                Node.js. With a solid understanding of front-end and back-end
                development.
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
                    border: "2px solid darkBlue",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>

        <h4 id="projects"></h4>
        <ProjectDetails />
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
