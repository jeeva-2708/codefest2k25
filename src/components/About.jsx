import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="about" className="about-section">

        <h1 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="About-Title">About</h1>
      {/* College Details Section */}
      <div className="about-container">
        <img 
          src="/path/to/college-image.jpg" 
          alt="College" 
          data-aos="fade-right" 
          className="about-image"
        />
        <div className="about-text" data-aos="fade-left">
        <h1>About Our College</h1>
          <p>
            Karpaga Vinayaga College of Engineering and Technology is committed to excellence in education, research, and innovation. 
            Our mission is to empower students with knowledge and skills to succeed in the tech industry.
          </p>
        </div>
      </div>

      {/* Symposium Details Section */}
      <div className="about-container reverse">
        <div className="about-text" data-aos="fade-right">
          <h1>CodeFest 2K25 Symposium</h1>
          <p>
            CodeFest 2K25 is an exciting symposium that brings together tech enthusiasts to showcase their skills in coding, AI, and innovation. 
            Join us to participate in workshops, hackathons, and networking sessions.
          </p>
        </div>
        <img 
          src="/path/to/symposium-image.jpg" 
          alt="Symposium" 
          data-aos="fade-left" 
          className="about-image"
        />
      </div>
    </section>
  );
};

export default About;
