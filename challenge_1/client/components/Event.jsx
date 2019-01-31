import React from 'react';

const Event = ({ event }) => (
  <li className="event">
    {event.date}
    {event.description}
  </li>
);

export default Event;
