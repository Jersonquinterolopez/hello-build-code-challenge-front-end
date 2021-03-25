// import axios from 'axios';
import React, { useState, Fragment } from 'react';
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
    <div className="container">
      <div className="field is-grouped">
        <p className="control">
          <button className="button is-primary is-light">
            <a href="http://localhost:5000/github/auth" />
            Authorization
          </button>
        </p>

        <p className="control">
          <button className="button is-primary" onClick={handleClick}>
            Get Repos
          </button>
        </p>
      </div>

      <RepositorieList repos={repos} />
    </div>
  );
};

export default Repositories;
