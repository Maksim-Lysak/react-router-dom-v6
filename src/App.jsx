import React from 'react';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { SinglePage } from './pages/SinglePage';
import { CreatePost } from './pages/CreatePost';
import { EditPost } from './pages/EditPost';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='blog/:id' element={<SinglePage />} />
					<Route path='blog/:id/edit' element={<EditPost />} />
					<Route path='blog/new' element={<CreatePost />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	);
};
