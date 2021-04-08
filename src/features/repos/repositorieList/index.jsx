import React from 'react';
import SearchBar from '../../UI/searchBar';
import RepositorieListItem from '../repositorieListItem';
import useSearchItems from '../../../hooks/useSearchItems';

const RepositorieList = ({ repos }) => {
  const { query, setQuery, filteredItems } = useSearchItems(repos);

  return (
    <div className="box">
      <nav className="panel">
        <p className="panel-heading">Repositories</p>
      </nav>
      <div className="panel-block">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <p className="panel-tabs">
        <span className="is-active">All</span>
      </p>
      <ul>
        {filteredItems.length >= 1 ? (
          filteredItems.map((repo) => {
            return (
              <li key={repo.id}>
                <RepositorieListItem repo={repo} />
              </li>
            );
          })
        ) : (
          <p className="mt-4">
            No repos found! Click the button to get your repos.
          </p>
        )}
      </ul>
    </div>
  );
};

export default RepositorieList;
