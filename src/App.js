import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./projects/project";
import Experience from "./Experience/Experience";
import ScrollspyExample from "./effect/scrollspy";
import NavScrollExample from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ScrollspyExample />
      {/* <Routes> */}
      {/* <Route path="/" element={<Homepage />} /> */}
      {/* <Route path="/projects" element={<ProjectDetails />} /> */}
      {/* <Route path="/experience" element={<Experience />} /> */}
      {/* </Routes> */}
      {/* <NavScrollExample /> */}
    </div>
  );
}

export default App;
