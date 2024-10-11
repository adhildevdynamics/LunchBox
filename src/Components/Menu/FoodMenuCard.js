// import React from 'react'
// import './FoodMenu.css'
// import CustomImage from '../CustomImage/CustomImage'

// function FoodMenuCard( {foodmenu }) {

      
//   return (
//     <div className='foodmenu-card'>
//     <CustomImage imgSrc={foodmenu.images}/>
//     {images.map((src, index) => (
//        <CustomImage key={index} imgSrc={src} pt={"90%"} />
//   ))}
//     <div  className='foodmenu-card-info'>
//     <p className="foodmenu-title">Margherita Pizza</p>
//     <p className='foodmenu-desc'>'Classic pizza with fresh mozzarella, tomatoes, and basil'</p>
//     <a className="choose-btn" href='#!'> CHOOSE</a>
//     </div>
//     </div>
//   )
// }

// export default FoodMenuCard


import React from 'react';
import './FoodMenu.css';
import CustomImage from '../CustomImage/CustomImage';


function FoodMenuCard({ foodmenu, onSelect }) {
  return (
    <div className='foodmenu-card' onClick={onSelect}>
      <CustomImage imgSrc={foodmenu.image} pt={"75%"} />
      
      <div className='foodmenu-card-info'>
        <p className="foodmenu-title">{foodmenu.name}</p>
        <p className='foodmenu-desc'>{foodmenu.description}</p>
       
      </div>
    </div>
  );
}

export default FoodMenuCard;
