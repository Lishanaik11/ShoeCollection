import React, { useState, createContext } from "react";
import Banner from "./Banner";
import ShoppingCart from "./ShoppingCart";
import ProductPanel from "./ProductPanel";
import UserChat from "./UserChat";
import "./App.css";
// Import images from src/image
import Nike from "./image/Nike.jpg";
import Adidas from "./image/Adidas.jpg";
import Reebok from "./image/Reebok.jpg";
import Puma from "./image/Puma.png";

export const CartContext = createContext(null);

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "NIKE SHOE", price: 55000, stock: 6, image: Nike },
    { id: 2, name: "ADIDAS SHOE", price: 25000, stock: 2, image: Adidas },
    { id: 3, name: "REEBOK SHOE", price: 3000, stock: 3, image: Reebok },
    { id: 4, name: "PUMA SHOE", price: 8000, stock: 4, image: Puma },
  ]);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product for modal

  const addToCart = (product) => {
    if (product.stock <= 0) return;

    setProducts(prev => 
      prev.map(item => 
        item.id === product.id ? { ...item, stock: item.stock - 1 } : item
      )
    );

    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setCartTotal(prev => prev + 1);
  };

  const openDetails = (product) => setSelectedProduct(product);
  const closeDetails = () => setSelectedProduct(null);

  return (
    <CartContext.Provider value={{ cartTotal, setCartTotal }}>
      <div>
        <Banner />
        <div className="main-content-container">
          <h1 style={{ textAlign: "center" }}>Welcome to Our Store</h1>
          <ShoppingCart cart={cart} />

          <ProductPanel 
            products={products} 
            addToCart={addToCart} 
            openDetails={openDetails}
          />

          {selectedProduct && (
            <div className="popup-overlay">
              <div className="popup">
                <button className="close-btn" onClick={closeDetails}>✖</button>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <h2>{selectedProduct.name}</h2>
                <p><b>Price:</b> ₹{selectedProduct.price}</p>
                <p><b>Stock:</b> {selectedProduct.stock}</p>
                <p><b>Description:</b> High-quality {selectedProduct.name} for your comfort.</p>
                <p><b>Manufacturer:</b> {selectedProduct.name.split(" ")[0]}</p>
              </div>
            </div>
          )}

          <UserChat />
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;