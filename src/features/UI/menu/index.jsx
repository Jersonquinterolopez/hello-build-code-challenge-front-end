import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store/StoreProvider';
import AuthOptions from '../../authentication/AuthOptions';
import UserInfo from '../userInfo';

const Menu = () => {
  const { user } = useStore();

  return (
    <div className="section">
      <aside className="box">{user.length && <UserInfo user={user} />}</aside>
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
      <AuthOptions />
    </div>
  );
};

export default Menu;
