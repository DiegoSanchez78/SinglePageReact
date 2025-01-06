import React,{useState,createContext} from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Suscription from "./components/Suscription/Suscription";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import Feedback from "./components/Feedback/Feedback";
import Video from "./components/Video/Video";
import Career from "./components/Career/Career";
import NavbarMobileView from "./components/Navbar/NavbarMobileView";
import "./App.css"
import ScrollToTop from "react-scroll-to-top"

export const ThemeContext= createContext(null)

function App() {
  const[theme,setTheme] =useState("light")

  const handleChangeTheme = ()=>{
    setTheme((current)=>(current === "light" ? "dark":"light"))
  }

  return (
        <ThemeContext.Provider value={{theme,handleChangeTheme}} >

          <Navbar/>
          <NavbarMobileView/>
          <Home theme={theme} handleChangeTheme={handleChangeTheme}/>

          <div className="main-theme-compo" id={theme}>
          <About/>
          <Service/>
          <Career/>
          <Video/>
          <Team/>
          <Testimonial/>
          <Feedback/>
          </div>
          <Suscription/>
          <Footer/>

          <ScrollToTop smooth
          color="white"
          height="20"
          width="20"
          style={{borderRadius:"90PX",backgroundColor:"#38004c"}}
          />

        </ThemeContext.Provider >    
  );
}

export default App;
