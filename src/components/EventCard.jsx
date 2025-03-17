import React from "react";
import "../styles/EventCard.css";

function EventCard({ event }) {
  return (
    <div className="event-card">
      {/* Background Layer */}
      <div 
        className="event-bg" 
        style={{ backgroundImage: `url(${event.background})` }}
      ></div>

      {/* Content */}
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.points[0]}</p>
        <p className="event-realname">{event.realname}</p>
        <button className="event-button">Know More</button>
      </div>
    </div>
  );
}

export default EventCard;
