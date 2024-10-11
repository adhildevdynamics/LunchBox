import React from 'react'

import './AdminPage.css';
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar';
 


// import { FaSmileWink } from "react-icons/fa";


function AdminPage() {
  

  return (
    <div className='admin-body'>
      <NavBar/>
         <div className='container'>
          <p className='text'>GOOD</p>
          <p className='text'>FOOD</p>
          <p className='text'>GOOD</p>
          <p className='text'>VIBE</p> 
          </div>  
      <div className='btn-section'>
      <Link to="/orderlist">
      <button className='order-btn' type='submit'>User Orders</button>
      </Link>
      <Link to="/usertotalorders">
      <button className='total-btn' type='submit'>Order Summary</button>
      </Link>
      <Link to="/userlist">
      <button className='total-btn' type='submit'>Users</button>
      </Link>
      </div>
  
                 

        </div>
    
     
      

   
        
  );
}

export default AdminPage

