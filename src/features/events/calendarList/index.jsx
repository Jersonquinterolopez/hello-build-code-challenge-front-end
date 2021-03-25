import React from 'react';
import CalendarListItem from '../calendarListItem';

const CalendarList = ({ upcomingEvents, deleteEvent }) => {
  return (
    <div>
      <ul className="is-flex is-flex-wrap-wrap">
        {upcomingEvents.map((eventItem) => {
          return (
            <li className="m-5" key={eventItem.id}>
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
