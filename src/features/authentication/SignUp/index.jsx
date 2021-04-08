import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../helpers/axios';
import ErrorNotice from '../../../misc/ErrorNotice';
import { useDispatch } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: 'onBlur',
  });

  const [error, setError] = useState();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await api.post('/auth/sign-up', { user: data });
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
      <div className="column is-one-third">
        <section className="section">
          <h4 className="title is-4 has-text-centered">Sign up</h4>
          {error && (
            <ErrorNotice
              message={error}
              clearError={() => setError(undefined)}
            />
          )}
          <div className="field has-addons-right">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-normal"
                    type="text"
                    name="firstName"
                    id="signup-firstName"
                    autoComplete="firstName"
                    placeholder="First Name"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.firstName?.type === 'required' && (
                    <p className="help is-danger">This is a required field</p>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-normal"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    id="signup-lastName"
                    autoComplete="lastName"
                    ref={register({
                      required: true,
                    })}
                  />
                  {errors.lastName?.type === 'required' && (
                    <p className="help is-danger">This is a required field</p>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-normal"
                    type="email"
                    name="email"
                    id="signup-email"
                    placeholder="Email"
                    autoComplete="email"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'error message',
                      },
                    })}
                  />

                  {errors.email?.type === 'pattern' && (
                    <p className="help is-danger">
                      Please enter a valid email address. For example:
                      amysmith@domain.com
                    </p>
                  )}

                  {errors.email?.type === 'required' && (
                    <p className="help is-danger">This is a required field</p>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-normal"
                    type="password"
                    name="password"
                    id="signup-password"
                    placeholder="Password"
                    autoComplete="password"
                    ref={register({
                      required: true,
                      minLength: {
                        value: 8,
                        message: 'error message',
                      },
                    })}
                  />
                  {errors.password?.type === 'required' && (
                    <p className="help is-danger">This is a required field</p>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <p className="help is-danger">
                      Your password must be 8 characters long
                    </p>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    className="input is-normal"
                    type="password"
                    name="passwordCheck"
                    id="signup-passwordCheck"
                    placeholder="Confirm Password"
                    ref={register({
                      validate: (value) =>
                        value === getValues('password') || 'error message',
                    })}
                  />
                  {errors.passwordCheck?.type === 'validate' && (
                    <p className="help is-danger">
                      Please make sure your password match.
                    </p>
                  )}
                </div>
              </div>

              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={!formState.isValid}
                >
                  Sign up
                </button>
              </div>
              <div className="has-text-centered">
                <p>Already have an account?</p>

                <Link to="./login">Log in</Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
