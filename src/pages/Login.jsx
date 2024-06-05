import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
        />
        <Link to="/home">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register if you don't have an ID</button>
        </Link>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ced4da;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }

  a {
    text-decoration: none;
    width: 100%;

    button {
      background-color: #2b73aa;

      &:hover {
        background-color: #2b73aa;
      }
    }
  }
`;