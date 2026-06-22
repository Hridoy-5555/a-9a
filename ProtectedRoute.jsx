import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50 dark:bg-slate-900">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-teal-600"></div>
      </div>
    );
  }
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner'; // Import component cleanly

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner message="Validating authorization keys safely..." />;
  }
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
}