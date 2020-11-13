import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import * as environments from '../../enviroments';

import Category from './components/Category/SingleCategory';

export default function Categories({ match }) {
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([{}]);
	useEffect(() => {
		setLoading(true);
		const fetchFromServer = async () => {
			const response = await fetch({
				method: 'GET',
				url: `${environments.dev.api}/categories`,
			});
			const values = await response.json();
			setCategories(values);
			setLoading(false);
		};
		fetchFromServer();
	}, []);
	return (
		<div>
			<h1>Component</h1>
			{!loading && (
				<div>
					<h1>{JSON.stringify(categories)}</h1>
				</div>
			)}
			<Route path={`${match.path}/:category`} render={Category} />
		</div>
	);
}
