import React from 'react'

import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner'
import './Home.css';
import Points from '../Points/Points';
import QuoteSection from '../QuoteSection/QuoteSection';
import Footer from '../Footer/Footer';




function Home() {
  return (
    <div className='nav'  >
    <NavBar/>
    <div className='container  main'>
     
      <Banner/>
      <Points/>
      <QuoteSection/>
      <Footer/>
      {/* <Settings/> */}
    </div>
   
   
    </div>
  )
}

export default Home