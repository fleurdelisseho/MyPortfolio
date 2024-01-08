import { Navbar, Home, About, Services, Resume, Portfolio, Contact, Footer, ScrollToTopButton  } from '../components'
import React from 'react'

const LandingPage = () => {
  return (
 <div className='w-full overflow-hidden'>
      <div className='fixed'>
        <Navbar />   
      </div>
      
      <div className='ml-[313px]'>
        <Home />
        <About />
        <Services/>
        <Resume/>
        <Portfolio/>
        <Contact/> 
        
        <Footer/>
        <ScrollToTopButton />
      </div>
    </div>
  )
}

export default LandingPage