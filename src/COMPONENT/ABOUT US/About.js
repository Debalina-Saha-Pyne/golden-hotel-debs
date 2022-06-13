import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import './About.css'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>

      <div className="container_about">

        <div className="section-header">
          <h2 className="section-title wow fadeInDown h22">About Us</h2>
          <p className="wow fadeInDown t3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
        </div>
        <br />


        <div className="row">
          <div className="col-sm-6 wow fadeInLeft">
            <img className="img-responsive i1" src="P_photo/ab5.jpg" alt="" />
          </div>

          <div className="col-sm-6 wow fadeInRight">
            <h3 className="column-title">Our Hotel</h3>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam adipiscing elit. Praesent eget risus vitae massa.Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
            <ul className="listarrow" icon>
              <li><AiFillEdit />Room Service</li>
              <li><AiFillEdit />Direct Dailing Facility</li>
              <li><AiFillEdit />Laundry Service</li>
              <li><AiFillEdit />Travel Assistance</li>
              <li><AiFillEdit />Bar & Restaurant</li>
            </ul>

          </div>
        </div>
      </div>

      <div class="hero-image">
        <img src='../../../../p_photo/ab3.jpg' className='ab'/>
        <div class="hero-text">
          <h1>Our Event Mangement</h1>
          <h6>Ben can create this remarkable illusion, to the laughter and enjoyment of your team,
             as well as the person being floated.</h6>
          <p>Check Our Gallery</p>
          <button><Link to={`/gallery`}></Link>Go </button>
        </div>
      </div>

    </div >
  );
}
