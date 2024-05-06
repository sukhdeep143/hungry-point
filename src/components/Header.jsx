import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import styled from 'styled-components';


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container-fluid">
      
      <Link to='/'>
        <img src={Logo} alt="" width="30" height="30" />
      </Link>
      <Ulitem>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav list-unstyled ">

          <li className="nav-item pl-3">
            <Link to='/shoppingCart' ><FaCartShopping /> Cart</Link>
          </li>

          <li className="nav-item pl-3">
            <Link to='/profile'> <CgProfile />Profile</Link>
          </li>

        </ul>
    


      </div>
     </Ulitem>
     {/* <Button> */}
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     {/* </Button> */}
    </div>
  </nav>
  )
}

export default Header


const Ulitem = styled.div`
  display: flex;
  justify-content: flex-end;
`

// const Button = styled.div`
//   /* display: flex;
//   justify-content: center; */
// `
