import React from "react";
import "./About.css";
import imgAbout from "../../img/office-ge8c782f6d_1920.jpg";
import imgAward from "../../img/startup-g90d7fe83c_1920.jpg"

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" ></div>
        <div className="a-card">
          <img src={imgAbout} alt="" className="a-img"></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-tilte">
          About Me
        </h1>
        <p className="a-sub">
      It is a long established fact that a reader will be distracted by readable content 
        </p>
        <p className="a-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quaerat quae dolore, aut soluta sed libero officia! Odit, eligendi </p>
              <div className="a-award">
          <img src={imgAward} alt="" className="a-award-img"></img>
          <div className="a-award-texts">
            <h4 className="a-award-title">International design</h4>
            <p className="a-award-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum modi sint pariatur aperiam dolorum cum debitis facere illum maxime, explicabo ullam animi rem aspernatur, iste consectetur impedit, rerum libero sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
