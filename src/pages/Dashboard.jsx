import React, { Fragment, useEffect } from 'react';
import Menu from '../features/UI/menu';
import { checkLoggedIn } from '../services/checkLoggedIn';
import { useDispatch } from '../store/StoreProvider';

const Dashboard = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkLoggedIn(dispatch);
  }, [dispatch]);

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
