import React, { useState } from 'react';

export const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
	const [search, setSearch] = useState(postQuery);
	const [checked, setChecked] = useState(latest);

	const formHandler = (event) => {
		event.preventDefault();
		const form = event.target;
		const query = form.search.value;
		const isLatest = form.latest.checked;
		const params = {};

		if (query.length) params.post = query;
		if (isLatest) params.latest = true;

		setSearchParams(params);
	};
	return (
		<form autoComplete='off' onSubmit={formHandler}>
			<input
				type='search'
				name='search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<label>
				<input
					type='checkbox'
					name='latest'
					className='filled-in'
					checked={checked}
					onChange={(e) => setChecked(e.target.checked)}
				/>
				<span>latest</span>
			</label>
		</form>
	);
};
