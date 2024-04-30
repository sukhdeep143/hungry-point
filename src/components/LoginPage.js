import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can add your logic to check the credentials with your backend
    const isValid = await checkCredentials(email, password);

    if (isValid) {
      handleLogin(email);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const checkCredentials = async (email, password) => {
    // Add your backend logic here to verify credentials
    // Example: You can make a fetch request to your backend API
    // and verify the credentials

    // For demonstration purposes, returning true here
    // Replace this with actual backend logic
    return true;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4">Login</h2>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-3'>
            Login
          </Button>
        </Form>
        <p className="mt-3">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
