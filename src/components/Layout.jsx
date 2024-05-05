import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import styled from 'styled-components'

const Layout = () => {
  return (
    <div>
      <Head>
       <Header />
      </Head>
      

        <Outlet />
  
  
      <Footer />
    </div>
  )
}

export default Layout;


const Head = styled.div`
  padding-top: 3.5rem;
  
  @media (max-width: 768px) {
    padding-top: 4rem;
  }

`

