import React from 'react';

import ContactForm from './ContactForm';

import './Contact.css';
export default function Contact() {
	return (
		<div className='contact'>
			<div className='contact__banner'>
				<img alt='banner' />
			</div>
			<h1 className='contact__heading'>
				You have questions? We have got answers
			</h1>
			<p className='contact__text'>
				make a type specimen book. It has survived not only five centuries, but
				also the leap into electronic typesetting, remaining essentially
				unchanged. It was popularised in the 1960s with the release of Letraset
				sheets containing Lorem Ipsum passages{' '}
			</p>
			<div className='contact__grid'>
				<span className='contact__grid-col'>
					<span>
						<i className='fas fa-phone-alt'></i>
					</span>
					<p>Tel</p>
					<p className='timesheet'>
						<a
							href='tel:07000000000'
							rel='noopener noreferrer'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							0700 000 0000
						</a>
						<a
							href='tel:08000000000'
							rel='noopener noreferrer'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							0800 000 0000
						</a>
					</p>
				</span>
				<span className='contact__grid-col'>
					<span>
						<i className='fas fa-envelope'></i>
					</span>
					<p>Mail</p>
					<p>
						<a
							href='mailto:info@merkthev.com'
							rel='noopener noreferrer'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							info@merkthev.com
						</a>
					</p>
				</span>
				<span className='contact__grid-col'>
					<span>
						<i className='fas fa-home'></i>
					</span>
					<p>Time</p>
					<p className='timesheet'>
						<span>Mon - Sat: 8:00am - 9:00pm </span>
						<span>Sunday: 4:00pm - 9:00pm</span>
					</p>
				</span>
			</div>
			<div>
				<h2 className='contact__heading'>Leave a message</h2>
				<ContactForm />
			</div>
		</div>
	);
}
