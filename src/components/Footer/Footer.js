import React from 'react'
import "./footer.css"
// import {FaFacebookSquare,FaInstagramSquare,FaLinkedin  } from "react-icons/fa"
// import { FaSquareTwitter } from "react-icons/fa6"
import {FaFacebookSquare,FaLinkedin  } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
  return (
    <div className='container-fluid footer'>
        <div className='container'>
            <Zoom>
            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                    <div className='footer-about-section'>
                        <h6 style={{color:"white",marginTop:"20px"}}>About</h6>
                        <p>dedewode edkoedkopekd e ded keod keod eed ek dek oe d</p>

                        <div className='footer-social-icons'>
                            <p><FaFacebookSquare size={25}/></p>
                            <p><FaLinkedin   size={25}/></p>
                            <p><FaSquareTwitter size={25}/></p>
                    </div>

                        {/* <span className='footer-social-icons'>
                            <p><FaFacebookSquare size={30}/></p>
                            <p><FaSquareTwitter size={30}/></p>
                            <p><FaInstagramSquare  size={30}/></p>
                            <p><FaLinkedin   size={30}/></p>
                        </span> */}
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                    <div className='footer-service'>
                        <h6 style={{color:"white",marginTop:"20px"}}>Service</h6>
                        <div className='footer-item'>
                            <li>Productos</li>
                            <li>Productos</li>
                            <li>Productos</li>
                            <li>Productos</li>
                            <li>Productos</li>

                        </div>
                    </div>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
                <div className='footer-service'>
                        <h6 style={{color:"white",marginTop:"20px"}}>Customer</h6>
                        <div className='footer-item'>
                            <li>Loguin</li>
                            <li>Mi cuenta</li>
                            <li>Wish list</li>
                            <li>FAQ</li>
                            <li>Contacto</li>

                        </div>
                    </div>
                </div>
            </div>
            </Zoom>
        </div>
    </div>
  )
}

export default Footer