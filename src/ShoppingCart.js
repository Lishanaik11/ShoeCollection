import React, { useContext, useState } from "react";
import { CartContext } from "./App";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

function ShoppingCart({ cart }) {
  const { cartTotal } = useContext(CartContext);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="cart-container">
        <h3>🛒 Cart ({cartTotal})</h3>
        {cart.length > 0 && (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
        <button
          className="checkout-btn"
          disabled={cartTotal === 0}
          onClick={() => setShowForm(true)}
        >
          Check Out Cart
        </button>
      </div>

      {showForm && <CheckoutForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default ShoppingCart;