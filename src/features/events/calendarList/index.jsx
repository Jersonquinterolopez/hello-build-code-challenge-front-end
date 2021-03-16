import React from 'react';
import CalendarListItem from '../calendarListItem';

const CalendarList = ({ upcomingEvents }) => {
  return (
    <div>
      <ul>
        {upcomingEvents.map((eventItem) => {
          return (
            <li key={eventItem.id}>
              <CalendarListItem eventItem={eventItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CalendarList;
