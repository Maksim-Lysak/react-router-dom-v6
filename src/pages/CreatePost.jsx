import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooc/useAuth';

export const CreatePost = () => {
	const navigate = useNavigate();
	const { signOut } = useAuth();
	return (
		<>
			<h1>Create post</h1>
			<button
				className='btn'
				onClick={() => signOut(() => navigate('/', { replace: true }))}
			>
				log out
			</button>
		</>
	);
};
