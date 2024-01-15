import { Navbar, Home, About, Services, Resume, Portfolio, Contact, Footer, ScrollToTopButton, TopNav, Menu  } from '../components'
import React, { useEffect } from 'react';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
 <div className='w-full overflow-hidden'>
    <div className='fixed hidden lg:block'>
      <Navbar/>   
    </div>
    
    <div className="hidden sm:block lg:hidden">
      <TopNav/>
    </div>

      <div className='lg:ml-[300px]'>
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