import React from "react";
import "./Loader.css";
import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <RotateLoader color="blue" />
    </div>
  );
};

export default Loader;
