import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
};

  const handleAdminLoginClick = () => {
    navigate('/admin-login'); // Redirect to the admin login page
};

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-lg stylish-navbar">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center">
              
              <span className="website-name">Railwing</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              {/* Local Time */}
              <div className="d-flex align-items-center me-4">
                <FaClock className="clock-icon me-2" />
                <span className="time-text">{time}</span>
              </div>

              {/* Login Buttons */}
              <Button
                variant="outline-light"
                className="me-2 stylish-btn"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                variant="outline-light"
                className="me-2 stylish-btn"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
              <Button
                variant="outline-light"
                className="stylish-btn"
                onClick={handleAdminLoginClick}
              >
                Admin Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;


