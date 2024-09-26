import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './Login.css';
import bitlogo from '../assets/bitlogo.jpeg'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    
    navigate('/dashboard');  
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <img className='bitlogo' src={bitlogo} alt="logo" />
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
