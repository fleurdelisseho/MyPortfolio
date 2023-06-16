import { Navbar, Home, About, Services, Resume, Portfolio, Contact, Footer } from './components'
const App = () => {
  return (
 <div className='w-full overflow-hidden'>
      <div className='fixed'>
        <Navbar />   
      </div>
      
      <div className='ml-[313px]'>
        <Home />
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Contact/> 
        <Footer/>
      </div>
    </div>
  )
}

export default App