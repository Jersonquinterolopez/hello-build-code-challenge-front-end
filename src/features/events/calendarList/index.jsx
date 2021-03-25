import React from 'react';
import CalendarListItem from '../calendarListItem';

const CalendarList = ({ upcomingEvents, deleteEvent }) => {
  return (
    <div>
      <ul>
        {upcomingEvents.map((eventItem) => {
          return (
            <li className="mb-5" key={eventItem.id}>
              <CalendarListItem
                deleteEvent={deleteEvent}
                eventItem={eventItem}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CalendarList;
