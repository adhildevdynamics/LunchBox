import React from 'react'
import './Banner.css'
import  CustomImage from '../CustomImage/CustomImage'
import { Link } from 'react-router-dom'

function Banner() {
  const images = [
    require("../../assets/arabicchicken.jpg"),
    require('../../assets/pizza.jpg'),
    require('../../assets/Ceasersalad.jpg'),
    require('../../assets/vegbiriyani.jpg'),
    require('../../assets/pastaprimavera.jpg'),
    require('../../assets/beefbiriyani.webp'),
    require('../../assets/chickennoodles.jfif'),
    require('../../assets/chickensandwich'),
    require('../../assets/vegstirfry'),
  
  ]
  return (
   
      <div className='section img '>
        {/* <div className='img'> */}
        <div className='col typography'>
      <h1 className='title'>What Are We About  <span>? ? ? </span></h1>
      <p className='info'>Lunch-Box is a place where you can please your soul and tummy with varieties of delicious food.Start Exploring Now</p>
      <Link to='/foodmenu'>
      <button className='now-btn'>explore now</button></Link>
      
     </div>
       <div className='col gallery'>
       {images.map((src, index) => (
       <CustomImage key={index} imgSrc={src} pt={"100%"} />
  ))}
</div>
     </div>
    
     
      
   
    
  )
}

export default Banner