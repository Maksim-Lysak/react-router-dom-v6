import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';

export const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const postQuery = searchParams.get('post') || '';
	const latest = searchParams.has('latest');

	const startWith = latest ? 80 : 1;

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<>
			<h1>Our news</h1>
			<BlogFilter
				postQuery={postQuery}
				latest={latest}
				setSearchParams={setSearchParams}
			/>
			<Link to='/blog/new'>add new post</Link>
			<ol>
				{posts
					.filter(
						(post) => post.title.includes(postQuery) && post.id >= startWith
					)
					.map((post) => (
						<Link key={post.id} to={`/blog/${post.id}`}>
							<li>
								{post.id}
								{post.title}
							</li>
						</Link>
					))}
			</ol>
		</>
	);
};
