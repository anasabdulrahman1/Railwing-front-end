import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useAuth } from '../Auth/Auth'; // Import useAuth
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
const User = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { logout } = useAuth(); // Get logout function from context
  const [user] = useState(() => {
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || {
      name: "Guest",
      email: "",
      currentBookings: [], // Ensure this is initialized as an empty array
      paymentHistory: []    // Ensure this is initialized as an empty array
    };
  });
//   Handle logout

const handleLogout = () => {
    logout(); // Call logout function from context
    toast.success("Logout Successful!");
    navigate('/'); // Redirect to home page
};

  const navigateToBooking = (type) => {
    if (type === 'flight') {
      navigate('/flight-booking'); // Navigate to flight booking page
    } else if (type === 'train') {
      navigate('/train-booking'); // Navigate to train booking page
    }
  };

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <Button variant="danger" onClick={handleLogout}>
                Logout
            </Button>
      <div>
        <button onClick={() => navigateToBooking('flight')}>Book Flight</button>
        <button onClick={() => navigateToBooking('train')}>Book Train</button>
      </div>
      {/* Other user-related content */}
    </div>
  );
};

export default User;
