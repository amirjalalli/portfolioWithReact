import "./WorkCart.css";
import WorkCart from "./WorkCart";
import workData from "./workData";
import React from "react";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">projects</h1>
      <div className="Project-container">
        {workData.map((val, index) => {
          return (
            <WorkCart
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
