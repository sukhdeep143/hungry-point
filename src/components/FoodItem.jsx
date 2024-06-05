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
              <div>
                <ButtonGroup>
                  <button className="btn btn-outline-primary left-btn" onClick={handleDecrement}>-</button>
                  <Span className="mx-2">{quantity}</Span> {/* Apply the Span styled component */}
                  <button className="btn btn-outline-primary right-btn" onClick={handleIncrement}>+</button>
                </ButtonGroup>
              </div>
              <div>
                <ButtonCart>
                  
                    <Link
                      to="/ShoppingCart"
                      className="btn btn-primary pl-5 pr-5"
                      onClick={handleAddToCart}
                      >
                      Add to cart
                    </Link>
                </ButtonCart>
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
  display: flex;
  flex-direction: column;
  align-items: center;

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
`;

const ButtonCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
`

const Span = styled.span`
  font-size: 1.2rem; /* Adjust font size as needed */
  font-weight: bold;
`;


const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem; /* Add margin between buttons and link */

  
  .left-btn{
    margin-right: 1rem; 
    
  }
  
  
  .right-btn{
    margin-left: 1rem; 

  }

`;
