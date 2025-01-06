import React,{useState} from 'react'
import "./navbarMobileView.css"
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-scroll';

function NavbarMobileView() {

    const [open,setOpen] = useState(false)

    const handleNavOpen = () =>{
        setOpen(!open)
    };

  return (
    <div className='responsive-mobile-view'>
        <div className='container-fluid mobile-view-header'>
            <p><GiHamburgerMenu size={25} onClick={handleNavOpen}/></p>
        </div>

        {open? (<div className='mobile-nav'>
            <ul>
                <li className="navitem">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={300}>
                    Home
                    </Link>
                </li>
                <li className="navitem">
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
                    About
                    </Link>
                </li>
                <li className="navitem">
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={300}>
                    Service
                    </Link>
                </li>
                <li className="navitem">
                <Link to="career" spy={true} smooth={true} offset={-100} duration={300}>
                        Career
                </Link>
                </li>
                <li className="navitem">
                <Link to="video" spy={true} smooth={true} offset={-100} duration={300}>
                        Video
                    </Link>
                    </li>
                <li className="navitem">
                <Link to="team" spy={true} smooth={true} offset={-100} duration={300}>
                        Team
                    </Link>
                </li>
                
                <li className="navitem">
                    <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={300}>
                        Testimonial
                    </Link>
                </li>
                <li className="navitem">Home</li>
                <li className="navitem">
                <Link to="feedback" spy={true} smooth={true} offset={-100} duration={300}>
                        Feedback
                    </Link>
                </li>
                <li className="navitem">Contact</li>
                <li className="navitem">Subscription</li>
            </ul>
        </div>):null}

        
    </div>
  )
}

export default NavbarMobileView