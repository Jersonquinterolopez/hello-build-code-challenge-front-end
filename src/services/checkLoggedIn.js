import api from '../helpers/axios';
import { types } from '../store/StoreReducer';

export const checkLoggedIn = async (dispatch) => {
  let user = localStorage.getItem('user');
  const token = localStorage.getItem('x-auth-token');

  if (user) {
    const config = {
      url: 'auth/validate-token',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'x-auth-token': token,
      },
    };
    const validateUser = await api(config);
    const isValidated = await validateUser.data;

    if (isValidated) {
      const config = {
        url: '/user',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-auth-token': token,
        },
      };
      const response = await api(config);
      const user = await response.data;
      dispatch({
        type: types.authLogin,
        payload: user,
      });
    } else {
      alert('Access Denied');
    }
  } else {
    return null;
  }
};
