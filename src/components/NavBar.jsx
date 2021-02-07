import React from "react";
import logo from "../images/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import { useHistory } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

function NavBar() {
  let history = useHistory();
  return (
    // Two divs, one for the logo and the other for the navbar itself

    <nav>
      <div className="logo">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="img-logo"
          src={logo}
          alt="site-logo"
        />
      </div>

      <ul className="navlinks">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
