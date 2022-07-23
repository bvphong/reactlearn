import React from "react";
import PropTypes from "prop-types";
import "./side.css";

Side.prototype = {};

function All() {
  alert("a");
}

function New() {}

function Doing() {
  alert("a");
}

function Done() {}
function Side(props) {
  return (
    <div className="sideBar">
      <p onClick={All}>All Task</p>
      <p onClick={New}>New Task</p>
      <p onClick={Doing}>Doing Task</p>
      <p onClick={Done}>Done Task</p>
    </div>
  );
}

export default Side;
