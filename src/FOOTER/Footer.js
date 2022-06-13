// import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// import { FcGlobe } from "react-icons/fc";
// import { ImFacebook2 ,  ImInstagram , ImYoutube2, ImWhatsapp , ImTwitter } from "react-icons/im";
// import {Col} from 'react-bootstrap'
// import { FcCustomerSupport , FcDepartment ,FcMultipleDevices } from "react-icons/fc";

// function Footer() {
//   return (
//     <div className='footer-container'>

//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join the Adventure newsletter to receive our best vacation deals
//         </p>

//         <Col xs={12} md={12} lg={3}>
//               <div className='footer-add'>
//               <h6>CONTACT</h6>
//               <ul>
//                 <li>
//                 < FcDepartment /> 7014 E Camelback Rd,
//                 Scottsdale, Arkansas, United States
//                 </li>
//                 <li><FcCustomerSupport/> +01-2568-9845</li>
//                 <li><FcMultipleDevices/> maildemo@gmail.com</li>
//                 </ul>
//               </div>
//             </Col>

//         <Col xs={12} md={12} lg={3}>
//               <div className='footer-map'>
//                 <h6>FIND ME</h6>
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425005.3213828753!2d-112.13864219188517!3d33.67389487760284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d9a7772c97%3A0x26d2e412188fe618!2sScottsdale%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1653632995816!5m2!1sen!2sin" width="100%" height="120" title='my location' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//               </div>
//             </Col>
        
//       </section>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <div class='footer-logo'>
//             <Link to='/' className='social-logo'>
//               TRVL
//             <FcGlobe/>
//             </Link>
//           </div>
//           <small class='website-rights'>TRVL © 2022</small>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'
//               to='/'
//               target='_blank'
//               aria-label='Facebook'
//             >
//               <ImFacebook2 />
//             </Link>
//             <Link
//               class='social-icon-link instagram'
//               to='/'
//               target='_blank'
//               aria-label='Instagram'
//             >
//               <ImInstagram/>
//             </Link>
//             <Link
//               class='social-icon-link youtube'
//               to='/'
//               target='_blank'
//               aria-label='Youtube'
//             >
//               <ImYoutube2/>
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='Twitter'
//             >
//               < ImTwitter />
//             </Link>
//             <Link
//               class='social-icon-link twitter'
//               to='/'
//               target='_blank'
//               aria-label='LinkedIn'
//             >
//               <ImWhatsapp/>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Footer;

import React from 'react'
import './Footer.css'
import { Link , useNavigate} from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";



export default function Footer() {
  const navigateTo = useNavigate()
  const logout = () => {
    window.sessionStorage.clear()
    alert('You have been logged out!');
   navigateTo('/login');
  }
  const isAuth = window.sessionStorage.getItem('TokenValue')
  return (
    <React.Fragment>
      <div className='my-footer py-4'>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className='footer-logo'>
                <img src='../../../../../p_photo/logo.png' alt='logo'></img>
                <p className='text-muted'>Located 14 km from the Red Rocks Amphitheatre, this Golden hotel provides free WiFi in all guest rooms.
                 A daily continental breakfast served each day. Guests can enjoy a seasonal 
                 Located at the foot of the Rocky Mountains, this Golden hotel offers on-site dining.
                  Free Wi-Fi is included in all rooms. Coors Brewery is 2 miles away. Very well done and extremely comfortable.</p>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-link'>
              <h6 className='h'>USEFUL LINKS</h6>
              <ul>
                <li><Link as={Link} to='/' className='f-link'>Home</Link></li>
                <li><Link as={Link} to='/about' className='f-link'>About</Link></li>
                <li><Link as={Link} to='/services' className='f-link'>Services</Link></li>
                {
                  !isAuth ?
                  <>
                    <li><Link as={Link} to='/register' className='f-link'>Register</Link></li>
                    <li><Link as={Link} to='/login' className='f-link'>Login</Link></li>
                  </>
                  :
                  <li><button className='btn btn-danger' onClick={logout}>Logout</button></li>
                }
              
                
              </ul>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-add'>
              <h6 className='h'>CONTACT US</h6>
              <ul>
                <li>
                <FaMapMarkerAlt/> 23/C  Rabindra Sarani , Near Bala Complex, Hoogly
                </li>
                <li><FaPhoneAlt/> +11-3496-9000</li>
                <li><FaEnvelope/> debalinapynea@gmail.com</li>
                </ul>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-map'>
                <h6 className='h'>FIND ME</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58871.083667719664!2d88.30272855027825!3d22.74894543950445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b2213f5a85b%3A0x3a2ead22f174a6e2!2sSerampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1654174289920!5m2!1sen!2sin" 
                width="200" height="200" ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
              }