import React from 'react'
import { FaFacebook, FaLinkedinIn, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import './Our_Team.css'
import { Card, Row, Col } from 'react-bootstrap';



export default function Our_Team() {


    return (

        <div className="container4">
            <div className="section-header">

                <h2 className="section-title wow fadeInDown t8">
                    OUR TRAINERS
                </h2>
                <p className="wow fadeInDown t9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
            </div>

                 
    <div className="row text-center">
       <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
             <div className="team-img">
                <img className="img-responsive pho1" src="p_photo/about1.jpg" alt=""/>
            </div>
            <div className="team-info">
                <h3>Micky Deo</h3>
                <span>Founder</span> 
            </div> 
            <ul className="social-icons">
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
                <li><a href="#"><FaWhatsapp/></a></li>
                <li><a href="#"><FaFacebookMessenger/></a></li>
            </ul>
        </div>
    </div>

    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
            <div className="team-img">
                <img className="img-responsive pho1" src="p_photo/about2.jpg" alt=""/>
            </div>
            <div className="team-info">
                <h3>Mike Timobbs</h3>
                <span>President</span> 
            </div> 
            <ul className="social-icons">
               <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
                <li><a href="#"><FaWhatsapp/></a></li>
                <li><a href="#"><FaFacebookMessenger/></a></li>
            </ul>
        </div>
    </div>

    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
            <div className="team-img">
                <img className="img-responsive pho1" src="p_photo/about3.jpg" alt=""/>
            </div>
            <div className="team-info">
                <h3>Remo Silvaus</h3>
                <span>Sr. Manager</span> 
            </div> 
            <ul className="social-icons">
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
                <li><a href="#"><FaWhatsapp/></a></li>
                <li><a href="#"><FaFacebookMessenger/></a></li>
            </ul>
        </div>
    </div>

    <div className="col-md-3 col-sm-6 col-xs-12">
        <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
            <div className="team-img">
                <img className="img-responsive pho1" src="p_photo/about5.jpg" alt=""/>
            </div>
            <div className="team-info">
                <h3>Niscal Deon</h3>
                <span>Manager</span> 
            </div> 
            <ul className="social-icons">
                <li><a href="#"><FaFacebook/></a></li>
                <li><a href="#"><FaLinkedinIn/></a></li>
                <li><a href="#"><FaWhatsapp/></a></li>
                <li><a href="#"><FaFacebookMessenger/></a></li>
            </ul>
        </div>
    </div>
</div>
</div>

    )
}






