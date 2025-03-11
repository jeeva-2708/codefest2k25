import React from "react";
import EventCard from "./EventCard";
import eventinfo from "../assets/eventinfo";

function EventList() {
  return (
    <div className="event-list">
      {eventinfo.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default EventList;
