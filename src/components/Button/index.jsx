import React from "react";
import "../../button.css";
import failure from "/public/failure.svg";
import success from "/public/success.svg";

const DefaultButton = (props) => {
  switch (props.condition) {
    case "true":
      return (
        <a
          id={props.id}
          href={props.href}
          className="defaultButton successButton"
          style={props.style}
          onClick={props.onClick}
        >
          <img src={success} alt="success" />
          {props.text}
        </a>
      );

    case "false":
      return (
        <>
          <a
            id={props.id}
            href={props.href}
            className="defaultButton failureButton"
            style={props.style}
            onClick={props.onClick}
          >
            <img src={failure} alt="failure" /> {props.text}
          </a>
          <h5 className="failureMessage">This person does not exist</h5>
        </>
      );

    default:
      return (
        <a
          id={props.id}
          href={props.href}
          className={`defaultButton ${props.className}`}
          style={props.style}
          onClick={props.onClick}
        >
          {props.text}
        </a>
      );
  }
};

export default DefaultButton;
