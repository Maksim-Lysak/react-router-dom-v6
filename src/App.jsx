import React from 'react';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { SinglePage } from './pages/SinglePage';
import { CreatePost } from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
import { NotFound } from './pages/NotFound';
import { LoginPage } from './pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

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
