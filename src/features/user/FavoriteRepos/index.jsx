import React from 'react';
import RepositorieListItem from '../../repos/repositorieListItem';

const FavoriteRepos = ({ favoriteRepos }) => {
  return (
    <div className="box">
      <nav className="panel">
        <p className="panel-heading">Favorite Repos</p>
      </nav>
      <p className="panel-tabs">
        <span className="is-active">Favorites</span>
      </p>
      <ul>
        {favoriteRepos.length >= 1 ? (
          favoriteRepos.map((repo) => {
            return (
              <li key={repo.id}>
                <RepositorieListItem repo={repo} />
              </li>
            );
          })
        ) : (
          <p className="mt-4">No favorite repos found!</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteRepos;
