import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <NavLink className='navbar-brand' to='/'>Dog Liability Insurance</NavLink>
    <ul className='navbar-nav'>
      <li className='nav-item'><NavLink className='nav-link' to='/About'>About</NavLink></li>
      <li className='nav-item'><NavLink className='nav-link' to='/Questions'>F.A.Q.</NavLink></li>
      <li className='nav-item'><a href='tel:8555346495' className='nav-link'>855.543.6495</a></li>
    </ul>
  </nav>
);
