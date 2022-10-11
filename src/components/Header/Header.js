import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
  //       <div className="navbar bg-base-100 shadow-lg rounded-lg">
  // <div className="flex-1">
  //   <a className="btn btn-ghost normal-case text-3xl" href='/'>Hero Quiz</a>
  // </div>
  // <div className="flex-none">
  //   <ul className="menu menu-horizontal p-0 mx-3">
  //     <li>
  //       <NavLink to='/'>Topics</NavLink>
  //     </li>
  //     <li tabIndex={0}>
  //       <NavLink to='/statistics'>Statistics</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to='/blog'>Blog</NavLink>
  //     </li>
  //   </ul>
  // </div>

  <div className="navbar bg-base-100 shadow-lg rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <NavLink to='/topic'>Topics</NavLink>
        <NavLink to='/statistics'>Statistics</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">Hero-Quiz</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li>
        <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/'>Topics</NavLink>
      </li>
      <li>
        <NavLink to='/statistics'>Statistics</NavLink>
      </li>
      <li>
         <NavLink to='/blog'>Blog</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/' className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;