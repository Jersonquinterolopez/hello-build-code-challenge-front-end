import React from 'react';

function CalendarListItem({ eventItem }) {
  return (
    <div>
      <p>{eventItem.summary}</p>
      <p>{eventItem.htmlLink}</p>
    </div>
  );
}

export default CalendarListItem;
