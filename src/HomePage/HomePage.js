import React from "react";
import NavbarHOME from "./Navbar";
import ProjectDetails from "../projects/project";
import Experience from "../Experience/Experience";
const Homepage = () => {
  return (
    <>
      <NavbarHOME />
      <ProjectDetails />
      <Experience />
    </>
  );
};

export default Homepage;
