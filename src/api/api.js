import axios from 'axios';

const user = axios.create({
  baseURL: 'http://localhost:5000/user',
});

const api = {
  user: {
    update(userId, updates) {
      let token = localStorage.getItem('x-auth-token');
      const config = {
        method: 'PATCH',
        data: updates,
        url: `/update/${userId}`,
        headers: { 'Content-Type': 'application/json', 'x-auth-token': token },
      };

      return user(config);
    },
  },
};

export default api;
