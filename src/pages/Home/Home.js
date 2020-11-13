import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import ProductCard from './components/ProductCard';
import BrandCard from './components/BrandCard';
import Testimonial from './components/Testimonial';

export default function Home() {
	const filter = (filter) => {
		return console.log(filter);
	};
	const currencyFormat = (number) => {
		return new Intl.NumberFormat('en', { currency: 'US' }).format(number);
	};

	return (
		<main id='home'>
			<div className='banner'>
				<img alt='banner' src='./logo512.png' />
				<div className='banner__text'>
					<h2 className='banner__title'>Some elaborate title</h2>
					<p className='banner__subtitle'>
						Some elaborate subtitle that will change
					</p>
					<Link to='/products' className='banner__link'>
						Go to products
					</Link>
				</div>
			</div>
			<div className='featured-products'>
				<div className='featured-products__grid'>
					<BrandCard
						title='Baby Formula'
						subtitle='For good infant development'
					/>
					<BrandCard
						title='Baby Formula'
						subtitle='For good infant development'
					/>
					<BrandCard
						title='Baby Formula'
						subtitle='For good infant development'
					/>
					<BrandCard
						title='Baby Formula'
						subtitle='For good infant development'
					/>
				</div>
			</div>
			<div className='collection'>
				<h2 className='collection__title'>Our Collection</h2>
				<p className='collection-grid__filters'>
					<span
						onClick={() => {
							filter('popular');
						}}
					>
						Popular
					</span>
					<span onClick={() => filter('best-sellers')}>Best Sellers</span>
					<span onClick={() => filter('specials')}>Specials</span>
					<span onClick={() => filter('new')}>New Products</span>
				</p>
				<div className='collection-grid'>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
				</div>
				<span style={{ marginTop: '20px', marginBottom: '50px' }}>
					<Link to='/products' className='grid__link'>
						View More Products
					</Link>
				</span>
			</div>
			<div className='testimonials'>
				<Testimonial
					fullname='Hemense Lan'
					jobTitle='Web Developer'
					review='lorem ipsum dolor sai cum laude brandish sa, que sau port'
				/>
			</div>
			<div className='carousel-container'>
				<h2 className='carousel__title'>Featured Products</h2>
				<span className='carousel__subtitle'>
					What's so special, check it out!
				</span>
				<span className='arrow__left'>
					<i className='fas fa-chevron-left'></i>
				</span>
				<div className='grid-carousel'>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
					<ProductCard
						ratingsAverage={4}
						price={() => currencyFormat(20)}
						salesPrices={() => currencyFormat(15)}
						title='This is a single Product'
					/>
				</div>
				<span className='arrow__right'>
					<i className='fas fa-chevron-right'></i>
				</span>
			</div>
		</main>
	);
}
