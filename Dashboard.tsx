import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove user session from localStorage
        localStorage.removeItem('currentSessionUserData');
       
        navigate('/login'); 
    };

    return (
        <div>
            <p>Welcome to the Dashboard !!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard ;