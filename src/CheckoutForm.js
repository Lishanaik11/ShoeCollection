import React, { useRef, useContext } from "react";
import { CartContext } from "./App";
import "./App.css";

function CheckoutForm({ onClose }) {
  const cardRef = useRef();
  const cvvRef = useRef();
  const { setCartTotal } = useContext(CartContext);

  const handlePayment = (e) => {
    e.preventDefault();
    const cardNumber = cardRef.current.value;
    const cvv = cvvRef.current.value;

    if (!cardNumber || !cvv) {
      alert("⚠ Please fill both fields");
      return;
    }

    const last4 = cardNumber.slice(-4);
    alert(`✅ Payment has been initiated for card ending with ${last4}`);

    if (typeof setCartTotal === "function") {
      setCartTotal(0);
    }

    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Enter Payment Details</h3>
        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Card Number:</label>
            <input type="text" ref={cardRef} placeholder="Enter card number" />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input type="password" ref={cvvRef} placeholder="Enter CVV" />
          </div>
          <div className="form-actions">
            <button type="submit" className="pay-btn">Pay</button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;