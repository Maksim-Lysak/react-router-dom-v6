import React from 'react';
import { useParams } from 'react-router-dom';
export const EditPost = () => {
	const { id } = useParams();
	return <h2>Edit post {id}</h2>;
};
