import React from 'react';
import { Link } from 'react-router-dom';

const CalendarEntries = ({ upcomingEvents }) => {
  const entries = upcomingEvents.length;
  return (
    <div className="box">
      <div className="media">
        <div className="media-left">
          <span className="icon is-large">
            <i className="fas fa-calendar-alt"></i>
          </span>
        </div>
        <div className="media-content has-text-right">
          <h3 className="title is-1 has-text-info">{entries}</h3>
        </div>
      </div>
      <Link to="calendar">
        <p className="title is-4">Next Month Events</p>
      </Link>
    </div>
  );
};

export default CalendarEntries;
