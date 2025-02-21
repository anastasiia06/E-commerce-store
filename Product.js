import React, { useState } from "react";
import ProductModal from "./ProductModal";

const Product = ({ product, addToCart }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>

            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => setShowModal(true)}>View Details</button>

            {showModal && <ProductModal product={product} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Product;





