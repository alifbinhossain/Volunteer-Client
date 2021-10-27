import React from "react";
import logo from "../images/logos/Group 1329.png";

const Form = ({ children }) => {
  return (
    <div className="form">
      <img src={logo} alt="" />
      {children}
    </div>
  );
};

export default Form;
