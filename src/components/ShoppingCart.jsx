import React from 'react';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';


const ShoppingCart = () => {
  // const { cartItems } = useCart();
  const { cartItems, clearCart } = useCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Card>
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.Thumbnail} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ShoppingCart;

const Card = styled.div`
  /* Add your card styles here */
`;
