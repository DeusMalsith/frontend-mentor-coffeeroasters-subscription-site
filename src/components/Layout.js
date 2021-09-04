import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import * as style from './Layout.module.css';

function Layout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <title>Frontend Mentor | Coffeeroasters subscription site</title>
      <Helmet>
        <body className={openMenu ? style.noScroll : null} />
      </Helmet>
      <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
