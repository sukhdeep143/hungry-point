import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              placeholder="First name"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltip02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              placeholder="Last name"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationTooltipUsername">Username</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="validationTooltipUsernamePrepend">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="validationTooltipUsername"
                placeholder="Username"
                aria-describedby="validationTooltipUsernamePrepend"
                required
              />
              <div className="invalid-tooltip">Please choose a unique and valid username.</div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              placeholder="City"
              required
            />
            <div className="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">State</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip04"
              placeholder="State"
              required
            />
            <div className="invalid-tooltip">Please provide a valid state.</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip05"
              placeholder="Zip"
              required
            />
            <div className="invalid-tooltip">Please provide a valid zip.</div>
          </div>
        </div>
        <Link to="/">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </Link>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('./Background.jpg'); /* Corrected Path */
  background-size: cover;
  background-position: center;
`;

const RegisterForm = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .col-md-4,
    .col-md-6,
    .col-md-3 {
      flex: 1;
      padding: 0 10px;

      @media (max-width: 768px) {
        padding: 0;
      }
    }
  }

  .btn {
    display: block;
    width: 100%;
    margin-top: 20px;
  }
`;
