import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

export default AuthenticatedRoute;