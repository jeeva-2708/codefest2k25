import React from 'react'
import {Link } from "react-router-dom";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div>
      <div>
        <div></div>
        <div>
            <h3>Quick Links</h3>
            {/* <Link to="/">Home</Link>
            <Link to="/components/Events">Event</Link>
            <Link to="/components/AboutUs">AboutUs</Link>
            <Link to="/components/Informations">Informations</Link> */}
        </div>
        <div>
            <h3>Contact Us</h3>
            <p></p>
        </div>
        <div>
            <h3>More Details</h3>

            <p></p>
        </div>
      </div>
      <div>
        <p>@ 2025 CODEFEST2K25.All rights reserved.</p> 
      </div>
    </div>
  )
}

export default Footer