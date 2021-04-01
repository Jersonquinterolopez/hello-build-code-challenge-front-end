import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store/StoreProvider';

const UserInfo = () => {
  const { user } = useStore();
  const { firstName, email, lastName } = user[0];

  return (
    <div>
      <Link to="/user-profile">
        <p className="title is-5 m-0">
          {firstName} {lastName}
        </p>
        <p className="subtitile is-6">{email}</p>
      </Link>
    </div>
  );
};

export default UserInfo;
