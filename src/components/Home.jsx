import React from "react";
import NavBar from "./NavBar";
import HeaderImage from "./HeaderImage";
import ImagesContainer from "./ImagesContainer";

function Home() {
  return (
    <>
      <div className="App">
        <NavBar />
        <br />
        <HeaderImage />
      </div>

      <section className="images-container">
        <ImagesContainer />
      </section>
    </>
  );
}

export default Home;
