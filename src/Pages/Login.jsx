import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth'; // Import useAuth
import { toast } from 'react-toastify'; // Import toast
import '../Styles/Login.css';
const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Get login function from context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve users from local storage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        console.log('Existing Users:', existingUsers); // Log existing users
        console.log('Email:', email); // Log entered email
        console.log('Password:', password); // Log entered password

        const user = existingUsers.find(user => user.email === email && user.password === password);

        if (user) {
            login(); // Call login function from context
            toast.success("Login Successful!"); // Show success toast
            navigate('/user'); // Redirect to User page
        } else {
            // setError('Invalid email or password. Please try again.');
            toast.error("Invalid email or password. Please try again."); // Show error toast
        }
    };

    return (
        <Container className="container-login mt-5 pt-5">
        <div className="form-container">
            <h1 className="title-login">Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="form-group">
                    <Form.Label className="label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="form-group">
                    <Form.Label className="label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="button">
                    Login
                </Button>
            </Form>
            <div className="mt-3">
                <Button variant="link" className="register-button" onClick={() => navigate('/register')}>
                    If you already have an account, go to Register
                </Button>
            </div>
        </div>
    </Container>
    );
};

export default Login;
