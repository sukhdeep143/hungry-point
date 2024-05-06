import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import ShoppingCart from '../pages/ShoppingCart';


const FoodItem = ({id, name, description, Thumbnail}) => {
  return (
    <div>
        <Container>
            <Card>
                <div className="card" style={{ width: '15rem' }}>
                <img src={Thumbnail} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <Link to='/ShoppingCart' className="btn btn-primary">
                       <p>Add to card</p>
                    </Link>
                </div>
                </div>
            </Card>
        </Container>
    </div>
  )
}

export default FoodItem;


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start; /* Align items vertically */
  gap: 2rem; /* Add gap between Card items */
  padding-bottom: 2rem;
`

const Card = styled.div`
  width: 15rem;
  
  /* Set the maximum height for the image container */
  .card-img-top {
    max-height: 400px; /* Adjust the height as needed */
    object-fit: cover; /* Maintain aspect ratio while covering the container */
  }
  
  /* Other styles */
`;