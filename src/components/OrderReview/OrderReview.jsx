import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./OrderReview.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
	const savedCart = useLoaderData();
	// console.log(savedCart);
	const [cart, setCart] = useState(savedCart);
	const handleToDelete = (id) => {
		const remainCart = cart.filter((product) => product.id !== id);
		// console.log(remainCart);
		setCart(remainCart);
		removeFromDb(id);
	};
	const handleToClear = () => {
		setCart([]);
		deleteShoppingCart();
	};
	return (
		<div className='shop-container'>
			<div className='review-container'>
				{cart.map((product) => (
					<ReviewItem
						key={product.id}
						product={product}
						handleToDelete={handleToDelete}
					/>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart} handleToClear={handleToClear}></Cart>
			</div>
		</div>
	);
};

export default OrderReview;
