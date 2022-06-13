import React from 'react'
import {NavLink} from 'react-router-dom'
import "./PNF.css"

let PNF = () => {
  return (

    <>
    <div id ="notfound">
      <div className='notfound'>
        <div className='notfound-404'>
          <h1>404</h1>        
        </div>
        
        <h2>We Are Sorry, Page not Found!</h2>
        <p className='mb-5'>
        The page you are looking for does not exist; it may have been moved, or removed altogether.
         You might want to try the search function.
          Alternatively, return to the front page.
          Please use the links or the search feature in the sidebar to find your way back to the real content!
           Thank you!
           <NavLink to="/">Back To Home Page</NavLink>
        </p>

      </div>

    </div>
    
    </>
  )
}

export default PNF