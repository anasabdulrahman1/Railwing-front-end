import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styles/Register.css';
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Existing Users before registration:', existingUsers); // Log existing users

    // Check if the user already exists
    const userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
      setError('User already exists. Please log in.');
      return;
    }

    // Save the new user to local storage
    existingUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    console.log('Existing Users after registration:', existingUsers); // Log updated users

    // Redirect to login page after successful registration
    navigate('/login');
  };

  return (
    <Container className="register-container mt-5 pt-5">
            <div className="register-card">
                <h1 className="register-title">Register</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleRegister}>
                    <Form.Group controlId="formBasicEmail" className="register-form-group">
                        <Form.Label className="register-label">Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="register-input"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="register-form-group">
                        <Form.Label className="register-label">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="register-input"
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="register-button">
                        Register
                    </Button>
                </Form>
                <div className="mt-3">
                    <Button variant="link" className="register-login-button" onClick={() => navigate('/login')}>
                        If you already have an account, go to Login
                    </Button>
                </div>
            </div>
        </Container>
  );
};

export default Register;
