import React, { useState } from 'react';
import axios from 'axios';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in local storage
      // Redirect to dashboard or another authenticated route
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default UserLogin;
