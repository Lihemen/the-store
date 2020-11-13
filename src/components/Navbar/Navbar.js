import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
	const [input, setInput] = useState('');
	const search = (predicate) => {
		console.log(predicate);
	};
	function collapsible() {
		console.log(this);
		let mobileMenu = document.getElementsByClassName('mobile-menu');
		mobileMenu[0].classList.toggle('show');
	}
	return (
		<header className='header'>
			<div className='topbar'>
				<div className='lang-cur'>
					<p className='language'>
						English <i className='fas fa-chevron-down'></i>
					</p>
					<p className='currency'>
						Naira <i className='fas fa-chevron-down'></i>
					</p>

					<span>Welcome to Vineshield Pharmacy</span>
				</div>
				<div className='links'>
					<div className='auth__link'>
						<i className='fas fa-user'></i>
						<span>My Account</span>
						<i className='fas fa-chevron-down'></i>
					</div>
					<div className='category'>
						<i className='fas fa-heart'></i>
						<span>Wishlist </span>
						<p>(0)</p>
					</div>
				</div>
			</div>
			<div className='midbar'>
				<div className='logo-container'>
					<img src='' alt='Logo'></img>
				</div>
				<div className='search-bar'>
					<input
						placeholder='Enter your keyword'
						className='nav__search'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<button
						className='search-btn'
						onClick={() => {
							search(input);
							setInput('');
						}}
					>
						Search
					</button>
				</div>
				<div className='cart'>
					<i className='fas fa-cart'></i>
					<span>
						<p>Shopping Cart</p>
						<span>3 Item(s) - Price</span>
					</span>
				</div>
			</div>
			<nav className='navbar'>
				<span>Categories</span>
				<ul className='nav__links'>
					<li>
						<Link to='' className='nav__link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/categories' className='nav__link'>
							Collection
						</Link>
					</li>
					<li>
						<Link to='/categories/baby' className='nav__link'>
							Baby Care
						</Link>
					</li>
					<li>
						<Link to='/categories/reproductive-health' className='nav__link'>
							Reproductive Health
						</Link>
					</li>
					<li>
						<Link to='/categories/men' className='nav__link'>
							Men
						</Link>
					</li>
					<li>
						<Link to='/categories/women' className='nav__link'>
							Women
						</Link>
					</li>
					<li>
						<Link to='/categories/personal-care' className='nav__link'>
							Personal Care
						</Link>
					</li>
					<li>
						<Link to='/categories' className='nav__link'>
							More
						</Link>
					</li>
				</ul>
				<div className='menu-btn' onClick={() => collapsible()}>
					<div className='menu-btn__line'></div>
					<div className='menu-btn__line'></div>
					<div className='menu-btn__line'></div>
				</div>
			</nav>
			<div className='mobile-menu'>
				<ul className='mobile-nav__links'>
					<li>
						<Link to='' className='mobile-nav__link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/categories' className='mobile-nav__link'>
							Collection
						</Link>
					</li>
					<li>
						<Link to='/categories/baby' className='mobile-nav__link'>
							Baby Care
						</Link>
					</li>
					<li>
						<Link
							to='/categories/reproductive-health'
							className='mobile-nav__link'
						>
							Reproductive Health
						</Link>
					</li>
					<li>
						<Link to='/categories/men' className='mobile-nav__link'>
							Men
						</Link>
					</li>
					<li>
						<Link to='/categories/women' className='mobile-nav__link'>
							Women
						</Link>
					</li>
					<li>
						<Link to='/categories/personal-care' className='mobile-nav__link'>
							Personal Care
						</Link>
					</li>
					<li>
						<Link to='/categories' className='mobile-nav__link'>
							More
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Navbar;
