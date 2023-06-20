import React from "react";
import cactus from "/public/cactus.svg";
import "/src/title.css";

const Title = ({ text }) => {
  return (
    <div className="titleField">
      <img src={cactus} />
      {text}
      <img src={cactus} />
    </div>
  );
};

export default Title;
