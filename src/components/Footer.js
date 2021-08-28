import { Link } from 'gatsby';
import React from 'react';
import facebook from '../images/shared/desktop/icon-facebook.svg';
import instagram from '../images/shared/desktop/icon-instagram.svg';
import twitter from '../images/shared/desktop/icon-twitter.svg';
import * as style from './Footer.module.css';
import FooterLogo from './footerlogo';

function Footer() {
  return (
    <nav className={style.container}>
      <ul className={style.subContainer}>
        <li className={style.logo}>
          <FooterLogo color='#FFF' />
        </li>
        <ul className={style.navLinks}>
          <li className={style.link}>
            <Link to='/'>Home</Link>
          </li>
          <li className={style.link}>
            <Link to='/about'>About us</Link>
          </li>
          <li className={style.link}>
            <Link to='/plan'>Create your plan</Link>
          </li>
        </ul>
        <ul className={style.socialMedia}>
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
      </ul>
    </nav>
  );
}

export default Footer;
