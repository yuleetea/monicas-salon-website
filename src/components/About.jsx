import React, { Fragment } from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import MonicaCafe from "../images/MonicaCafe.jpg";

const WrapperContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function About() {
  return (
    <div>
      <NavBar />
      <fragment>
        <WrapperContainer>
          <div className="about-section">
            <div className="inner-container">
              <h1>About Us</h1>
              <p className="text">
                Ad enim id esse culpa id nisi officia aute. Tempor mollit labore
                cupidatat incididunt do anim. Adipisicing id duis consectetur id
                laboris minim non consequat non sunt pariatur.Consectetur
                excepteur eu tempor aliqua. Ex enim excepteur occaecat consequat
                consectetur enim qui proident. Consectetur excepteur eu tempor
                aliqua. Ex enim excepteur occaecat consequat consectetur enim
                qui proident.
              </p>
              <div className="skills">
                <span> Stylist </span>
                <span> Coloring </span>
                <span> Design </span>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </fragment>
    </div>
  );
}

export default About;
