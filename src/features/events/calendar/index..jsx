import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import calendarApi from '../../../services/calendarApi';
import CalendarList from '../calendarList';
import ErrorNotice from '../../../misc/ErrorNotice';

const initialState = [
  {
    id: 1,
    summary: 'eventDommie',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
    description: 'This is an example',
  },

  {
    id: 2,
    summary: 'eventDommie2',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
    description: 'This is an example',
  },
  {
    id: 3,
    summary: 'eventDommie2',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
    description: 'This is an example',
  },
  {
    id: 4,
    summary: 'eventDommie2',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
    description: 'This is an example',
  },
  {
    id: 5,
    summary: 'eventDommie2',
    htmlLink:
      'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
    description: 'This is an example',
  },
];

const Calendar = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    calendarApi.list.getUpcomingEvents(setUpcomingEvents, setLoading, setError);
  };

  const deleteEvent = async (eventId) => {
    await calendarApi.remove.deleteOne(eventId);
    await calendarApi.list.updateList(setUpcomingEvents, setLoading, setError);
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
    <div className="container">
      <div className="columns is-multiline is-mobile">
        <div className="column is-full">
          <button className="button is-primary" onClick={handleClick}>
            Get events
          </button>
        </div>
        <div className="column">
          <CalendarList
            upcomingEvents={upcomingEvents}
            deleteEvent={deleteEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
