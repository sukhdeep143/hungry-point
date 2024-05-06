import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import { FaCartShopping } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledNav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <img src={Logo} alt="" width="30" height="30" />
        </Link>
        <Ulitem>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav list-unstyled">
              <li className="nav-item pl-3">
                <Link to="/shoppingCart">
                  <FaCartShopping /> Cart
                </Link>
              </li>
              <li className="nav-item pl-3">
                <Link to="/profile">
                  {' '}
                  <CgProfile />
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </Ulitem>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </StyledNav>
  );
};

export default Header;

const Ulitem = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav`
  background-color: rgba(255, 255, 255, 0.5); /* Adjust the alpha (4th value) to control transparency */
  backdrop-filter: blur(5px); /* Adjust the blur radius as needed */
`;
