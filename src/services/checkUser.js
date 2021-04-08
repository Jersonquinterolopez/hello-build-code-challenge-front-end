import api from '../helpers/axios';

const checkUser = async (value) => {
  try {
    const config = {
      method: 'post',
      url: '/auth/check-user',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        email: value,
      },
    };
    const checkUserResponse = await api(config);
    const userStatus = await checkUserResponse.data;
    return userStatus;
  } catch (error) {
    console.log(error);
  }
};

export default checkUser;
