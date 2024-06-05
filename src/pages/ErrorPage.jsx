import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowBackCircle } from "react-icons/io5";


const ErrorPage = () => {
  return (
    <CenteredContainer>
      <Link to='/'>
        <button type="button" className="btn btn-primary">Go Back To The Home Page <IoArrowBackCircle /></button>
        <h2>Page not found</h2>
      </Link>
     
    </CenteredContainer>
  );
};

export default ErrorPage;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensures the container takes up the full height of the viewport */
`;

