import React, { Fragment } from 'react';

const RepositorieListItem = ({ repo }) => {
  return (
    <Fragment>
      <a href={repo.url} className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        {repo.name}
      </a>
    </Fragment>
  );
};

export default RepositorieListItem;
