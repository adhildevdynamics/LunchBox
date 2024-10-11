// Confirmation.js
import React from 'react';
import './Confirmation.css';

const Confirmation = ({ user, orders }) => {
  return (
    <div className="confirmation-container">
      <h1>Order Confirmation</h1>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      
      <h2>Selected Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Confirmation;
