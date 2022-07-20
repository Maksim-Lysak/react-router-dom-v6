import React from 'react';
import {
	Home,
	Blog,
	About,
	EditPost,
	NotFound,
	LoginPage,
	SinglePage,
	CreatePost
} from './pages/';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

import { RequireAuth, AuthProvider } from './hoc/';

export const App = () => {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='blog' element={<Blog />} />
						<Route path='blog/:id' element={<SinglePage />} />
						<Route path='blog/:id/edit' element={<EditPost />} />
						<Route
							path='blog/new'
							element={
								<RequireAuth>
									<CreatePost />
								</RequireAuth>
							}
						/>
						<Route path='about' element={<About />} />
						<Route path='login' element={<LoginPage />} />
						{/* переадресация без сохранения истории */}
						<Route path='about-us' element={<Navigate to='/about' replace />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</AuthProvider>
		</>
	);
};
