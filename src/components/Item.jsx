import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Item = () => {
  return (
    <Container>
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
      {/* Repeat Card components for each item */}
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card" style={{ width: '15rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to='/cart' className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Item;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start; /* Align items vertically */
  gap: 2rem; /* Add gap between Card items */
  padding-bottom: 2rem;
`

const Card = styled.div`
  /* background-color: red; */

  width: 15rem; /* Set the width of the card */
  
`
