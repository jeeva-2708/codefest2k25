import React from "react";
import "../styles/EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card" style={{ backgroundImage: `url(${event.background})` }}>
      <div className="event-content">
        <img src={event.icon} alt={event.title} className="event-icon" />
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.points[0]}</p>
        <button className="event-button">Know More</button>
      </div>
    </div>
  );
}

export default EventCard;
