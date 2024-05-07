import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';

const FoodItem = ({ id, name, description, Thumbnail }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ id, name, Thumbnail, quantity });
  };

  return (
    <div>
      <Container>
        <Card>
          <div className="card" style={{ width: '15rem' }}>
            <img src={Thumbnail} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <button className="btn btn-outline-primary" onClick={handleDecrement}>-</button>
                  <span className="mx-2">{quantity}</span>
                  <button className="btn btn-outline-primary" onClick={handleIncrement}>+</button>
                </div>
                <Link
                  to="/ShoppingCart"
                  className="btn btn-primary"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default FoodItem;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start; /* Align items vertically */
  gap: 2rem; /* Add gap between Card items */
  padding-bottom: 2rem;
`;

const Card = styled.div`
  width: 15rem;
  /* Depth effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adjust the values as needed */
  transition: transform 0.3s ease-in-out;
  border-radius: 15px; /* Adjust the value to control the roundness */

  /* Set the maximum height for the image container */
  .card-img-top {
    max-height: 400px; /* Adjust the height as needed */
    object-fit: cover; /* Maintain aspect ratio while covering the container */
    border-top-left-radius: 12px; /* Apply border radius to the top-left corner */
    border-top-right-radius: 12px; /* Apply border radius to the top-right corner */
  }

  /* Hover effect */
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Adjust the values as needed */
  }
  
  /* Other styles */
`;
