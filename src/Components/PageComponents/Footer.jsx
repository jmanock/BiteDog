import React from 'react';
import {NavLink} from 'react-router-dom';

export const Footer = () => (
  <footer>
    <div className='container-fluid text-center'>
      <div className='row'>
        <div className='col-sm-6'>
          <h5 className='text-uppercase'>quick contact</h5>
          <h6 className='text-uppercase'>dean insurance agency</h6>
          <address>
            230 N. Westmonte Drive <br /> Suite 2100 <br /> Altamonte Springs, FL 32714 <br /> Phone: 800.721.3326 or <br /> 407.865.7477 ext 101 <br /> Fax: 407.865.7557
          </address>
        </div>
        <div className='col-sm-6'>
          <h5 className='text-uppercase'>quick links</h5>
          <ul className='list-unstyled'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Quote'>New Quote</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Questions'>F.A.Q.</NavLink></li>
            <li><NavLink to='/Privacy'>Privacy</NavLink></li>
            <li><NavLink to='/Terms'>Terms &amp; Conditions</NavLink></li>
          </ul>
        </div>
      </div>
      <span className='text-center'>&copy; 2018 Dean Insurance Agency</span>
    </div>
  </footer>
);
