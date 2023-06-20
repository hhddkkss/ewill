import React from "react";
import "../lighthouse.css";

const Lighthouse = () => {
  return (
    <div className="lighthouseContainer">
      <div className="wrap">
        <div className="text">
          <p className="number">13.32</p>
          <p className="title">who seeks after it and</p>
          <p className="title">wants to have it</p>
        </div>
        <div className="img-wrap">
          <img
            src="lighthouse.svg"
            alt="lighthouse"
            className="lighthouseImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Lighthouse;
