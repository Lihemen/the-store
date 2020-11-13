import React from 'react';
import { Link } from 'react-router-dom';

import './BrandCard.css';
export default function FeatureCard(props) {
	return (
		<div
			// style={props.image && { background: props.image }}
			className='image-container'
		>
			<div>
				<h3 className='featured__title'>{props.title}</h3>
				<span className='featured__subtitle'>{props.subtitle}</span>
				<p>
					<Link className='featured__link' to='/products'>
						Shop Now
					</Link>
				</p>
			</div>
		</div>
	);
}
