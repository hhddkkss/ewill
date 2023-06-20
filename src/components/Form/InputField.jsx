import React from "react";
import "/src/inputField.css";
const InputField = (props) => {
  return (
    <div className="myInputField">
      <label htmlFor={props.id}>
        {props.label}
        <span className="required">*</span>
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        list={props.list}
        value={props.value}
        required
      />
      <div className="helperText">{props.error}</div>
    </div>
  );
};

export default InputField;
