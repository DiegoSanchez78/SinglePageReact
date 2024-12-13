import React,{useState} from 'react'
import "./testimonial.css"

const Testimonial = () => {
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

    const [showMorePost,setshowMorePost] = useState(6);

    const loadMore =()=> {
        setshowMorePost((prev)=> prev + 3);
    }

  return (
    <div className='container testimonial-section' id='testimonial'>
        <div className='section-title'>
            <h5>Testimonios</h5>
            <span className='line'></span>
        </div>
        <div className='row'>
            {data.slice(0,showMorePost).map((item,index)=>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}> 
                    
                    <div className={index===0 ?"marked-content-card":"content-card"}>
                        <img src={item.img} alt='foto persona testimonio'/>
                        <p>{item.content}</p>
                        <span className='name'>{item.name}</span>
                        <p>{item.position}</p>
                    </div>
                </div>
            ))}

        </div>
        {showMorePost >= data.length ? null:(
            <span className='load--more-button' onClick={loadMore}>
                Ver mas
            </span>
            )}
    </div>
  )
}

export default Testimonial