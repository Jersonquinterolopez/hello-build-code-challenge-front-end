import api from '../helpers/axios';

const checkUser = async (value) => {
  try {
    const checkUserResponse = await api.post('/auth/check-user', {
      email: value,
    });
    const userStatus = await checkUserResponse.data;
    return userStatus;
  } catch (error) {
    console.log(error);
  }
};

export default checkUser;
