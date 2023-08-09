import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./projects/project";
import Experience from "./Experience/Experience";
import ScrollspyExample from "./effect/scrollspy";
import NavScrollExample from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "./loader/loader";

function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 5;
        return newPercentage > 100 ? 100 : newPercentage;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      {loadingPercentage < 100 ? (
        <Loader percentage={loadingPercentage} />
      ) : (
        <div>
          <ScrollspyExample />
        </div>
      )}

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
