import React from "react";
import EventCard from "./EventCard";
import eventinfo from "../assets/eventinfo";

function TechnicalEvents() {
  const technicalEvents = eventinfo.filter(event => event.type === "Technical");

  return (
    <div className="events-container">
      <h2>Technical Events</h2>
      <div className="events-grid">
        {technicalEvents.map(event => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

export default TechnicalEvents;