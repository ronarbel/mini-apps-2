import React from 'react';
import Event from './Event.jsx';

const EventList = ({ events }) => {
  const eventList = events.map((eventDetails) => {
    return <Event event={eventDetails} />;
  });

  return (
    <div className="event-list">
      {eventList}
    </div>
  );
};

export default EventList;
