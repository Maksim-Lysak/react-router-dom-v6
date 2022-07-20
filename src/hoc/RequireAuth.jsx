import { useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../hooc/useAuth';

export const RequireAuth = ({ children }) => {
	const location = useLocation();
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/login' state={{ from: location.pathname }} />;
	}
	return children;
};
