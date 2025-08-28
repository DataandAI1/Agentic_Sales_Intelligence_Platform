import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../common/LoadingSpinner';

const PrivateRoute: React.FC = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner size="large" message="Checking authentication..." />;
  }

  // For demo purposes, always allow access
  // In a real app, you'd check: return currentUser ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;