import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Experience.css";
import html from "../images/html5-logo-31813.png";
import css from "../images/css-3-logo-023C1A7171-seeklogo.com.png";
import js from "../images/js-logo-png-5.png";
import react from "../images/1611079.png";
import mongo from "../images/free-mongodb-3629020-3030245.webp";
import git from "../images/512x512-logo-github-icon-35.png";
import bootstrap from "../images/bootstrap.png";
import redux from "../images/redux.png";
import Visual from "../images/visualcode.png";
import postman from "../images/postman.png";
import ts from "../images/typescript.png";
import express from "../images/express.png";

const Experience = () => {
  const htmlOfficialUrl = "https://developer.mozilla.org/en-US/docs/Web/HTML";
  const cssOfficialUrl = "https://developer.mozilla.org/en-US/docs/Web/CSS";
  const jsOfficialUrl =
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
  const reactOfficialUrl = "https://reactjs.org/docs/getting-started.html";
  const mongoOfficialUrl = "https://docs.mongodb.com/";
  const gitOfficialUrl = "https://docs.github.com/en";
  const bootstrapOfficialUrl =
    "https://getbootstrap.com/docs/5.1/getting-started/introduction/";
  const vscodeOfficialUrl = "https://code.visualstudio.com/docs";
  const typescriptOfficialUrl = "https://www.typescriptlang.org/docs/";
  const reduxOfficialUrl = "https://redux.js.org/introduction/getting-started";
  const expressOfficialUrl = "https://expressjs.com/en/starter/installing.html";
  const postmanOfficialUrl =
    "https://learning.postman.com/docs/getting-started/introduction/";

  return (
    <div className="maincontainer">
      <Container className="subContainer">
        <h2 style={{ color: "darkBlue", textDecoration: "underline" }}>
          Experience
        </h2>
        <p style={{ color: "black" }}>
          These are the technologies that I've worked with
        </p>
        <Row className="project-grid">
          <Col
            Col
            lg={3}
            md={6}
            xs={3}
            className="d-flex justify-content-center"
          >
            <div
              className="logo"
              onClick={() => window.open(htmlOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={html}
                alt="HTML Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(cssOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={css}
                alt="CSS Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(jsOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={js}
                alt="JavaScript Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(reactOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={react}
                alt="React Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(mongoOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={mongo}
                alt="MongoDB Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(gitOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={git}
                alt="Git Logo"
              />
            </div>
          </Col>

          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(bootstrapOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={bootstrap}
                alt="Bootstrap Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(vscodeOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={Visual}
                alt="Visual Studio Code Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(typescriptOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={ts}
                alt="TypeScript Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(reduxOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={redux}
                alt="Redux Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(expressOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={express}
                alt="Express Logo"
              />
            </div>
          </Col>
          <Col lg={3} md={6} xs={3} className="d-flex justify-content-center">
            <div
              className="logo"
              onClick={() => window.open(postmanOfficialUrl, "_blank")}
            >
              <img
                style={{ height: "120px", width: "120px" }}
                src={postman}
                alt="Postman Logo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
