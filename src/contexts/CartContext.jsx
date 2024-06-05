
import React, { createContext, useContext, useState } from 'react';

// Create a context object
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  // Value to be provided by the context

  const clearCart = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const increaseQuantity = (index) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) => i === index ? { ...item, quantity: item.quantity + 1 } : item)
    );
  };

  const decreaseQuantity = (index) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) => i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const value = {
    cartItems,
    addToCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  };


  // Provide the context value to the children components
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the context
export const useCart = () => useContext(CartContext);