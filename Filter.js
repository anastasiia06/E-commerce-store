import React from "react";

const Filter = ({ categories, selectedCategory, setSelectedCategory, setPriceRange }) => {
    return (
        <div className="filter-container">
            <h3>Filter Products</h3>

            { }
            <label>Category:</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>

            { }
            <label>Price Range:</label>
            <input type="range" min="0" max="500" step="10" onChange={(e) => setPriceRange(e.target.value)} />
        </div>
    );
};

export default Filter;

