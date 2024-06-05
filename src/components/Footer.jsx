import React from 'react';
import styled from 'styled-components';
// import HomeImge from './HomeImge';


const Footer = () => {
  return (
    <FooterContainer>
      <UpperFooter>
      {/* <HomeImage > */}
        This is a simple footer 

      {/* </HomeImage> */}
      </UpperFooter>
      <Divider />
      <LowerFooter>
        <p>&copy; 2024 Sukhdeep Singh. All rights reserved.</p>
      </LowerFooter>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
`;

const UpperFooter = styled.div`
  position: relative; /* Ensure proper positioning context */
  padding: 20px;
  text-align: center;
  border-top: 1px solid black;
`;

// const HomeImage = styled(HomeImge)`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover; /* Ensure the image covers the entire area */
// `;

const Divider = styled.hr`
  margin: 0; /* Remove default margin */
`;

const LowerFooter = styled.div`
  padding: 5px;
  padding-bottom: 1px;
  text-align: center;
  /* background-color: red; */
  border-top: 1px solid black;


`;

 

export default Footer;
