import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../api/api';
import ErrorNotice from '../../../misc/ErrorNotice';
import SuccessNotice from '../../../misc/SuccessNotice';
import { types } from '../../../store/StoreReducer';

const AccessInfo = ({ user, dispatch }) => {
  const { id, firstName, email, lastName } = user[0];
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: firstName,
      email: email,
      lastName: lastName,
    },
  });

  const updateUser = async (id, data) => {
    try {
      const response = await api.user.update(id, data);
      dispatch({
        type: types.updateUser,
        payload: response?.data?.user,
      });
      localStorage.setItem('user', JSON.stringify(response?.data?.user));
      setSuccess(true);
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await updateUser(id, data);
    // console.log(data);
  };

  return (
    <div className="box">
      <h4 className="title is-4">User Settings</h4>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      {success && (
        <SuccessNotice
          message="User updated succesfully!"
          clearSuccess={() => setSuccess(undefined)}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="firstName"
              ref={register}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="lastName"
              ref={register}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              autoComplete="email"
              type="text"
              name="email"
              ref={register({
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
          </div>
          <br />
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccessInfo;
