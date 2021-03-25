import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
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
  );
};

export default Menu;
