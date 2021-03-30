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
        {filteredItems.map((repo) => {
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
