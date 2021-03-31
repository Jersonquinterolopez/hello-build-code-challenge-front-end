import React, { Fragment } from 'react';
import { useDispatch, useStore } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const AddToFavorites = ({ repo }) => {
  const dispatch = useDispatch();
  const { favoriteRepos } = useStore();

  const invertColor = () => {
    const element = document.getElementById(repo.id);
    element.classList.contains('is-inverted')
      ? element.classList.remove('is-inverted')
      : element.classList.add('is-inverted');
  };

  const toggleFavAction = (repo) => {
    const isFavoriteAdded = favoriteRepos.filter((favorite) => {
      return favorite.id === repo?.id;
    });
    const result = isFavoriteAdded.length > 0 ? isFavoriteAdded[0] : null;

    if (result === null) {
      invertColor();
      dispatch({
        type: types.addFavorite,
        payload: repo,
      });
    } else {
      invertColor();
      dispatch({
        type: types.removeFavorite,
        payload: repo?.id,
      });
    }
  };

  return (
    <Fragment>
      <button
        id={repo.id}
        className="button is-primary is-small"
        type="button"
        onClick={() => toggleFavAction(repo)}
      >
        <span className="icon is-small">
          <i className="fas fa-heart"></i>
        </span>
      </button>
    </Fragment>
  );
};

export default AddToFavorites;
