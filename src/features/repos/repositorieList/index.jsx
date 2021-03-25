import React from 'react';
import RepositorieListItem from '../repositorieListItem';

const RepositorieList = ({ repos }) => {
  return (
    <div>
      <ul>
        {repos.map((repo) => {
          return (
            <li className="mb-5" key={repo.id}>
              <RepositorieListItem repo={repo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RepositorieList;
