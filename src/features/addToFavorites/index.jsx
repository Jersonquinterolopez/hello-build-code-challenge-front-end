import React, { Fragment } from 'react';
import githubApi from '../../services/githubApi';
import { useDispatch } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const AddToFavorites = ({ repo }) => {
  const dispatch = useDispatch();
  const repoId = repo.id;
  const repoName = repo.name;

  const invertColor = (repoId) => {
    const element = document.getElementById(repoId);
    element.classList.contains('is-inverted')
      ? element.classList.remove('is-inverted')
      : element.classList.add('is-inverted');
  };

  const toggleFavAction = async (repoName, repoId) => {
    const isFavorite = await githubApi.user.findFavoriteRepo(repoName);
    invertColor(repoId);

    if (isFavorite) {
      await githubApi.user.removeFavorite(repoId);
      const updatedFavoriteList = await githubApi.user.getFavoriteRepos();
      dispatch({
        type: types.updateFavoriteRepos,
        payload: updatedFavoriteList,
      });
    } else {
      await githubApi.user.addFavorite(repo);
      const updatedFavoriteList = await githubApi.user.getFavoriteRepos();
      dispatch({
        type: types.updateFavoriteRepos,
        payload: updatedFavoriteList,
      });
    }
  };

  return (
    <Fragment>
      <button
        id={repoId}
        className="button is-primary is-inverted is-small"
        type="button"
        onClick={() => toggleFavAction(repoName, repoId)}
      >
        <span className="icon is-small">
          <i className="fas fa-heart"></i>
        </span>
      </button>
    </Fragment>
  );
};

export default AddToFavorites;
