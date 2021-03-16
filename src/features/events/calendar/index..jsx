import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import getUpcomingEvents from '../../../helpers/getUpcomingEvents';
import CalendarList from '../calendarList';
// import config from '../../../config/config';

// const initialState = [
//   {
//     id: 1,
//     summary: 'eventDommie',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
//   },
//   {
//     id: 2,
//     summary: 'eventDommie2',
//     htmlLink:
//       'https://www.google.com/calendar/event?eid=dWJnaXN1Y2Rrc2IyZGZia2U1MjhqN3MyZG9fMjAyMTAzMTVUMTYwMDAwWiBzb2xvcnNhbm9sb3BlekBt',
//   },
// ];

const Calendar = () => {
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [loading, setLoading] = useState(false);

  const getEventList = () => {
    setLoading(true);
    getUpcomingEvents().then((eventList) => {
      setUpcomingEvents(eventList);
      setLoading(false);
    });
  };

  if (loading) {
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
    <div>
      <button onClick={getEventList}>Get events</button>
      {upcomingEvents && <CalendarList upcomingEvents={upcomingEvents} />}
    </div>
  );
};

export default Calendar;
