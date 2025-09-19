import React from "react";
import Navbar from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Services from "./Services/Services";
import MagneticCursor from "./MagneticBall/MagneticCursor";
import Testimonials from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Map from "./Map/Map"
import Footer from "./Footer/Footer";

export default function App() {
 return (
    <>
      <MagneticCursor />
      <Navbar />
      <Home />    {/* first screen */}
      <About /> 
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />

    </>
  );
}
