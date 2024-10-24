import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DelayedNavigate = ({ to }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(to);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [to, navigate]);

    return (
        <div className="text-center mt-5">
            <h2>Redirecting...</h2>
            <p>You will be redirected in 3 seconds.</p>
        </div>
    );
};

export default DelayedNavigate;

