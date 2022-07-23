import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./nav.css";

ListItem.prototype = {
  taskName: PropTypes,
  taskNumber: PropTypes,
  taskText: PropTypes,
};

function ListItem(props) {
  const { taskName, taskNumber, taskText, coo } = props;
  // ^ là 'destructuring' của props

  const [stt, setStt] = useState("New"); //là <p>
  const [btn, setBtn] = useState("Start"); //button
  const [color, setColor] = useState("Green");

  function check() {
    if (btn === "Start") {
      setColor("red");
      setBtn("Done");
      setStt("Doing");
    } else if (btn === "Done") {
      setColor("blue");
      setBtn("Renew");
      setStt("Done");
    } else {
      setColor("Green");
      setBtn("Start");
      setStt("New");
    }
  }
  return (
    <div className="itemCard" style={{ display: coo }}>
      <b>Title: Task {taskNumber}</b>
      <p>Creator: {taskName}</p>
      <p style={{ color: color }}>Status:{stt}</p>
      <p className="text">
        Description: <br />
        {taskText}
      </p>
      <button onClick={check}>{btn}</button>
    </div>
  );
}

export default ListItem;
