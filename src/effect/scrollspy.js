import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pp from "../images/PP.jpg";
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
function ScrollspyExample() {
  const styles = {
    home: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      marginTop: "-5%",
    },
    desc: {
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      borderRadius: "4px",
    },
    profileImg: {
      marginLeft: "20%",
      // Add your styles for the profile image here
    },
  };
  return (
    <div>
      <nav id="navbar-example2" className="navbar navbar-light bg-dark px-5 ">
        <a style={{ color: "white" }} className="navbar-brand" href="#">
          VB
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a style={{ color: "#cccccc" }} className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "#cccccc" }}
              className="nav-link"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "#cccccc" }}
              className="nav-link"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              style={{ color: "#cccccc" }}
              className="nav-link"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
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
              <h1 style={{ color: "darkBlue" }}>Hi, I'm Vaibhav Bhosale</h1>
              <h4 style={{ color: "#666666" }}>
                Welcome to my portfolio! As a MERN stack developer, I specialize
                in building robust and scalable web applications using the
                powerful combination of MongoDB, Express.js, React.js, and
                Node.js. With a solid understanding of front-end and back-end
                development, I have a passion for creating dynamic and
                user-friendly interfaces that provide exceptional user
                experiences.
              </h4>
            </Col>
            <Col>
              <div style={styles.profileImg} className="profile-img">
                <img
                  src={pp}
                  style={{ height: "300px", width: "300px" }}
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
        <h4 id="contact"></h4>
        <ContactForm />
      </div>
    </div>
  );
}

export default ScrollspyExample;
