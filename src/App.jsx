import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Reports from './Pages/Reports.jsx'
import Contacts from './Pages/Contacts'



import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    < >

      <BrowserRouter>
      <div className='z-10'>
      <Header />
      </div>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/contacts' element={<Contacts />} />
   
          

        </Routes>
        <Footer />
      </BrowserRouter>
      
       
    </>
      
    
  )
}

export default App
