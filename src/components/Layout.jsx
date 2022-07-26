import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
	return (
		<>
			<header className='container'>
				<nav className='nav-wrapper'>
					<NavLink to='/' className='brand-logo'>
						Logo
					</NavLink>
					<ul className='right'>
						<li>
							<NavLink to='/' className='nav-link'>
								home
							</NavLink>
						</li>
						<li>
							<NavLink to='blog' className='nav-link'>
								blog
							</NavLink>
						</li>
						<li>
							<NavLink to='about' className='nav-link'>
								about
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main className='container'>
				<Outlet />
			</main>
			<footer className='container page-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col l6 s12'>
							<h5 className='white-text'>Footer Content</h5>
							<p className='grey-text text-lighten-4'>
								You can use rows and columns here to organize your footer
								content.
							</p>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h5 className='white-text'>Links</h5>
							<ul>
								<li>
									<Link className='grey-text text-lighten-3' to='blog/new'>
										create post
									</Link>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										NavLink 2
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										NavLink 3
									</a>
								</li>
								<li>
									<a className='grey-text text-lighten-3' href='#!'>
										NavLink 4
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright'>
					<div className='container'>
						© 2014 Copyright Text
						<a className='grey-text text-lighten-4 right' href='#!'>
							More Links
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};
