import React from 'react';
import "./home.css";
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div className='container-fluid home'id="home">
        <div className='container home-content'>
            <h1>
                <Typewriter
                options={{
                    strings:['Viajes', 'Excursiones','Culturas'],
                    autoStart:true,
                    loop:true,
                }}
                />
            </h1>
            <p>
            Esta página está diseñada para los apasionados de los viajes, donde cada rincón cuenta una historia y cada destino es una oportunidad para crear momentos inolvidables.

Aquí encontrarás una galería única de fotos y videos, cuidadosamente organizada para destacar las fechas especiales y los momentos más memorables de cada destino. Nuestro diseño, inspirado en la esencia del heavy metal, combina la intensidad de la aventura con la organización perfecta, ofreciendo una experiencia visual y funcional que te atrapará desde el primer momento.
            </p>
            <span className='view-details-home-button'>Ver detalles</span>
        </div>
    </div>
  )
}

export default Home