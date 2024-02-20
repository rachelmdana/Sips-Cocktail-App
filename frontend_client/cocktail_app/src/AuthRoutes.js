import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const AuthenticatedRoute = () => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <LoginPage />;
};

export default AuthenticatedRoute;