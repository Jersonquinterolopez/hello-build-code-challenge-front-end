import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../helpers/axios';
import ErrorNotice from '../../../misc/ErrorNotice';
import checkUser from '../../../services/checkUser';
import { useDispatch } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const Login = () => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const { email, password } = data;
      const loginResponse = await api.post('/auth/login', {
        email,
        password,
      });
      dispatch({
        type: types.authLogin,
        payload: loginResponse.data.user,
      });
      localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
      localStorage.setItem('x-auth-token', loginResponse.data.token);
      history.push('/user-profile');
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <div className="columns is-vcentered">
      <div className="login column is-one-third">
        <section className="section">
          <h4 className="title is-4 has-text-centered">Log in</h4>
          {error && (
            <ErrorNotice
              message={error}
              clearError={() => setError(undefined)}
            />
          )}
          <div className="field has-addons-right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-normal"
                    type="email"
                    name="email"
                    id="login-email"
                    autoComplete="email"
                    placeholder="Email"
                    ref={register({
                      required: true,
                      validate: checkUser || 'error message',
                    })}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>

                  {errors.email?.type === 'validate' && (
                    <p className="help is-danger">
                      No account found with this email address.
                    </p>
                  )}

                  {errors.email?.type === 'required' && (
                    <p className="help is-danger">This is a required field</p>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-normal"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="login-password"
                    autoComplete="password"
                    ref={register}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={!formState.isValid}
                >
                  Log in
                </button>
                <div className="has-text-centered">
                  <p>Don't have an account?</p>

                  <Link to="./sign-up">Sign up</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
