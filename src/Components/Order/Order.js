


import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { collection, addDoc } from 'firebase/firestore';
import Modal from 'react-modal';
import './Order.css';

Modal.setAppElement('#root'); 

const Order = ({ orders }) => {
  const { db, auth } = useContext(FirebaseContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleOrderSubmit = async () => {
    if (!auth.currentUser) {
      alert('User not authenticated');
      return;
    }

    try {
      await addDoc(collection(db, 'orders'), {
        orders,
        user: {
          uid: auth.currentUser.uid,
          name: auth.currentUser.displayName,
        },
        timestamp: new Date(),
      });
      setSuccessMessage('Order placed successfully!');
      setShowModal(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      setErrorMessage('Failed to place order: ' + error.message);
    }
  };

  return (
    <div>
      <button className='order-button' onClick={() => setShowModal(true)}>Place your order</button>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Confirm Your Order"
        className="modal-content"
      >
        <h2>Confirm Your Order</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>{order.name}</strong>: {order.description}
            </li>
          ))}
        </ul>
        <div className='buttons'>
        <button className="confirm-button" onClick={handleOrderSubmit}> confirm order </button>
        <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </Modal>

      {successMessage && (
        <div className='success-message'>{successMessage}</div>
      )}

      {errorMessage && (
        <div className='error-message'>{errorMessage}</div>
      )}
    </div>
  );
};

export default Order;
