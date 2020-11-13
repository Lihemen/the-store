import React from 'react';

import './ProductCard.css';

export default function ProductCard(props) {
	const addToWishlist = () => {
		return;
	};
	const compare = () => {
		return;
	};
	const quickView = () => {
		return;
	};
	const addToCart = () => {
		return;
	};
	return (
		<div
			className='collection-grid__col'
			style={
				props.image && {
					backgroundImage: props.image,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover/center',
				}
			}
		>
			<div className='action-btns'>
				<span className='action-btns__row1'>
					<span className='bg__primary' onClick={addToWishlist}>
						o
					</span>
					<span className='bg__primary' onClick={compare}>
						=
					</span>
					<span className='bg__primary' onClick={quickView}>
						ey
					</span>
				</span>
				<button className='bg__primary' onClick={addToCart}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
