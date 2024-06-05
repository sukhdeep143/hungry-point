import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
  return (
    <ProfileContainer>
      <h1>Profile</h1>
      <Link to="/">
        <LogoutButton>Log Out</LogoutButton>
      </Link>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  text-align: center;
`;

const LogoutButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
