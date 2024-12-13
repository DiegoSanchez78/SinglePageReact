import React,{useState} from "react";
import "./navbar.css"
import {Link} from 'react-scroll';

const Navbar = ()=>{

    const [navScrollColor, setnavScrollColor] = useState(false);

    const onChangeNavColor = ()=> {
        if(window.scrollY>=100){
            setnavScrollColor(true)
        }else{
            setnavScrollColor(false)
        }
    };

    window.addEventListener("scroll", onChangeNavColor);

    return(
        <nav className={navScrollColor ? "navbar-scroll-color navbar-main":"navbar-main"}>
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
                <li className="navitem">Career</li>
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
        </nav>
    )
}

export default Navbar