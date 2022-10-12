import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-300 shadow-lg rounded-lg my-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink to='/'>Topics</NavLink>
              <NavLink to='/statistics'>Statistics</NavLink>
              <NavLink to='/blog'>Blog</NavLink>
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl">Hero-Quiz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal p-0">
            <div className='mx-3'><NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>TOPICS</NavLink></div>
            <div className='mx-3'><NavLink to='/statistics'>STATISTICS</NavLink></div>
            <div className='mx-3'><NavLink to='/blog'>BLOG</NavLink></div>
          </div>
        </div>
        <div className="navbar-end">
          <a href='/' className="btn glass">NewsLeter</a>
        </div>
      </div>
    );
};

export default Header;