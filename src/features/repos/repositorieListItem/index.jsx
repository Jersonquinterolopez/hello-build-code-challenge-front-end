import React from 'react';

const RepositorieListItem = ({ repo }) => {
  return (
    <div>
      <p>{repo.name}</p>
      <p>{repo.id}</p>
    </div>
  );
};

export default RepositorieListItem;
