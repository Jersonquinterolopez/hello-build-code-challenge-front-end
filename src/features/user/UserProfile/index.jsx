import React from 'react';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import AccessInfo from '../AccessInfo';
import CalendarEntries from '../CalendarEntries';

const UserProfile = () => {
  const { user, upcomingEvents } = useStore();
  const dispatch = useDispatch();

  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <AccessInfo user={user} dispatch={dispatch} />
        </div>
        <div className="column">
          <CalendarEntries upcomingEvents={upcomingEvents} />
        </div>
      </div>

      {/* list favorites and send it to the database */}
      {/* <FavoriteRepos favoriteRepos={favoriteRepos} /> */}
    </div>
  );
};

export default UserProfile;
