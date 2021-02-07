import React from "react";
import MonicaDinner from "../images/MonicaDinner.jpg";
import "../App.css";
import { useHistory } from "react-router-dom";

function HeaderImage() {
  let history = useHistory();

  return (
    <div className="header-container">
      <div className="circular--portrait">
        <img className="header-image" src={MonicaDinner} alt="header-image" />
      </div>

      <div className="blurb-container">
        <h3 className="blurb">
          Hi and welcome to my site!
          <br />
          <br />
          I'm Monica and I've been styling hair for 2 years now.
          <br />
          <br />I love coloring and working on new approaches to hair whenever I
          can!
        </h3>
        <div className="btn-container">
          <a
            onClick={() => {
              history.push("/about");
            }}
            href="#"
            className="button1"
          >
            About
          </a>

          <a
            onClick={() => {
              history.push("/contact");
            }}
            href="#"
            className="button2"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
