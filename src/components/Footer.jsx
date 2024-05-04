import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <UpperFooter>
        Content for the upper footer
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
  padding: 20px;
  text-align: center;
  border-top: 1px solid black;

`;

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
