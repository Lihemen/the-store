import React from 'react';
import { Link } from 'react-router-dom';

import './404Error.css';

export default function Error404() {
	return (
		<div className='error__404'>
			<p className='error__title'>Oops!!! Seems like you got lost</p>
			<Link to='/' className='error__link'>
				Click to go back
			</Link>
		</div>
	);
}
