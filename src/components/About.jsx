import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = React.forwardRef((props, ref) => {
  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({ 
      duration: 1200, 
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });
    
    // Create digital particles effect
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('digital-particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random delay for animation
        particle.style.animationDelay = (Math.random() * 10) + 's';
        
        aboutSection.appendChild(particle);
      }
    }
  }, []);
  
  return (
    <section id="about" className="about-section" ref={ref}>
      <h1 
        data-aos="fade-up"
        data-aos-duration="1200"
        className="About-Title">About</h1>
      
      {/* College Details Section - Image on LEFT, Content on RIGHT */}
      <div className="about-container">
        <img
          src="kvcet_logo.png"
          alt="College"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="about-image"
        />
        <div 
          className="about-text" 
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400">
          <h1>About Our College</h1>
          <p>
            Karpaga Vinayaga College of Engineering and Technology is committed to excellence in education, research, and innovation. 
            Our mission is to empower students with knowledge and skills to succeed in the tech industry.
          </p>
        </div>
      </div>
      
      {/* Symposium Details Section - Image on RIGHT, Content on LEFT */}
      <div className="about-container">
        <div 
          className="about-text" 
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400">
          <h1>CodeFest 2K25 Symposium</h1>
          <p>
            CodeFest 2K25 is an exciting symposium that brings together tech enthusiasts to showcase their skills in coding, AI, and innovation. 
            Join us to participate in workshops, hackathons, and networking sessions.
          </p>
        </div>
        <img
          src="codefest_logo.png"
          alt="Symposium"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          className="about-image"
        />
      </div>
    </section>
  );
});

export default About;