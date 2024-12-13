import React from 'react'
import "./team.css"
import {FaFacebookSquare,FaLinkedin  } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"

function Team() {

    const data = [
        {
            id:1,
            name:"Jose Velez",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?semt=ais_hybrid"
        },
        {
            id:2,
            name:"Juan Martinez",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg"
        },
        {
            id:3,
            name:"Ana Perez",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/premium-photo/happy-brunette-woman-orange-shirt-looking-with-perfect-smile-isolated-blue-wall_171337-33112.jpg"
        },
        {
            id:4,
            name:"Romualda",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?ga=GA1.1.386030934.1731982336&semt=ais_hybrid"
        },
        {
            id:5,
            name:"Peppa Pig",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/free-photo/how-may-i-assist-you-smiling-friendly-woman-standing-pleasant-formal-pose-keeping-emotions-together-ready-offer-help-assistance-standing-white_176420-39979.jpg?ga=GA1.1.386030934.1731982336&semt=ais_hybrid"
        },
        {
            id:6,
            name:"Cenicienta",
            content:"dede de de  de e dedede  de dede de e  de ed",
            img:"https://img.freepik.com/free-photo/horizontal-shot-happy-asian-female-student-wears-big-round-spectacles-yellow-casual-wear-smiles-gently-satisfied-after-successful-day-university-dressed-summer-yellow-t-shirt_273609-27995.jpg?ga=GA1.1.386030934.1731982336&semt=ais_hybrid"
        },
        
    ]

  return (
    <div className='container team-members'id='team'>
         <div className='section-title'>
                <h5>Miembros de equipo</h5>
                <span className='line'></span>
            </div>
            
            <div className='row'>
                {data.map((item,index)=>(
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className='card team-members-item'>
                        <img src={item.img} alt='team face'/>
                        <div className='team-info'>
                            <h6>{item.name}</h6>
                            <p>{item.content}</p>
                        </div>
                        <span className='line-for-teamMembers'></span>
                        <div className='social-icons'>
                            <p><FaFacebookSquare size={25}/></p>
                            <p><FaLinkedin   size={25}/></p>
                            <p><FaSquareTwitter size={25}/></p>
                    </div>
                    </div>
                   
                </div>
                ))}
            </div>

    </div>
  )
}

export default Team