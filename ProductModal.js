import React from "react";

const ProductModal = ({ product, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ProductModal;

