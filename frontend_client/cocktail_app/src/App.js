import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CombinedComponent from './components/LandingPage';
import CocktailDetails from './components/CocktailDetails';
import Navbar from './components/NavBar';

function App() {
  useEffect(() => {
  }, []);

  return (
    <Routes>
      <Route path="/" exact element={<CombinedComponent />} />
      <Route path="/" element={<Navbar />} />
      <Route path="/drinks/:id" element={<CocktailDetails />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;