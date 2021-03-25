import React, { Fragment } from 'react';
import Menu from '../features/UI/menu';

const Dashboard = (props) => {
  return (
    <Fragment>
      <div className="section">
        <div className="columns">
          <div className="column is-one-fifth">
            <Menu />
          </div>

          <div className="column">{props.children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

{
  /* <div className="column">
<div className="box">
  <nav className="panel">
    <p className="panel-heading">Repositories</p>
  </nav>
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="Search" />
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <p className="panel-tabs">
    <a href="https://example.com" className="is-active">
      All
    </a>
  </p>
  <a href="https://example.com" className="panel-block is-active">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    bulma
  </a>
  <a href="https://example.com" className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    marksheet
  </a>
</div>
</div> */
}
