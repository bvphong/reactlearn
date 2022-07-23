import React, { useState } from "react";
import PropTypes from "prop-types";
import "./stylesHeader.css";
import Form from "../form/form";
import ListItem from "../navbar/nav";

Header.prototype = {};
// component =>  props  >main : tham số dùng trong hàm
//props is OBJECT  {propertie : value}
//etetetetete
//xóa dòng này đi
// nếu khai báo dạng :
// const { abc } = props ;
// thì abc là properties của props

// useState
//const [dcc, setDcc] = useState("abcdf"); thì dcc: là value của (callback function name) setDcc


// useState("abcdef") là giá trị hiện tại của dcc

function Header(props) {
  const { abc } = props;

  const [status, setStatus] = useState("none");
  const [dcc, setDcc] = useState("block");

  function DangNhap() {
    if (status === "none") {
      setStatus("block");
      setDcc("none");
    } else {
      setStatus("none");
      setDcc("block");
    }
  }
  return (
    <div className="header">
      <div className="leftHeader">
        <button onClick={DangNhap}>New Stask</button>
      </div>
      <Form dis={status} />

      <div className="list">
        <ListItem coo={dcc} />
        <ListItem coo={dcc} />
      </div>

      <div className="rightHeader">
        <input type="text" placeholder="" />
        <button>Sreach</button>
      </div>
    </div>
  );
}

export default Header;
