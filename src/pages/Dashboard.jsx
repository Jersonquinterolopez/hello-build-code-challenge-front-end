import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <div className="section">
      <Link className="button is-info" to="/dashboard/calendar">
        My Calendar
      </Link>
      <Link className="button is-dark" to="/dashboard/github_section">
        My Repositories
      </Link>
    </div>
  );
};

export default Dashboard;
