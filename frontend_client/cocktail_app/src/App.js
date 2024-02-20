import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const handleLogin = (user) => {
    axios.post('http://localhost:5000/auth/login', { username: user.username, password: user.password })
      .then(response => {
        // set loginSuccess to true
        setLoginSuccess(true);
      })
      .catch(error => {
        alert('Invalid username or password');
      });
  }

  // redirect to dashboard if loginSuccess is true
  useEffect(() => {
    if (loginSuccess) {
      navigate('/dashboard');
    }
  }, [loginSuccess, navigate]);

  return (
     <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      <Route
        path="/dashboard"
        element={
          localStorage.getItem('token') ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    );
}

export default App;