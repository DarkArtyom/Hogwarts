import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../components/Auth/UserAuthContext';

export const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};
