import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles.css";



const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // New state for cart modal

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <h1>🛒 E-Commerce Store</h1>

      {/* Button to open the Cart Modal */}
      <button className="cart-button" onClick={() => setIsCartOpen(true)}>
        View Cart ({cart.length})
      </button>

      <ProductList addToCart={addToCart} />

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button className="close-button" onClick={() => setIsCartOpen(false)}>
              ✖
            </button>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;






