import React from 'react'
import "./service.css"
import { FcOk } from "react-icons/fc";
import Zoom from 'react-reveal/Zoom';


const Service = () => {

  const servidata = [

    {
        id:1,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:2,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:3,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:4,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:5,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:6,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:7,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },
    {
        id:8,
        service1:"Viajes",
        service2:"Excursiones",
        service3:"Micros",
        service4:"Aereos"
    },

  ];
  const colors = [
    "#CD5C5C",
    "#6495ED",
    "#088F8F",
    "#364425",
    "#E48C6F",
    "#AAC1CE",
    "#DF5BE7e",
    "#FFE51E",
  ]

    return (
        <div className='container service-section' id='services'>
            <div className='section-title'>
                <h5>Servicios</h5>
                <span className='line'></span>
            </div>
            <Zoom>
            <div className='row'>
                {servidata.map((item, index) => (

                    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                        <div className='services' key={index}>
                            <span className='service-number' style={{background:colors[index]}}>
                                <p>{item.id}</p>
                            </span>
                            <div className='list-of-service'>
                                <p><FcOk size={20} style={{ margin: "5px" }} />{item.service1}</p>
                                <span className='service_item_underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }} />{item.service2}</p>
                                <span className='service_item_underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }} />{item.service3}</p>
                                <span className='service_item_underline'></span>
                                <p><FcOk size={20} style={{ margin: "5px" }} />{item.service4}</p>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
            </Zoom>
        </div>
    )
}

export default Service