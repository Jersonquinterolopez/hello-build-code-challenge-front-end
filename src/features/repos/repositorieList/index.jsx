import React from 'react';
import RepositorieListItem from '../repositorieListItem';

const RepositorieList = ({ repos }) => {
  return (
    <div className="box">
      <nav className="panel">
        <p className="panel-heading">Repositories</p>
      </nav>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Search" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p className="panel-tabs">
        <span className="is-active">All</span>
      </p>
      <ul>
        {repos.map((repo) => {
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

export default RepositorieList;
