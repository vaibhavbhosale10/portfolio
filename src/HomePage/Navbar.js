import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navbar.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import pp from "../images/PP.jpg";
const NavbarHOME = () => {
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
    },
    profileImg: {
      marginLeft: "20%",
      // Add your styles for the profile image here
    },
  };
  return (
    <>
      <Navbar style={{ fontSize: "25px" }} bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#Experience">Experience</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* home */}

      <Container fluid className="home" style={styles.home}>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col xs={12} className="desc" style={styles.desc}>
            <h1>Hi, I'm Vaibhav Bhosale</h1>
            <h4></h4>
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
    </>
  );
};

export default NavbarHOME;
