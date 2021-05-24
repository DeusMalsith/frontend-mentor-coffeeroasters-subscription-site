import { Link } from 'gatsby';
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/plan'>Create your plan</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
