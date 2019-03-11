import React from "react";
import "./Controller.css";

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="addBtn" onClick={onCreate}>
        Add
      </div>
    </div>
  );
};

export default Form;
