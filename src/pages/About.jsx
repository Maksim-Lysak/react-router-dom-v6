import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const About = () => {
	return (
		<div>
			<h1>About as</h1>
			<p>This is demo website about react-router-dom</p>
			<ul>
				<li>
					<Link to='contacts'>our contacts</Link>
				</li>
				<li>
					<Link to='team'>our team</Link>
				</li>
			</ul>
			{/* <Routes>
				<Route path='contacts' element={<p>our contact</p>} />
				<Route path='team' element={<p>our team</p>} />
			</Routes> */}
			<Outlet />
		</div>
	);
};
