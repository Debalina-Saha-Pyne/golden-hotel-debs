import React ,{lazy,Suspense} from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Protected_Route from './Protected_Route'

import PNF from '../COMPONENT/PNF/PNF'
import Header3 from '../HEADER/Header3'
import Home_Page from '../COMPONENT/HOME/Home_Page'
import Services from '../COMPONENT/SERVICES/Services'
import About from '../COMPONENT/ABOUT US/About'
import Our_Team from '../COMPONENT/Our Team/Our_Team'
import Gallery from '../COMPONENT/GALLERY/Gallery'
import Contact from '../COMPONENT/CONTACT/Contact'
import Login from '../COMPONENT/LOGIN/Login'
import Register from '../COMPONENT/Register/Register'
import Footer from '../FOOTER/Footer'

const Pakages = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../COMPONENT/PAKAGES/Pakages")), 4000);
  });
});


export default function Routing() {
  return (
    <>

      <Router>

        <Header3 />

        <Suspense fallback={<img src='../../../p_photo/lodeing.jpg' alt='loaging..' width="200" height="200"/>}>

        <Routes>

          <Route path='' element={<Home_Page />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Our_Team />} />
          <Route element={<Protected_Route/>}>
          <Route path='/gallery' element={<Gallery />} />
          </Route>
          <Route path='/packages' element={<Pakages />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PNF />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
        
        </Routes>

        </Suspense>

        <Footer/>

      </Router>

    </>
  )
}
