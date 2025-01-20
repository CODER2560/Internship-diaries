import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        const userSessionData = JSON.parse(localStorage.getItem('currentSessionUserData') || "{}");

        if (email === userSessionData.email && password === userSessionData.password) {
            setIsLoggedIn(true); 
            alert('Login successful!');
            navigate('/dashboard');
            
        } else {
            alert('Invalid credentials!');
        }
    };

    const handleRegister = () => {
        navigate('/signup');
    };

    return (
        <div className="parent">
            <h2>Login</h2>
            <div className="child">
                <input
                    type="email"
                    placeholder="Enter the registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button onClick={handleLogin}>Login</button>
                <br />
                <br />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Login;

