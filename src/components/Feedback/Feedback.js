import React from 'react'
import "./feedback.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {

    const data = [
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded",
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
        {
            "img":"https://media.istockphoto.com/id/1475804411/es/foto/sonriente-joven-hispana-trabajadora-aut%C3%B3noma-de-pie-en-el-estudio-con-una-computadora-port%C3%A1til.jpg?s=612x612&w=is&k=20&c=HTyo_zO_cbZw05e6FkGJCofgTs5Z3XY400fsDX4-dLE=",
            "content": "lre er er ere rer erer rte rer er rer e rer er er e",
            "name":"Ana Paez",
            "position":" dede de dededede deded"
        },
    ]

    var settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:2,
        // slidesToScroll:1,
        adaptiveHeight:true,
        initialSlide: 0,
        autoplay:true,
        rows:1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

  return (
    <div className='container feedbck-slider' id='feedback'>
         <div className='section-title'>
                <h5>Feedback</h5>
                <span className='line'></span>
            </div>
            
            <div className='feedbck-slide'>
            <Slider {...settings}>
                {data.map((item,index)=>(
                    <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'> 
                        <div className='card content-slider' key={index}>
                            <img src={item.img} alt='imagen carrusel' className='center-image'/>
                            <p>{item.content}</p>
                            <h4>{item.name}</h4>
                            <p>{item.position}</p>
                        </div>
                        
                    </div>
                ))}
                 </Slider>
            </div>
           
    </div>
  )
}

export default Feedback