import React from 'react';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const ShoppingCart = () => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <CartContainer>
      <h1>Shopping Cart</h1>
      <Card>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <ItemImage src={item.Thumbnail} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
              <ButtonGroup>
                <QuantityButton onClick={() => decreaseQuantity(index)}>-1</QuantityButton>
                <QuantityButton onClick={() => increaseQuantity(index)}>+1</QuantityButton>
                <ClearButton onClick={() => clearCart(index)}>Clear</ClearButton>
              </ButtonGroup>
            </ItemDetails>
          </CartItem>
        ))}
      </Card>
    </CartContainer>
  );
};

export default ShoppingCart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const ItemQuantity = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuantityButton = styled(Button)`
  min-width: 50px;
`;

const ClearButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
