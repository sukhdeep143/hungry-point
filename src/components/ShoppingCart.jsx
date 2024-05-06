import React from 'react';
import styled from 'styled-components';

const ShoppingCart = ({ location }) => {
  // Extract items array from location state or default to an empty array
  const items = (location && location.state && location.state.items) || [];
  console.log(items); // Log items to check if they are received correctly

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Card>
      {items.map((items, id) => (
  <div key={id}>
    <img src={items.Thumbnail} alt={items.name} />
    <p>{items.name}</p>
    <p>Quantity: {items.quantity}</p>
  </div>
))}

      </Card>
      <h1>Shopping Cart</h1>
      
    </div>
  );
};

export default ShoppingCart;

const Card = styled.div`
  
`