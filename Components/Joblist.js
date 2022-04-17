import React from "react";
import "./joblist.css";
import { Link } from "react-router-dom";

function Joblist({ title, srcImg }) {
  return (
    <div className="card">
      <div className="cardname">{title}</div>
      <img className="imageCard" src={srcImg} alt="" />
      <p>Fill the form with your details.</p>
      <button>
        <Link to="/fill">Apply</Link>
      </button>
    </div>
  );
}

export default Joblist;
