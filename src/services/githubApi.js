import axios from 'axios';

const getQueryParam = (param) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const parameter = urlParams.get(param);
  return parameter;
};

const OAUTH_TOKEN = getQueryParam('token');

const github = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Token ${OAUTH_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  },
});

// API CALLS
const githubApi = {
  user: {
    async getRepos() {
      const endPoint = 'user/repos';
      const response = await github(endPoint);
      const data = await response.data;

      console.log(data);
      return data;
    },
  },
};

export default githubApi;
