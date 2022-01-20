import React, { useContext } from "react";
import "./Toggle.css";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <BsMoonFill className="t-icon" style={{ color: darkMode && "black" }} />
      <BsSunFill className="t-icon" style={{ color: darkMode && "black" }} />
      <div className="t-button" onClick={handleClick} style={{ left: darkMode ? "25px" : "0px" }}></div>
    </div>
  );
}

export default Toggle;
