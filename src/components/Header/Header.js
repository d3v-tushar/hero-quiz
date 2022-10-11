import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg rounded-lg">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-3xl" href='/'>Hero Quiz</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 mx-3">
      <li>
        <NavLink to='/'>Topics</NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink to='/statistics'>Statistics</NavLink>
      </li>
      <li>
        <NavLink to='/blog'>Blog</NavLink>
      </li>
    </ul>
  </div>
    {/* <div className="w-10 rounded-full">
        <img src="https://placeimg.com/80/80/people" alt='dp'/>
    </div> */}
</div>
    );
};

export default Header;