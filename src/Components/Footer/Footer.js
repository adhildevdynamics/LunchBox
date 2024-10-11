import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
        <div className='footer-section'>
            <p className='title'>LunchBox.com</p>
            <p>Lunch-Box is a place where you can please your soul and tummy with varieties of delicious food.</p>
            <p>&copy; 2024 | All Right Reserved</p>
        </div>
        <div className='footer-section'>
            <p className='title'>Contact Us</p>
            <p>lunchbox2024@gmail.com</p>
            <p>+971 5674 3766</p>
            <p>Dubai Silicon Oasis, UAE</p>
        </div>
        <div className='footer-section'>
            <p className='title'>Connect Us With</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>

        </div>
        </div>
       
        
    </div>
  )
}

export default Footer