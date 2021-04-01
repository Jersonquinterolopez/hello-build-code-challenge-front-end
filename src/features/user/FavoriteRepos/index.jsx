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
        {favoriteRepos.map((repo) => {
          return (
            <li key={repo.id}>
              <RepositorieListItem repo={repo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FavoriteRepos;
