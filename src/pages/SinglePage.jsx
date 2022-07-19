import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const SinglePage = () => {
	const [post, setPost] = useState({});
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [id]);
	return (
		<div>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
					<Link to={`/blog/${id}/edit`}>edit this post</Link>
				</>
			)}
		</div>
	);
};
