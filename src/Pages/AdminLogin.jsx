import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Styles/AdminLogin.css'; // Import custom CSS for styling
import { toast } from 'react-toastify';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Mock admin credentials
    const mockAdminCredentials = {
        email: 'admin@example.com',
        password: 'admin123'
    };

    const handleLogin = (e) => {
        e.preventDefault();

         // Validate email format
         const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if (!emailPattern.test(email)) {
             setError('Invalid email format.');
             toast.error('Invalid email format.'); // Show toast error
             return;
         }
 

          // Check if the entered credentials match the mock credentials
          if (email === mockAdminCredentials.email && password === mockAdminCredentials.password) {
            // Successful login
            toast.success("Login Successful!"); // Show success toast
            navigate('/admin-dashboard'); // Redirect to Admin Dashboard
        } else {
            // Show error message
            setError('Invalid email or password. Please try again.');
            toast.error("Invalid email or password. Please try again."); // Show error toast
        }
    };

    return (
        <Container className="admin-login-container mt-5 pt-5">
        <div className="admin-login-card">
            <h1 className="admin-login-title">Admin Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="admin-login-form-group">
                    <Form.Label className="admin-login-label">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter admin email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="admin-login-input"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="admin-login-form-group">
                    <Form.Label className="admin-login-label">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="admin-login-input"
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="admin-login-button">
                    Login
                </Button>
            </Form>
        </div>
    </Container>
    );
};

export default AdminLogin;
