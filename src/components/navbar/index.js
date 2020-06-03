import React from "react";
import "./style.css";

let Navbar = function (props) {
  return (
    <nav className="navbar navbar-dark info-color-dark">
      <span className="navbar-brand">{props.title}</span>
    </nav>
  );
};

export default Navbar;
