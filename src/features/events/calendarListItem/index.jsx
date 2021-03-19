import React from 'react';
import Moment from 'moment';

const CalendarListItem = ({ eventItem, deleteEvent }) => {
  const handleClick = async () => {
    const eventId = eventItem.id;
    await deleteEvent(eventId);
  };

  return (
    <div className="column is-three-fifths is-offset-one-fifth">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title title is-5">{`${
            eventItem.summary
          } - ${Moment(eventItem?.start?.dateTime).format('dddd')}`}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {eventItem?.description && (
              <h6 className="title is-6">{eventItem.description}</h6>
            )}
            {/* <br /> */}
            <time>{`${Moment(eventItem?.start?.dateTime).format(
              'LLL'
            )} - ${Moment(eventItem?.end?.dateTime).format('LLL')}`}</time>
            <br />
            {eventItem?.location && (
              <p className="mt-2 subtitle is-6">
                <span className="icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                </span>
                {eventItem.location}
              </p>
            )}
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
