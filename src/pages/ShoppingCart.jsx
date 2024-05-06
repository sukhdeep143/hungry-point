// Parent component (e.g., ShoppingCart.js)
import React, { useState } from 'react';
import FoodItem from '../components/FoodItem';
import styled from 'styled-components';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (id, name) => {
    const item = { id, name };
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <>
    </>
  );
};

export default ShoppingCart;


