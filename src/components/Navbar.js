import { Link } from 'gatsby';
import React from 'react';
import Logo from '../images/shared/desktop/logo.svg';
import iconClose from '../images/shared/mobile/icon-close.svg';
import iconHamburger from '../images/shared/mobile/icon-hamburger.svg';
import * as style from '../components/Navbar.module.css';

function Navbar({ setOpenMenu, openMenu }) {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <Link to='/'>
          <img src={Logo} alt='coffeeroasters logo' className={style.logo} />
        </Link>

        <ul className={`${style.navMenu} ${openMenu ? style.showNavMenu : ''}`}>
          <li className={style.navLink}>
            <Link to='/' className={style.navLink}>
              Home
            </Link>
          </li>
          <li className={style.navLink}>
            <Link to='/about' className={style.navLink}>
              About Us
            </Link>
          </li>
          <li className={style.navLink}>
            <Link to='/plan' className={style.navLink}>
              Create Your Plan
            </Link>
          </li>
        </ul>

        <button
          className={style.hamburgerButton}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src={!openMenu ? iconHamburger : iconClose}
            alt='mobile menu button'
            className={!openMenu ? style.hamburgerOpen : style.hamburgerClose}
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
