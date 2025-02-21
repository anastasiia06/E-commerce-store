import React, { useState, useEffect } from "react";
import Product from "./Product"; // Import Product component
import "../styles.css";

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched products:", data);
                setProducts(data.products); // Note: Use data.products
            })
            .catch(error => console.error("Error fetching products:", error));
    }, []);








    return (
        <div className="product-list">
            {products.map(product => (
                <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;




