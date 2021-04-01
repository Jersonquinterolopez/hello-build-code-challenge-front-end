import React, { Fragment } from 'react';
import Menu from '../features/UI/menu';

const Dashboard = (props) => {
  return (
    <Fragment>
      <div className="section">
        <div className="columns">
          <div className="column is-one-quarter">
            <Menu />
          </div>

          <div className="column">{props.children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
