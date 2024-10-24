import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    return children; // Render the children if authenticated
};

export default ProtectedRoute;
