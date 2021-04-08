import React, { memo } from 'react';
import CalendarListItem from '../calendarListItem';

const CalendarList = memo(({ upcomingEvents, deleteEvent }) => {
  return (
    <div>
      <ul className="is-flex is-flex-wrap-wrap">
        {upcomingEvents.length >= 1 ? (
          upcomingEvents.map((eventItem) => {
            return (
              <li className="m-5" key={eventItem.id}>
                <CalendarListItem
                  deleteEvent={deleteEvent}
                  eventItem={eventItem}
                />
              </li>
            );
          })
        ) : (
          <p className="mt-4">
            No entries found! Click the button to get your upcoming events.
          </p>
        )}
      </ul>
    </div>
  );
});

export default CalendarList;
