import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/time.css";

const Time = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isSticky, setIsSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const timerSection = document.querySelector(".time");
      if (timerSection) {
        const rect = timerSection.getBoundingClientRect();
        setIsSticky(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Timer */}
      <div className="time-container">
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
