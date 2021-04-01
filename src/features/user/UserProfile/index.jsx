import React from 'react';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import AccessInfo from '../AccessInfo';

const UserProfile = () => {
  const { user } = useStore();
  const dispatch = useDispatch();

  return (
    <div>
      <AccessInfo user={user} dispatch={dispatch} />
      {/* <CalendarEntries upcomingEvents={upcomingEvents} />
      // list favorites and send it to the database
      <FavoriteRepos favoriteRepos={favoriteRepos} /> */}
    </div>
  );
};

export default UserProfile;
