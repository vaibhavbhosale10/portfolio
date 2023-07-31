import React from "react";
import "./project.css";
import salon from "../images/salon.png";
import insti from "../images/insti.png";
import project3 from "../images/merged.jpg";
const ProjectDetails = () => {
  const projects = [
    {
      title: "Sal-online",
      description:
        "A React.js salon app is a web application that allows users to book appointments online for salon services. It provides a convenient way for customers to schedule their desired services and time slots from the comfort of their own homes.",
      image: salon,
      demoLink: "https://salon-front-end.vercel.app/",
      sourceLink: "https://salon-front-end.vercel.app/",
    },
    {
      title: "Insti-App",
      description:
        "The Institute Management System is a TypeScript-based web application designed to streamline administrative tasks within an educational institute.It provides a user-friendly interface for managing student enquiries, student fees details, subject details, and a test module for students to take tests.",
      image: insti,
      demoLink: "https://example.com/project2",
      sourceLink: "https://github.com/example/project2",
    },
    {
      title: "API Data Fetching Project",
      description:
        "A React.js project that demonstrates fetching data from various APIs, including Bitcoin data and news. It includes features like pagination and search functionality to provide a seamless user experience when exploring different datasets.",
      image: project3,
      demoLink: "https://example.com/project2",
      sourceLink: "https://github.com/example/project2",
    },
    // Add more projects as needed
  ];
  return (
    <div className="projects-section-wrapper">
      <section id="projects" className="project-section">
        <div className="container">
          <h2 style={{ color: "darkBlue", textDecoration: "underline" }}>
            My Projects
          </h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p style={{ color: "black" }}>{project.description}</p>
                  <div className="project-links">
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
