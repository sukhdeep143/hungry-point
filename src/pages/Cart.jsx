import React, { useState } from 'react';
import styled from 'styled-components';

const CardInformationPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or validation here
  };

  return (
    <CardForm onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Enter card number"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="cardHolder">Card Holder:</label>
        <input
          type="text"
          id="cardHolder"
          value={cardHolder}
          onChange={handleCardHolderChange}
          placeholder="Enter card holder name"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={handleExpiryDateChange}
          placeholder="MM/YY"
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={handleCVVChange}
          placeholder="Enter CVV"
          required
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </CardForm>
  );
};

const CardForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default CardInformationPage;
