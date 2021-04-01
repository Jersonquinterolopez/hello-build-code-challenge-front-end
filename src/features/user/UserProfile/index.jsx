import React from 'react';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import AccessInfo from '../AccessInfo';
import CalendarEntries from '../CalendarEntries';
import FavoriteRepos from '../FavoriteRepos';

const UserProfile = () => {
  const { user, upcomingEvents, favoriteRepos } = useStore();
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

        <div className="column">
          <FavoriteRepos favoriteRepos={favoriteRepos} />
        </div>
      </div>

      {/* list favorites and send it to the database */}
    </div>
  );
};

export default UserProfile;
