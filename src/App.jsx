import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import User from './Pages/User'; // Import User component
import AdminDashboard from './Pages/AdminDashboard';
import AdminLogin from './Pages/AdminLogin'; // Import Admin Login
import FlightBooking from './Pages/FlightBooking';
import TrainBooking from './Pages/TrainBooking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProtectedRoute from './Components/ProtectedRoute'; // Import the ProtectedRoute component
import { AuthProvider } from './Auth/Auth';



function App() {
  const location = useLocation(); // Get the current location

  // Define the routes where the header should be displayed
  const headerRoutes = [
    '/',
    '/login',
    '/register',
    '/admin-login'
  ];

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {headerRoutes.includes(location.pathname) && <Header />} {/* Conditionally render Header */}
      
      <div className="flex-grow-1">
        <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* User Route - No authentication check needed */}
          <Route path="/user" element={<User />} /> Directly render User component

          {/* Protected User Routes */}
          <Route
            path="/flight-booking"
            element={
              <ProtectedRoute>
                <FlightBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/train-booking"
            element={
              <ProtectedRoute>
                <TrainBooking />
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} /> {/* No protection needed */}
          <Route
            path="/admin-dashboard"
            element={
              
                <AdminDashboard />
              
            }
          />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AuthProvider>
      </div>

      <Footer />
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </div>
   
  );
}

export default App;
