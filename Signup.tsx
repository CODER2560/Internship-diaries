import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup (){
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();
    //handle register
    const handleRegister = () => {
       
        if (email && password && name) {
            //localStorage.setItem('userSession', JSON.stringify({ email, password }));
            localStorage.setItem('currentSessionUserData', JSON.stringify({name, email, password}))
            alert('Registration successful!');
            navigate('/login');
        } else {
            alert('Please provide all details (Name, Email, Password)!');
        }
    };

     

    return(
        <div className="parent">
        <h2>SignUp</h2>
        <div className="child">
            <input
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <br />
            <input
                type="email"
                placeholder="Enter valid email address"
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
            <br />
            <button className='btn' onClick={handleRegister}>Register</button>
            
        </div>
    </div>
    );
}

export default Signup ;