import React from "react";
import "./Box.css";

const Box = ({ icon, title, content }) => {
  return (
    <div className="container">
      <div>
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Box;
