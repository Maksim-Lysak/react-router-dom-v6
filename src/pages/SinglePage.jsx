import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

export const SinglePage = () => {
	const [post, setPost] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	// const goBack = () => navigate(-1);
	const goBack = () => navigate('/blog', { state: 123 });

	// Плохая практика, если нужен переход лучше использовать <Lnk/>
	const goHome = () => navigate('/', { replace: true });

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
	}, [id]);
	return (
		<div>
			<button onClick={goBack} className='btn'>
				go back
			</button>
			<button onClick={goHome} className='btn'>
				go home
			</button>
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
