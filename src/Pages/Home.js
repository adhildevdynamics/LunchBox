import React from 'react'

import  NavBar  from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import Points from '../Components/Points/Points'
import QuoteSection from '../Components/QuoteSection/QuoteSection'
import Footer from '../Components/Footer/Footer'
import Settings from '../Components/Settings/Settings'



function Home(props) {
  return (
      <div className='homeParentDiv'>
        <NavBar/>
        <Banner/>
        <Points/>
        <Settings/>
        <QuoteSection/>
        <Footer/>
        

        
    </div>
  
    
    

  )
}

export default Home

