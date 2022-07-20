import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../hooc/useAuth';

export const LoginPage = () => {
	const { signIn } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from || '/';

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const user = form.username.value;
		signIn(user, () => navigate(fromPage, { replace: true }));
	};

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name: <input name='username' />
				</label>
				<button className='btn'>submit</button>
			</form>
		</div>
	);
};
