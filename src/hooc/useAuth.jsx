import { useContext } from 'react';
import { AuthContext } from '../hoc/';

export const useAuth = () => {
	return useContext(AuthContext);
};
