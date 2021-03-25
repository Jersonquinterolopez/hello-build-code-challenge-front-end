// import axios from 'axios';
import React, { useState } from 'react';
import gitHubApi from '../../../services/githubApi';
import RepositorieList from '../repositorieList';

const Repositories = () => {
  //   const [username, setUsername] = useState('');
  //   const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    gitHubApi.user.getRepos().then((userRepos) => setRepos(userRepos));
  };

  return (
    <div className="section">
      <a href="http://localhost:5000/github/auth">
        <button className="button is-primary is-light">Authorization</button>
      </a>
      <button className="button is-primary" onClick={handleClick}>
        Get Repos
      </button>
      <RepositorieList repos={repos} />
    </div>
  );
};

export default Repositories;
