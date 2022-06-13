import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Home_Page.css'

export default function Home_Page() {

  return (

    <>

      <Carousel variant="dark">

        <Carousel.Item className='coverimg'>
          <img
            className="d-block w-100 "
            src="../../../../p_photo/h2.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='title1'>
            <h3>But Terms Like “standard” And “Luxury” Mean Different Things To Different People.</h3>
            <p>"LOVE this hotel. Rooms are clean and modern, the location is great,
               as it isn't too far outside of the city!"</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='coverimg'>
          <img 
            className="d-block w-100 "
            src="../../../../p_photo/pull.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='title'>
            <h4>Swimming Pool</h4>
            <p>Lap pools are built so that people can swim laps for health and fitness.
               They tend to be long and narrow, usually over fifty feet (15m) long.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='coverimg'>
          <img
            className="d-block w-100 "
            src="../../../../p_photo/h4.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className='title'>
            <h4>24 Hour Room Service</h4>
            <p>Room service is a hotel amenity that allows guests to order food and drink to their rooms.
               Hotel staff arrange the meal with the appropriate dishware and condiments on a room service tray. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}
