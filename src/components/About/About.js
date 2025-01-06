import React from 'react'
import "./about.css"
import about from "../../Image/about.jpg"
import { FcAutomotive,FcBusiness,FcCompactCamera   } from "react-icons/fc";
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
    <div className='container about-section' id='about'>
        <div className='row'>
            <Fade left>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={about} height="400px" width="400px" alt='about_image'/>
                </div>
            </div>
            </Fade>
            <Fade right>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-details'>
                    <div className='about-title'>
                        <h5>About</h5>
                        <span className='line'></span>
                    </div>
                    <p>
                    Descubre los destinos más fascinantes del mundo con nosotros. Nuestra misión es ayudarte a vivir experiencias inolvidables, explorando paisajes de ensueño, culturas vibrantes y actividades únicas.
                    </p>

                    <div className='card-design'>
                        <div className='about-list-item'>
                            <div className='about-details-icon'>
                                <p><FcAutomotive size={50}/></p>
                            </div>
                            <div>
                                <h6> Explora:</h6>
                                <p>Desde playas paradisíacas hasta montañas imponentes, te ofrecemos una selección de los mejores lugares para visitar.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-design'>
                        <div className='about-list-item'>
                            <div className='about-details-icon'>
                                <p><FcBusiness size={50}/></p>
                            </div>
                            <div>
                                <h6>Planea:</h6>
                                <p>Encuentra itinerarios personalizados, consejos prácticos y toda la información que necesitas para tu viaje ideal.</p>
                            </div>
                        </div>
                    </div>
                    <div className='card-design'>
                        <div className='about-list-item'>
                            <div className='about-details-icon'>
                                <p><FcCompactCamera  size={50}/></p>
                            </div>
                            <div>
                                <h6>Inspírate:</h6>
                                <p>Déjate llevar por nuestras galerías de fotos y videos que capturan la magia de cada destino.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </Fade>

        </div>
    </div>
  )
}

export default About