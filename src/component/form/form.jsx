import React from "react";
import PropTypes from "prop-types";
import "./form.css";

function Form(props) {
  const { dis } = props;

  return (
    <div className="register" style={{ display: dis }}>
      <div className="inBel">
        <label htmlFor="">Title:</label>
        <input type="number"></input>
      </div>

      <div className="inBel">
        <label htmlFor="">Creator:</label>
        <input type="text"></input>
      </div>

      <div className="inBel">
        <label htmlFor="">Description:</label>
        <input type="text"></input>
      </div>

      <button>Register</button>
    </div>
  );
}

export default Form;
