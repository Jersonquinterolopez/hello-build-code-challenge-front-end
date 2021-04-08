import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import ErrorNotice from '../../../misc/ErrorNotice';
import gitHubApi from '../../../services/githubApi';
import RepositorieList from '../repositorieList';
import { types } from '../../../store/StoreReducer';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import LoginGithub from 'react-login-github';

const Repositories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // global State
  const { repos } = useStore();
  const dispatch = useDispatch();

  const onSuccess = async (response) => {
    setLoading(true);
    await gitHubApi.user.codeExchange(response.code);
    const userRepos = await gitHubApi.user.getRepos();

    dispatch({
      type: types.getRepos,
      payload: userRepos,
    });
    setLoading(false);
  };

  const onFailure = (response) => {
    console.error(response);
    setError(response);
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
        <LoginGithub
          clientId={process.env.REACT_APP_GITHUB_API_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          scope="repo"
          className="button is-primary"
          buttonText="Get my GitHub Repos"
        />
      </div>
      <RepositorieList repos={repos} />
    </div>
  );
};

export default Repositories;
