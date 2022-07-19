import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
	return (
		<div className='container'>
			<h4>
				this page dosen't exist. Go <Link to='/'>home</Link>
			</h4>
		</div>
	);
};
