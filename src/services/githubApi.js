import axios from 'axios';
import config from '../config/config';

const github = axios.create({
  baseURL: 'https://api.github.com',
});

const api = axios.create({
  baseURL: `${config.apiUrl}/github`,
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
    async addFavorite(repo) {
      let token = localStorage.getItem('x-auth-token');
      const config = {
        method: 'POST',
        data: {
          repo: repo,
        },
        url: '/add-to-favorite',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
      };

      const response = await api(config);
      const data = await response.data;

      return data;
    },
    async removeFavorite(repoId) {
      let token = localStorage.getItem('x-auth-token');
      const config = {
        method: 'DELETE',
        url: `/delete/${repoId}`,
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
      };

      await api(config);
    },
    async getFavoriteRepos() {
      let token = localStorage.getItem('x-auth-token');
      const config = {
        method: 'GET',
        url: '/favorite-repos',
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
      };

      const response = await api(config);
      const data = await response.data;

      return data;
    },

    async findFavoriteRepo(repoName) {
      let token = localStorage.getItem('x-auth-token');
      const config = {
        method: 'POST',
        url: `/find-repo`,
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
        data: {
          name: repoName,
        },
      };

      const response = await api(config);
      const data = await response.data;

      return data;
    },
  },
};

export default githubApi;
