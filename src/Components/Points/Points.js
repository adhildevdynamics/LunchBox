import React from 'react'
import cakeImage from '../../assets/cake'
import './Points.css'
import { Link } from 'react-router-dom'
function Points() {
    const list = [
        "Pistachios Aren’t Nuts at All!",
        'Nectarines Translate as “As Sweet as Nectar',
        "Caesar Salad isn't an Italian Dish",
        "Peanut Butter Doesn’t Account as Junk Food",
        "Cucumber Has More Water than Watermelon",
        "Caesar Salad isn't an Italian Dish"
    ]
  return (
    <div>
        <div className='section facts'>
        <div className='col img'>
            <img src={cakeImage} alt=''/>
        </div>
        <div className='col typography'>
        <h1 className='title'>Fun Facts!</h1>
        { list.map((item,index) => (
        <p className="fact-points" key={index}>{item}</p>
        ))}
       <Link to="/signup">
       <button className='signup-btn '>Signup Now</button>
       </Link>     
       
       </div>
       <div className='col gallery'>
       
</div>
     </div>
    </div>
  )
}

export default Points