import React from "react";
import "../../button.css";
import failure from "/public/failure.svg";
import success from "/public/success.svg";

const DefaultButton = (props) => {
  switch (props.condition) {
    case "success":
      return (
        <a
          href="#"
          className="defaultButton successButton"
          style={props.style}
          onClick={props.onClick}
        >
          <img src={success} alt="success" />
          {props.text}
        </a>
      );

    case "failure":
      return (
        <a
          href="#"
          className="defaultButton failureButton"
          style={props.style}
          onClick={props.onClick}
        >
          <img src={failure} alt="failure" /> {props.text}
        </a>
      );

    default:
      return (
        <a
          href="#"
          className="defaultButton"
          style={props.style}
          onClick={props.onClick}
        >
          {props.text}
        </a>
      );
  }
};

export default DefaultButton;
