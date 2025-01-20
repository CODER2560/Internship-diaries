import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import './components/Login.css';
import Signup from './components/Signup';
import './components/Signup.css';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
    
   
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
     
    </div>

  );
    
}

export default App;
