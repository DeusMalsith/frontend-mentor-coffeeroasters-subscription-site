import { Link } from 'gatsby';
import React from 'react';
import facebook from '../images/shared/desktop/icon-facebook.svg';
import instagram from '../images/shared/desktop/icon-instagram.svg';
import twitter from '../images/shared/desktop/icon-twitter.svg';
import * as style from './Footer.module.css';
import FooterLogo from './footerlogo';

function Footer() {
  return (
    <div>
      <nav>
        <ul className={style.footer}>
          <li className={style.logo}>
            <FooterLogo color='#FFF' />
          </li>
          <li className={style.navLinks}>
            <Link to='/'>Home</Link>
          </li>
          <li className={style.navLinks}>
            <Link to='/about'>About us</Link>
          </li>
          <li className={style.navLinks}>
            <Link to='/plan'>Create your plan</Link>
          </li>
          <li>
            <img src={facebook} alt='facebook icon' />
          </li>
          <li>
            <img src={twitter} alt='twitter icon' />
          </li>
          <li>
            <img src={instagram} alt='instagram icon' />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
