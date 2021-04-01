import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from '../userInfo';

const Menu = () => {
  return (
    <div className="section">
      <aside className="box">
        <UserInfo />
      </aside>
      <aside className="box menu">
        <p className="menu-label">Menu</p>

        <ul className="menu-list">
          <li>
            <Link to="/calendar">My Calendar</Link>
          </li>
          <li>
            <Link to="/github_section">My Repositories</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Menu;
