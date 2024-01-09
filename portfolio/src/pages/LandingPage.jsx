import { Navbar, Home, About, Services, Resume, Portfolio, Contact, Footer, ScrollToTopButton  } from '../components'
import React, { useEffect } from 'react';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Run this effect only once, when the component mounts


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