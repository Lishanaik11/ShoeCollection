import React from "react";
import { useParams, useLocation } from "react-router-dom";

function ProductDetails({ products }) {
  const { prodid } = useParams();
  const location = useLocation();

  const productFromState = location.state && location.state.product;
  const product =
    productFromState || products?.find((p) => p.id === parseInt(prodid, 10));

  if (!product) return null;

  return (
    <div className="product-details" style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "220px", borderRadius: 8 }} />
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Description: High-quality {product.name} for your comfort.</p>
      <p>Manufacturer: {product.name.split(" ")[0]}</p>
    </div>
  );
}

export default ProductDetails;