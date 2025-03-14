import React from "react";
import EventCard from "./EventCard";
import eventinfo from "../assets/eventinfo";

function NonTechnicalEvents() {
  const nonTechnicalEvents = eventinfo.filter(event => event.type === "Non-Technical");

  return (
    <div className="events-container">
      <h2>Non-Technical Events</h2>
      <div className="events-grid">
        {nonTechnicalEvents.map(event => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

export default NonTechnicalEvents;
