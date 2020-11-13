import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
	function collapsible() {
		return;
		// const list = span.parentElement.nextElementSibling;
		// list.classList.toggle('mobile-show');
	}
	return (
		<footer className='footer'>
			<div className='company__features'>
				<div className='single__feature'>
					<span className='logo'>
						<i className='fas fa-truck fa-2x'></i>
					</span>
					<div>
						<p>Free Shipping</p>
						<span>All orders over $150</span>
					</div>
				</div>
				<div className='single__feature'>
					<span className='logo'>
						<i className='fas fa-money-bill fa-2x'></i>
					</span>
					<div>
						<p>30 Days returns</p>
						<span>Money Back Guarantee</span>
					</div>
				</div>
				<div className='single__feature'>
					<span className='logo'>
						<i className='fas fa-phone-alt fa-2x'></i>
					</span>
					<div>
						<p>24/7 Support</p>
						<span>Feel free to Contact us</span>
					</div>
				</div>
				<div className='single__feature'>
					<span className='logo'>
						<i className='fas fa-piggy-bank fa-2x'></i>
					</span>
					<div>
						<p>Online Shopping</p>
						<span>Save up to 30% on the store</span>
					</div>
				</div>
			</div>
			<div className='footer__links'>
				<div className='footer__links-col'>
					<h3>
						Information
						<span className='title-collapsible' onClick={() => collapsible()}>
							<i className='fas fa-plus'></i>
						</span>
					</h3>
					<ul className='links__list'>
						<li>
							<Link to='/about'>About Us</Link>
						</li>
						<li>
							<Link to='/faqs/delivery-info'>Delivery Information</Link>
						</li>
						<li>
							<Link to='/privacy-policy'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/faqs/terms-and-conditions'>
								Terms &amp; Conditions
							</Link>
						</li>
						<li>
							<Link to='/products/specials'>Specials</Link>
						</li>
						<li>
							<Link to='/myaccount/orders/history'>Order History</Link>
						</li>
						<li>
							<Link to='/shopping-cart'>View Cart</Link>
						</li>
					</ul>
				</div>

				<div className='footer__links-col'>
					<h3>
						My Account
						<span className='title-collapsible' onClick={() => collapsible()}>
							<i className='fas fa-plus'></i>
						</span>
					</h3>
					<ul className='links__list'>
						<li>
							<Link to='/about'>About Us</Link>
						</li>
						<li>
							<Link to='/faqs/delivery-info'>Delivery Information</Link>
						</li>
						<li>
							<Link to='/privacy-policy'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/faqs/terms-and-conditions'>
								Terms &amp; Conditions
							</Link>
						</li>
						<li>
							<Link to='/products/specials'>Specials</Link>
						</li>
						<li>
							<Link to='/myaccount/orders/history'>Order History</Link>
						</li>
						<li>
							<Link to='/shopping-cart'>View Cart</Link>
						</li>
					</ul>
				</div>

				<div className='footer__links-col'>
					<h3>
						Extras
						<span className='title-collapsible' onClick={() => collapsible()}>
							<i className='fas fa-plus'></i>
						</span>
					</h3>
					<ul className='links__list'>
						<li>
							<Link to='/faqs/delivery-information'>Delivery Information</Link>
						</li>
						<li>
							<Link to='/privacy-policy'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/cookie-policy'>Cookies Policy</Link>
						</li>
						<li>
							<Link to='/faqs/terms-and-conditions'>
								Terms &amp; Conditions
							</Link>
						</li>
						<li>
							<Link to='/products/specials'>Sitemap</Link>
						</li>
						<li>
							<Link to='/myaccount/orders/history'>Product Recall</Link>
						</li>
						<li>
							<Link to='/faqs'>Helps &amp; FAQs</Link>
						</li>
					</ul>
				</div>

				<div className='footer__links-col'>
					<h3>
						Contact Us
						<span className='title-collapsible' onClick={() => collapsible()}>
							<i className='fas fa-plus'></i>
						</span>
					</h3>
					<ul className='links__list'>
						<li>
							<Link to='/contact-us'>Contact Us</Link>
						</li>
						<li>
							<Link to='/faqs/delivery-info'>Delivery Information</Link>
						</li>
						<li>
							<Link to='/privacy-policy'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/faqs/terms-and-conditions'>
								Terms &amp; Conditions
							</Link>
						</li>
						<li>
							<Link to='/products/specials'>Specials</Link>
						</li>
						<li>
							<Link to='/myaccount/orders/history'>Order History</Link>
						</li>
						<li>
							<Link to='/shopping-cart'>View Cart</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='copyrights'>
				<span className='copyrights__links'>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/about#management'>Team</Link>
						</li>
						<li>
							<Link to='/get-a-quote'>Pricing</Link>
						</li>
						<li>
							<Link to='/blog#trending'>Blog</Link>
						</li>
						<li>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</span>
				<span>
					<p>Copyright - Created by Merkthev Nigeria Limited &copy; 2020</p>
					<p>All Rights Reserved | Vineshield Healthcare&trade; </p>
				</span>
				<span className='payments-options'>
					<ul>
						<li>
							<img alt='mastercard' width='50px' height='30px' />
						</li>
						<li>
							<img alt='visa' width='50px' height='30px' />
						</li>
						<li>
							<img alt='verve' width='50px' height='30px' />
						</li>
						<li>
							<img alt='paystack' width='50px' height='30px' />
						</li>
					</ul>
				</span>
			</div>
		</footer>
	);
}
