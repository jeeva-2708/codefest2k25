import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareInstagram,
  FaFacebook,
  FaMapLocationDot,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="container p-5">
        <div className="d-lg-flex justify-content-between">
          <div className="f-name">
            <h3>CODEFEST 2K25</h3>
            <p>
              <span className="d-block">
                Dive into the world of technology and innovation{" "}
              </span>
              at CodeFest 2K25. Join us on this thrilling journey!
            </p>
          </div>
          <div className="f-sub-name">
            <h3>Quick Links</h3>
            {/* <Link to="/">Home</Link>
            <Link to="/components/Events">Event</Link>
            <Link to="/components/AboutUs">AboutUs</Link>
            <Link to="/components/Informations">Informations</Link> */}
            <p>About Us</p>
            <p>Events</p>
            <p>Contact</p>
            <p></p>
          </div>
          <div className="f-sub-name">
            <h3>Contact Us</h3>
            <p>
              <span className="d-block">G.S.T Road, Chinna Kolambakkam,</span>
              <span className="d-block"> Madhuranthagam(T.k), </span>{" "}
              Chengalpattu (D.t)-603308.
            </p>
          </div>
          <div className="f-sub-name">
            <h3>More Details</h3>
            <p>Developers</p>
          </div>
        </div>
        <div className="line">



        </div>
        <div className="f-copy-rights d-lg-flex justify-content-between align-items-center">
          <div>
            <p>@ 2025 CODEFEST2K25.All rights reserved.</p>
          </div>
          <div className="d-flex gap-2  gap-lg-5 align-items-center">
            <FaSquareInstagram />
            <FaFacebook />
            <IoIosMail />
            <FaMapLocationDot />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
