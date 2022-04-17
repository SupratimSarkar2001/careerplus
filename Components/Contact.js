import React from "react";
import "./contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Email,
  Instagram,
  LinkedIn,
  LocationCityRounded,
} from "@mui/icons-material";

function Contact() {
  return (
    <div className="contact">
      <div className="banner">
        <h1>14 Locations. 200+ Support Staffs.</h1>
        <p class="contact_p">
          Careerplus is the leading career assistant for the recruitment of
          qualified specialist staff in the following professional groups.
        </p>
      </div>
      <div className="contactsub">
        <div className="leftcon">
          <img
            src="https://www.clipartkey.com/mpngs/m/72-721462_graphic-royalty-free-library-location-clipart-gps-tracker.png"
            alt=""
          />
        </div>
        <div className="rightcon">
          <div className="phone">
            <h2>Phone Number</h2>
            <p>+91 6289718944</p>
            <div className="spandiv">
              <span>
                <LocationCityRounded />
              </span>
              <p>Kolkata,700001</p>
            </div>
            <div className="spandiv">
              <span>
                <Email />
              </span>
              <p>supratimsarkar2001@gmail.com</p>
            </div>
          </div>

          <div className="condetails">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
