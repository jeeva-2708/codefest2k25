import React, { useState } from "react";
import "../styles/EventCard.css";

const Card3D = ({ event }) => {
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });

    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="card-3d"
      style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-3d-inner"
        style={{ transform: `rotateY(${rotation.rotateY}deg) rotateX(${rotation.rotateX}deg)` }}
      >
        <div className="card-3d-front">
          <div className="card-3d-image">
            <img
              src={event.background}
              alt="Card Image"
            />
          </div>
          <div className="card-3d-content">
            <h3 className="card-3d-title">{event.title}</h3>
            <p className="card-3d-text">{event.points[0]}</p>
            <button className="card-3d-button">Explore More</button>
          </div>
          <div className="corner-glow corner-glow-top-left"></div>
          <div className="corner-glow corner-glow-top-right"></div>
          <div className="corner-glow corner-glow-bottom-left"></div>
          <div className="corner-glow corner-glow-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;

