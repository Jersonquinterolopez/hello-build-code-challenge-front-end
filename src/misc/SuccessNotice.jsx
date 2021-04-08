import React from 'react';

const SuccessNotice = ({ message, clearSuccess }) => {
  return (
    <div className="notification is-small is-success is-light">
      <button className="delete" onClick={clearSuccess}></button>
      {message}
    </div>
  );
};

export default SuccessNotice;
