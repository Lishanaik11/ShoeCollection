// Product.js
import React from "react";
import "./App.css";

function Product({ product, addToCart, openDetails }) {
  return (
    <div className="product-card">
      {/* This is the important line */}
      <img src={product.image} alt={product.name} className="product-image" />
      
      {/* Rest of the product details */}
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>

      <button className="buy-button" disabled={product.stock <= 0} onClick={() => addToCart(product)}>
        {product.stock <= 0 ? "Sold Out" : "Buy"}
      </button>

      <button className="view-details-button" onClick={() => openDetails(product)}>
        View Details
      </button>
    </div>
  );
}

export default Product;