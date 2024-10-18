// src/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([
    // Example static cart items, replace with dynamic data
    { id: 1, name: "Apple", price: 1.50, quantity: 2 },
    { id: 2, name: "Banana", price: 0.99, quantity: 3 },
  ]);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price.toFixed(2)} | Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${getTotalPrice()}</h3>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
