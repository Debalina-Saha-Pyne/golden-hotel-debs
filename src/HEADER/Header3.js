import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import {Navbar,Container,Nav} from 'react-bootstrap'
import './Header3.css'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Header3() {


  const location = useLocation();
    const {pathname} = location;
    const navigateTo = useNavigate()
    const splitLocation = pathname.split('/');

    const logout = () => {
      window.sessionStorage.clear()
      alert('You have been logged out!');
     navigateTo('/services');
    }
    const isAuth = window.sessionStorage.getItem('TokenValue')


  return (
   <>

    <Navbar bg="dark" variant="dark">
    <Container>

   <div className='nav-logo'>
       <img src="p_photo/logo.png"  alt="app-logo" />
 </div>

    <Nav className="me-auto">
    
      <Nav.Link as = {Link} to = "/" className={splitLocation[1]===""?"active":""}>Home</Nav.Link>
      <Nav.Link as = {Link} to = "/services" className={splitLocation[1]===""?"active":""}>Services</Nav.Link>
      <Nav.Link as = {Link} to = "/about" className={splitLocation[1]===""?"active":""}>About US</Nav.Link>
      <Nav.Link as = {Link} to = "/team" className={splitLocation[1]===""?"active":""}>Our Team</Nav.Link>
      <Nav.Link as = {Link} to = "/gallery" className={splitLocation[1]===""?"active":""}>Gallery</Nav.Link>
      <Nav.Link as = {Link} to = "/packages" className={splitLocation[1]===""?"active":""}>Pakages</Nav.Link>
      <Nav.Link as = {Link} to = "/contact" className={splitLocation[1]===""?"active":""}>Contact Us</Nav.Link>

      {
        !isAuth ?
        <>
      <Nav.Link as ={Link} to="/register"  smooth='true' className={splitLocation[1]===""?"active":""}>
        <button className="button n-button">Sign Up</button>
        </Nav.Link>
        <Nav.Link as= {Link} to="/login"  smooth='true'  className={splitLocation[1]===""?"active":""}>
        <button className="button n-button">Sign In</button>
        </Nav.Link>
        </>
        :
        <Button className='logout-btn' onClick={logout}>Logout</Button>
}

    </Nav>
    </Container>
  </Navbar>

</>
 )
}