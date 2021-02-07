import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";

const backgroundColor = styled.div`
  background-color: #f4efe9;
`;

function Contact() {
  return (
    <div>
      <backgroundColor>
        <NavBar />
        <div className="contact-container">
          <header>Hope to see you soon!</header>

          <form id="form" class="topBefore">
            <input id="name" type="text" placeholder="NAME"></input>
            <input id="email" type="text" placeholder="E-MAIL"></input>
            <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
            <input id="submit" type="submit" value="GO!"></input>
          </form>
        </div>
      </backgroundColor>
    </div>
  );
}

export default Contact;
