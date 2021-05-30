import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div>
      <title>Frontend Mentor | Coffeeroasters subscription site</title>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
