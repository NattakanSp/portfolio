import React from "react";
import "./Intro.css";
import Me from "../../img/me-noBG.png"
import scroll from "../../img/scroll-down.svg";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nattakan Sanpa</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-tilte-item">Web deDeveloper</div>
              <div className="i-tilte-item">UI/UX Designer</div>
              <div className="i-tilte-item">Photographer</div>
              <div className="i-tilte-item">Writer</div>
              <div className="i-tilte-item">Content Creator</div>
            </div>
          </div>
          <div className="i-desc">
            <p>
              I design and develop services for customers of all, specializing in creating stylish, modern websites, web
              services and online stores.
            </p>
          </div>
        </div>
        <img className="i-scroll" src={scroll}></img>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="ME-png" className="i-img-me"></img>
      </div>
    </div>
  );
}

export default Intro;
