import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Dummy authentication logic
    if (username === 'admin' && password === 'admin@dev') {
      // Redirect to admin page on successful login
      navigate('/adminpage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='admin-login'>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          
          <input 
            placeholder='Username'
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          
          <input 
          placeholder='Password'
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
           <FaLock className='icon' />
        </div>
        <button className='log-button' type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
