import React from 'react';

const ErrorNotice = ({ message, clearError }) => {
  return (
    <div className="notification is-danger is-light">
      <button className="delete" onClick={clearError}></button>
      {message}
    </div>
  );
};

export default ErrorNotice;
