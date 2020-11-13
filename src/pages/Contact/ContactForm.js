import React, { useState } from 'react';

export default function ContactForm() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		subject: '',
		message: '',
	});
	return (
		<div>
			<form>
				<div className='form-group'>
					<label>
						<input
							value={form.name}
							onChange={(e) =>
								setForm((state) => ({ ...state, name: e.target.value }))
							}
							className='form-control'
							type='text'
							placeholder='Name'
						/>
					</label>
					<label>
						<input
							value={form.email}
							type='email'
							placeholder='Email'
							onChange={(e) =>
								setForm((state) => ({ ...state, email: e.target.value }))
							}
							className='form-control'
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						<input
							value={form.phoneNumber}
							type='tel'
							onChange={(e) =>
								setForm((state) => ({ ...state, phoneNumber: e.target.value }))
							}
							className='form-control'
							placeholder='Phone Number'
						/>
					</label>
					<label>
						<input
							value={form.subject}
							type='text'
							onChange={(e) =>
								setForm((state) => ({ ...state, subject: e.target.value }))
							}
							className='form-control'
							placeholder='Subject'
						/>
					</label>
				</div>
				<div className='col12'>
					<label>
						<textarea
							value={form.message}
							onChange={(e) =>
								setForm((state) => ({ ...state, message: e.target.value }))
							}
							maxLength={500}
							placeholder='Message'
							className='form-control form-textarea'
						></textarea>
					</label>
				</div>
			</form>
		</div>
	);
}
