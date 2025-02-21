import React from "react";

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.title} - ${item.price.toFixed(2)}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;




