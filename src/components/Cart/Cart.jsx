import React from "react";
import "./Cart.css";
import { TrashIcon } from "@heroicons/react/24/solid";

const Cart = ({ cart, handleToClear }) => {
	// const { cart } = props;
	// const cart = props.cart
	let totalPrice = 0;
	let totalShipping = 0;
	let quantity = 0;

	for (const product of cart) {
		// if ((product.quantity == 0)) {
		// 	product.quantity = 1;
		// }
		// product.quantity = product.quantity || 1;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping;
		quantity = quantity + product.quantity;
	}
	const tax = (totalPrice * 7) / 100;
	const grandTotal = totalPrice + totalShipping + tax;
	return (
		<div className='cart'>
			<h2>Order Summery</h2>
			<p>Selected Cart: {quantity}</p>
			<p>Total Price: $ {totalPrice} </p>
			<p>Total Shipping: $ {totalShipping}</p>
			<p>Tax: $ {tax.toFixed(2)}</p>
			<h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
			<button className='btn-clear ' onClick={handleToClear}>
				Clear Cart <TrashIcon className=' btn-icon-clear' />
			</button>
		</div>
	);
};

export default Cart;
