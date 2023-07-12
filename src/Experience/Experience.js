import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";
import html from "../images/html5-logo-31813.png";
import css from "../images/css-3-logo-023C1A7171-seeklogo.com.png";
import js from "../images/js-logo-png-5.png";
import react from "../images/1611079.png";
import mongo from "../images/free-mongodb-3629020-3030245.webp";
import git from "../images/512x512-logo-github-icon-35.png";
const Experience = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Container>
        <h2 style={{ color: "darkBlue", textDecoration: "underline" }}>
          Experience
        </h2>

        <p>These are the technologies that I've worked with</p>

        <Row>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={html}
                alt=""
              />
            </div>
          </Col>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={css}
                alt=""
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={js}
                alt=""
              />
            </div>
          </Col>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={react}
                alt=""
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={mongo}
                alt=""
              />
            </div>
          </Col>
          <Col lg={6} xs={6} className="d-flex justify-content-center">
            <div className="logo">
              <img
                style={{ height: "180px", width: "180px" }}
                src={git}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
{
  /* <Container
      style={{
        marginTop: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ textDecoration: "underline", borderBottomColor: "red" }}>
        Expierience
      </h2>

      <p>These are the technologies that i've worked with</p>
      <Row>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img
              style={{ height: "180px", width: "180px" }}
              src={html}
              alt=""
            />
          </div>
        </Col>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img style={{ height: "180px", width: "180px" }} src={css} alt="" />
          </div>
        </Col>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img style={{ height: "175px", width: "175px" }} src={js} alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img
              style={{ height: "180px", width: "180px" }}
              src={react}
              alt=""
            />
          </div>
        </Col>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img
              style={{ height: "180px", width: "180px" }}
              src={mongo}
              alt=""
            />
          </div>
        </Col>
        <Col lg={4} xs={4}>
          <div className="logo">
            <img style={{ height: "180px", width: "180px" }} src={git} alt="" />
          </div>
        </Col>
      </Row>
    </Container> */
}
