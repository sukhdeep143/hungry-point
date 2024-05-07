import React from 'react';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';


const ShoppingCart = () => {
  // const { cartItems } = useCart();
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useCart();



  return (
    <div>
      <h1>Shopping Cart</h1>
      <Card>
        {cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.Thumbnail} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(index)}> +1 </button>
            <button onClick={() => decreaseQuantity(index)}>-1</button>
            <button onClick={() => clearCart(index)}>Clear</button> {/* Pass index to clearCart */}
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
