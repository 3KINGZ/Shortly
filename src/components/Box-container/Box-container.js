import React from "react";
import Box from "../Box/Box";
import recognition from "./images/icon-brand-recognition.svg";
import records from "./images/icon-detailed-records.svg";
import customizable from "./images/icon-fully-customizable.svg";
import "./Box-container.css";

const BoxContainer = () => {
  return (
    <div className="box-container">
      <Box
        icon={recognition}
        title="Brand Recognition"
        content="Boost your brand recognition with each link. Generic links don't mean a thing. Branded links help instill confidence in your content"
      />
      <Box
        icon={records}
        title="Detailed Records"
        content="Gain insights into who is clicking your links. Knowing when and where people with your content helps inform better decisions"
      />
      <Box
        icon={customizable}
        title="Fully Customizable"
        content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
      />
    </div>
  );
};

export default BoxContainer;
