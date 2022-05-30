import "./WorkCart.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCart = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">projects</h1>
      <div className="Project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.view} className="btn">
                view
              </NavLink>
              <NavLink to="url.com" className="btn">
                sourc
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCart;
