import React from 'react';

const ErrorNotice = (props) => {
  return (
    <div className="notification is-danger is-light">
      <button className="delete" onClick={props.clearError}></button>
      {props.message}
    </div>
  );
};

export default ErrorNotice;
