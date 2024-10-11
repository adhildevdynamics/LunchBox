import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Adjust to your home page route
  };

  return (
    <div>
      <h1>Order Placed Successfully!</h1>
      <button className="btn btn-confirm" onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default OrderConfirmation;
