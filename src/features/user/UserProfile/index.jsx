import React, { useCallback, useEffect } from 'react';
import githubApi from '../../../services/githubApi';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';
import AccessInfo from '../AccessInfo';
import CalendarEntries from '../CalendarEntries';
import FavoriteRepos from '../FavoriteRepos';

const UserProfile = () => {
  const { user, upcomingEvents, favoriteRepos } = useStore();
  const dispatch = useDispatch();

  const fetchFavoriteRepos = useCallback(async () => {
    const repos = await githubApi.user.getFavoriteRepos();
    dispatch({
      type: types.getFavoriteRepos,
      payload: await repos,
    });
  }, [dispatch]);

  useEffect(() => {
    fetchFavoriteRepos();
  }, [fetchFavoriteRepos]);

  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          {user.length === 1 && <AccessInfo user={user} dispatch={dispatch} />}
        </div>
        <div className="column">
          <CalendarEntries upcomingEvents={upcomingEvents} />
        </div>

        <div className="column">
          <FavoriteRepos favoriteRepos={favoriteRepos} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
