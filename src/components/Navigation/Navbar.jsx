import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/crown.svg';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
          <Link to="/sign-in" className="nav-link">
            SIGN IN
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
