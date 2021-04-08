import React from 'react';
import AddToFavorites from '../../addToFavorites';

const RepositorieListItem = ({ repo }) => {
  return (
    <div className="is-flex is-justify-content-space-between ">
      <a href={repo.url} className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        {repo.name}
      </a>
      <AddToFavorites repo={repo} />
    </div>
  );
};

export default RepositorieListItem;
