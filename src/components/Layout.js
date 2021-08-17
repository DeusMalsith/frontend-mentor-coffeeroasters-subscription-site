import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import './global.css';
import * as style from './Layout.module.css';


function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Helmet>
        <body className={`${openMenu ? style.noScroll : ''}`}/>
      </Helmet>
      <title>Frontend Mentor | Coffeeroasters subscription site</title>
      <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
