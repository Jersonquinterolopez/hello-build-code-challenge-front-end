import React from 'react';
import Moment from 'moment';
import calendarApi from '../../../services/calendarApi';

const CalendarListItem = ({ eventItem }) => {
  const handleClick = () => {
    calendarApi.remove.deleteOne(eventItem.id);
  };

  return (
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{eventItem.summary}</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>{eventItem.description}</p>
            <br />
            <time>{`${Moment(eventItem?.start?.dateTime).format(
              'LLL'
            )} - ${Moment(eventItem?.end?.dateTime).format('LLL')}`}</time>
            <br />
            <p>
              <span className="icon">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              </span>
              {eventItem.location}
            </p>
          </div>
        </div>
        <footer className="card-footer">
          <button
            onClick={handleClick}
            className="button is-danger is-light card-footer-item"
          >
            Cancel Event
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CalendarListItem;
