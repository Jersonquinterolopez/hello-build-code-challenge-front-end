import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import ErrorNotice from '../../../misc/ErrorNotice';
import gitHubApi from '../../../services/githubApi';
import RepositorieList from '../repositorieList';

const Repositories = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    setLoading(true);
    e.preventDefault();
    gitHubApi.user.getRepos().then(
      (userRepos) => {
        setRepos(userRepos);
        setLoading(false);
      },

      (error) => {
        setError(error);
      }
    );
  };

  if (error) {
    return <ErrorNotice error={error} />;
  }

  if (loading === true) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={30}
        width={30}
        timeout={3000}
      />
    );
  }

  return (
    <div className="container">
      <div className="field is-grouped">
        <p className="control">
          <a href="http://localhost:5000/github/auth">
            <button className="button is-primary is-light">
              Authorization
            </button>
          </a>
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