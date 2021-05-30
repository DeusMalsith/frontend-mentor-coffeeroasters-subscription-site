import { Link } from 'gatsby';
import React from 'react';
import logo from '../images/shared/desktop/logo.svg';
import './global.css';
import * as style from '../components/Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={style.navbar}>
        <li className={style.logo}>
          <img src={logo} alt='coffeeroasters logo' />
        </li>
        <li className={style.navLinks}>
          <Link to='/'>Home</Link>
        </li>
        <li className={style.navLinks}>
          <Link to='/about'>About Us</Link>
        </li>
        <li className={style.navLinks}>
          <Link to='/plan'>Create your plan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
