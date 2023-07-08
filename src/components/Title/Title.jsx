import React from "react";
import cactus from "/public/cactus.svg";
import "../../scss/title.css";

const Title = ({ text, style }) => {
  return (
    <div className="titleField" style={{ ...style }}>
      <img src={cactus} />
      {text}
      <img src={cactus} />
    </div>
  );
};

export default Title;
