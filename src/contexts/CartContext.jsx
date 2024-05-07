
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


  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    clearCart, // Expose clearCart function
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