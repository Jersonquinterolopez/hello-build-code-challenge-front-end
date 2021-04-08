import React, { Fragment } from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <Fragment>
      <p className="control has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="Filter badges"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <span className="icon is-left">
          <i className="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </Fragment>
  );
};

export default SearchBar;
