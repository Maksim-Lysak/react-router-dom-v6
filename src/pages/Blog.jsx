import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Blog = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<>
			<ul>
				{posts.map((post) => (
					<Link key={post.id} to={`/blog/${post.id}`}>
						<li>{post.title}</li>
					</Link>
				))}
			</ul>
		</>
	);
};
