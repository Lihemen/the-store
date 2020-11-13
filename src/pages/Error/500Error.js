import React from 'react';
import { Link } from 'react-router-dom';

import './500Error.css';

export default function Error500() {
	return (
		<div className='error__404'>
			<p>Oops!!! An error has occurred</p>
			<Link to='/'>Click to go back</Link>
		</div>
	);
}
