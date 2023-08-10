import React from "react";
import "./modProject.css";
import salon from "../images/salon.png";
import insti from "../images/insti.png";
import project3 from "../images/merged.jpg";

const ModernProjectDetails = () => {
  const projects = [
    {
      title: "Sal-online",
      description:
        "A React.js salon app is a web application that allows users to book appointments online for salon services. It provides a convenient way for customers to schedule their desired services and time slots from the comfort of their own homes.",
      image: salon,
      demoLink: "https://salon-front-end.vercel.app/",
      sourceLink: "https://github.com/example/salon-front-end",
    },
    {
      title: "Insti-App",
      description:
        "The Institute Management System is a TypeScript-based web application designed to streamline administrative tasks within an educational institute. It provides a user-friendly interface for managing student enquiries, student fees details, subject details, and a test module for students to take tests.",
      image: insti,
      demoLink: "https://example.com/insti-app",
      sourceLink: "https://github.com/example/insti-app",
    },
    {
      title: "API Data Fetching Project",
      description:
        "A React.js project that demonstrates fetching data from various APIs, including Bitcoin data and news. It includes features like pagination and search functionality to provide a seamless user experience when exploring different datasets.",
      image: project3,
      demoLink: "https://example.com/api-data-fetching",
      sourceLink: "https://github.com/example/api-data-fetching",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h2 className="project-heading">My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.demoLink}
                    className="project-demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    className="project-source-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernProjectDetails;
