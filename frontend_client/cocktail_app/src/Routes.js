import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import Dashboard from  './components/Dashboard';
import AuthenticatedRoute from './AuthRoutes';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AuthenticatedRoute component={Dashboard} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;