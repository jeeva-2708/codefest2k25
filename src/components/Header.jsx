import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Header.css"

import React from 'react'



const Header = () => {
  const [text, setText] = useState("Registration Open")

  const reg = () =>{
    setText(text === "Registration Open" ? "Registration Close" : "Registration Open")
  }
  // hamburger animation
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
    document.querySelector(".nav").style.display= isActive ? "none" : "flex";
  };

  return (
    <>
      {/* header */}
    <div className={`wrapper ${isActive ? "":"active"}`}
    style={{
      position: "fixed",
  
      width: "100%",
      zIndex: "1",
      padding: "20px",
      background: "rgba(255 ,244 , 254, 0.08 )",
            backdropFilter: "blur(10px)"
    }}
  >
    <div
      className="header container d-lg-flex justify-content-between align-items-center"
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3
          style={{
            fontFamily: "Cyber Alert",
            color: "#C42ECC",
            fontSize: "20px",
            margin: "0",
          }}
        >
          CODEFEST 2K25
        </h3>
        <a id="nav-toggle" className={isActive ? "active" : ""}
  onClick={handleClick} href="#">
          <span></span>
        </a>
      </div>
          
      <div
        className="nav d-lg-flex flex-column flex-lg-row gap-3 gap-lg-5 my-5 my-lg-0"
        style={{
          display: "none",
          color: "white",
          
        }}
      >
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div
        className={`register ${isActive ? "" : "d-none"} d-lg-block `}
        style={{
      
          color: "white",
          fontFamily: " JetBrains Mono",
        }}
      >
        <a
          style={{
            textAlign: "center",
            color: "#32cd32 ",
            fontSize: "17px",
            border: "1px solid #fff",
            padding: "15px",
            cursor: "pointer",
          }}
          onClick={reg}
        >
          {text}
        </a>
      </div>
    </div>
  </div>
    </>
        
  )
}

export default Header