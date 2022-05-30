import "./HeroImg.css";
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src="./header.jpg" alt="headerImage" className="into-img" />
      </div>
      <div className="content">
        <p>HI, I'M FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
