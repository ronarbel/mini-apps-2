import React from 'react';

const Event = ({ event }) => (
  <div className="event">
    {event.date}
    {event.description}
  </div>
);

export default Event;
