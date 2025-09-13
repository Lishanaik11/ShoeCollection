import React from "react";
import Product from "./Product"; // Add this line to import the Product component

function ProductPanel({ products, addToCart, openDetails }) {
  return (
    <div className="product-panel">
      {products.map(product => (
        <Product 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          openDetails={openDetails}
        />
      ))}
    </div>
  );
}

export default ProductPanel; // Add this line to export the component