import React from "react";
import illustration from "./images/illustration-working.svg";
import "./intro.css";

function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand recongnition and get detailed insights on how your
          links are performing
        </p>
        <button>Get started</button>
      </div>
      <img src={illustration} alt="illustration" />
    </div>
  );
}

export default Intro;
