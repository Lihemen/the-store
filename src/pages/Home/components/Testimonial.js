import React from 'react';

import './Testimonial.css';

export default function Testimonial(props) {
	return (
		<div className='testimonial'>
			<div className='image__container'>
				<img className='client__image' alt={props.fullname} />
				<span className='quotes'>
					<i className='fas fa-quote-right'></i>
				</span>
			</div>
			<h3 className='client__name'>{props.fullname}</h3>
			<span className='client__title'>{props.jobTitle}</span>
			<p className='client__review'>{props.review}</p>
		</div>
	);
}
