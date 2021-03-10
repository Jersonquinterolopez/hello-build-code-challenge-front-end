import api from '../helpers/axios';

const onSubmit = async (data, e) => {
  e.preventDefault();

  try {
    await api.post('/auth/sign-up', { user: data });
    const { email, password } = data;
    const loginResponse = await api.post('/auth/login', {
      email,
      password,
    });
    localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
    localStorage.setItem('token', JSON.stringify(loginResponse.data.token));
  } catch (error) {
    console.log(error);
  }
};

export default onSubmit;
