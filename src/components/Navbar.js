import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/shared/desktop/logo.svg';
import * as navbarStyles from '../components/Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={navbarStyles.navbar}>
        <li className={navbarStyles.logo}>
          <img src={logo} alt='coffeeroasters logo' />
        </li>
        <li className={navbarStyles.navLinks}>
          <Link to='/'>Home</Link>
        </li>
        <li className={navbarStyles.navLinks}>
          <Link to='/about'>About Us</Link>
        </li>
        <li className={navbarStyles.navLinks}>
          <Link to='/plan'>Create your plan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
