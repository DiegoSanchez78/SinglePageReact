import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Suscription from "./components/Suscription/Suscription";
import ScrollToTop from "react-scroll-to-top"

function App() {
  return (
        < >
          <Navbar/>
          <Home/>
          <About/>
          <Service/>
          <Testimonial/>
          <Suscription/>
          
          <ScrollToTop smooth
          color="white"
          height="20"
          width="20"
          style={{borderRadius:"90PX",backgroundColor:"#38004c"}}
          />
        </ >    
  );
}

export default App;
