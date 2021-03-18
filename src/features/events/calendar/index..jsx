import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import getUpcomingEvents from '../../../services/getUpcomingEvents';
import CalendarList from '../calendarList';
import ErrorNotice from '../../../misc/ErrorNotice';

const initialState = [
  {
    id: 1,
    summary: 'eventDommie',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
  },
  {
    id: 2,
    summary: 'eventDommie2',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
  },
];

const Calendar = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    getUpcomingEvents(setUpcomingEvents, setLoading, setError);
  };

  if (error) {
    return <ErrorNotice error={error} />;
  }

  if (loading === true) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={30}
        width={30}
        timeout={3000}
      />
    );
  }

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <button className="button is-primary" onClick={handleClick}>
          Get events
        </button>
        <CalendarList upcomingEvents={upcomingEvents} />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
