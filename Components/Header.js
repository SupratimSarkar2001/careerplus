import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20190728/ourmid/pngtree-growth-business-career-growth-heaven-ladder-stairs-abstrac-png-image_1620606.jpg"
          alt=""
        />
      </Link>
      <div className="menu">
        <Link to="/job">Job</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="profileContainer">
        <h2 className="userName">
          Career<span>+</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
