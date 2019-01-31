import React from 'react';
import Event from './Event.jsx';

const EventList = ({ events }) => {
  const eventList = events.map((eventDetails) => {
    return <Event event={eventDetails} />;
  });

  return (
    <ul className="event-list">
      {eventList}
    </ul>
  );
};

export default EventList;
