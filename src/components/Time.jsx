import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/time.css";

const Time = ({ aboutSectionRef, footerRef }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isSticky, setIsSticky] = useState(false);
  const [isMainTimerVisible, setIsMainTimerVisible] = useState(true); // State to control main timer visibility
  const mainTimerRef = useRef(null); // Ref for the main timer section

  // Update countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-03-27T23:59:59");

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      setTime({
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const mainTimer = mainTimerRef.current;
      const aboutSection = aboutSectionRef.current;
      const footer = footerRef.current;

      if (mainTimer && aboutSection && footer) {
        const mainTimerBottom = mainTimer.getBoundingClientRect().bottom;
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const footerTop = footer.getBoundingClientRect().top;

        // Hide main timer when about section comes into view
        if (aboutSectionTop <= window.innerHeight) {
          setIsMainTimerVisible(false); // Fade out main timer
        } else {
          setIsMainTimerVisible(true); // Fade in main timer
        }

        // Show sticky timer when main timer is out of view and stop it above the footer
        if (mainTimerBottom < 0 && footerTop > window.innerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Timer */}
      <div
        ref={mainTimerRef}
        className="time-container"
        style={{
          opacity: isMainTimerVisible ? 1 : 0, // Fade in/out
          transition: "opacity 0.5s ease", // Smooth transition
        }}
      >
        <section className="time d-flex justify-content-center align-items-center">
          <div data-aos="fade-up" data-aos-duration="1000" className="container text-center">
            <h1>Act fast! Join us now!</h1>
            <div className="d-flex justify-content-center gap-5">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                <div key={index}>
                  <div><p>{time[unit.toLowerCase()]}</p></div>
                  <p>{unit}</p>
                </div>
              ))}
            </div>
            <div><a href="#">Register Now</a></div>
          </div>
        </section>
      </div>

      {/* Sticky Timer */}
      <div className={`sticky-timer ${isSticky ? "show" : ""}`}>
        <div className="d-flex">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div key={index}>
              <div><p>{time[unit.toLowerCase()]}</p></div>
              <p>{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Time;