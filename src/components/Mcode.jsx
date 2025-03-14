import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Time from "./Time";
import NonTechnicalEvents from "./NonTechnicalEvents";
import TechnicalEvents from "./TechnicalEvents";





const Mcode = () => {
  const [text, setText] = useState("Registration Open");

  const reg = () => {
    setText(
      text === "Registration Open" ? "Registration Close" : "Registration Open"
    );
  };

  window.addEventListener("scroll", function () {
    const animatedElement = document.querySelector(".animated-element");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Pause the animation when scrolling
    if (scrollTop > 0) {
      animatedElement.style.animationPlayState = "paused";
    } else {
      animatedElement.style.animationPlayState = "running";
    }
  });
  


 
  return (
    <div >
      <Header/>
      {/* main sec */}
      <section
        className="main container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="animated-element"
          style={{
            fontFamily: "Cyber Alert",
            color: "#fbccfd",
            fontSize: "45px",
          }}
        >
          CODEFEST 2K25
        </h1>
      </section>
          <Time/>

      <section>
        {/* EventCard with EventList */}
        <NonTechnicalEvents/>
        <TechnicalEvents/>
      </section>

        <Footer/>
      
    </div>
  );
};

export default Mcode;
