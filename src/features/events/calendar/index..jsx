import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import calendarApi from '../../../services/calendarApi';
import CalendarList from '../calendarList';
import ErrorNotice from '../../../misc/ErrorNotice';
import { useDispatch, useStore } from '../../../store/StoreProvider';

const Calendar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // global State
  const { upcomingEvents } = useStore();
  const dispatch = useDispatch();

  const handleClick = () => {
    calendarApi.list.getUpcomingEvents(dispatch, setLoading, setError);
  };

  const deleteEvent = async (eventId) => {
    setLoading(true);
    await calendarApi.remove.deleteOne(eventId);
    await calendarApi.list.updateList(dispatch, setLoading, setError);
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
