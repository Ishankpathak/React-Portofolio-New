import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/about/About"
import Experience from "./components/Experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
// import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
       <Header/>
       <Nav/>
       <About/>
       <Experience/>
       <Services/>
       <Portfolio/>
       {/* <Testimonials/> */}
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
