import React from "react";
import styled from "styled-components";
import "../App.css";
import { SRLWrapper } from "simple-react-lightbox";
import hair1 from "../images/hair1.jpg";
import hair2 from "../images/hair2.jpg";
import hair3 from "../images/hair3.jpg";
import hair4 from "../images/hair4.jpg";
import hair5 from "../images/hair5.jpg";
import hair6 from "../images/hair6.jpg";
import hair7 from "../images/hair7.png";
import hair8 from "../images/hair8.png";
import hair9 from "../images/hair9.png";
import hair10 from "../images/hair10.png";
import hair11 from "../images/hair11.png";
import hair12 from "../images/hair12.png";
import hair13 from "../images/hair13.png";
import hair14 from "../images/hair14.png";
import hair15 from "../images/hair15.jpg";
import style1 from "../images/styles/style1.png";
import style2 from "../images/styles/style2.png";
import style3 from "../images/styles/style3.png";
import style4 from "../images/styles/style4.png";
import style5 from "../images/styles/style5.png";
import style6 from "../images/styles/style6.JPG";

const WrapperImage = styled.section`
  /* max-width: 70rem; */
  width: 60%;
  height: 100vh;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 350px;
  grid-gap: 40px;
  grid-row-gap: 200px;
  justify-content: center;
`;

function ImagesContainer() {
  return (
    <>
      <hr />
      <h1> Portfolio </h1>
      <SRLWrapper>
        <WrapperImage>
          <img
            className="container-image "
            alt="girl with bleached hair"
            src={hair1}
          />
          <img className="container-image " src={hair2} />
          <img className="container-image " src={hair3} />
          <img className="container-image " src={hair4} />
          <img className="container-image " src={hair5} />
          <img className="container-image " src={hair6} />
          <img className="container-image " src={hair7} />
          <img className="container-image " src={hair8} />
          <img className="container-image " src={hair9} />
          <img className="container-image " src={hair10} />
          <img className="container-image " src={hair11} />
          <img className="container-image " src={hair12} />
          <img className="container-image " src={hair13} />
          <img className="container-image " src={hair14} />
          <img className="container-image " src={hair15} />
          <img className="container-image " src={style1} />
          <img className="container-image " src={style2} />
          <img className="container-image " src={style3} />
          <img className="container-image " src={style4} />
          <img className="container-image " src={style5} />
          <img className="container-image " src={style6} />
        </WrapperImage>
      </SRLWrapper>
    </>
  );
}

export default ImagesContainer;
