import React from "react";
import Typewriter from "typewriter-effect";
import "./fillform.css";
function FillForm() {
  return (
    <div className="form">
      <div className="sub">
        <form action="#">
          <h4>
            <Typewriter
              options={{
                strings: ["Fill The Form"],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="Highest Qualifications" />
          <input type="text" placeholder="12th Grade" />
          <input type="text" placeholder="Skills" />
          <input type="text" placeholder="Profile You Selected" />
          <input type="text" placeholder="Year of Exprience" />
          <button
            onClick={() => {
              window.alert("Thanks for Submitting");
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FillForm;
