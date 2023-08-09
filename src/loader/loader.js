import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./loader.css";

const Loader = ({ percentage }) => {
  return (
    <div className="loader-container">
      <ProgressBar now={percentage} label={`${percentage}%`} />
    </div>
  );
};

export default Loader;
