import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <NavLink className='navbar-brand' to='/'>Dog Liability Insurance</NavLink>
    <ul className='navbar-nav'>
      <li className='nav-item'><NavLink className='nav-link' to='/Quote'><i className='fa fa-plus-circle'></i> New Quote</NavLink></li>
      <li className='nav-item'><NavLink className='nav-link' to='/About'><i className='fa fa-paw'></i> About</NavLink></li>
      <li className='nav-item'><NavLink className='nav-link' to='/Questions'><i className='fa fa-question-circle'></i> F.A.Q.</NavLink></li>
      <li className='nav-item'><a href='tel:8555346495' className='nav-link'><i className='fa fa-phone-square'></i> 855.543.6495</a></li>
    </ul>
  </nav>
);
