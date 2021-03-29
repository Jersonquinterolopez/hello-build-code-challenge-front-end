import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
});

const api = axios.create({
  baseURL: 'http://localhost:5000/github',
});

// API CALLS
const githubApi = {
  user: {
    async codeExchange(code) {
      const config = {
        url: '/code-exchange',
        params: {
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      };
      const response = await api(config);
      const token = await response.data.token;
      console.log(`token: ${token}`);
      localStorage.setItem('githubapi-token', token);
    },
    async getRepos() {
      const OAUTH_TOKEN = localStorage.getItem('githubapi-token');
      const config = {
        url: '/user/repos',
        headers: {
          Authorization: `Token ${OAUTH_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      };
      const response = await github(config);
      const data = await response.data;

      console.log(data);
      return data;
    },
  },
};

export default githubApi;
