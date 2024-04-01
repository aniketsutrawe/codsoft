import React from 'react'
import Header from './Header.jsx'
import 'remixicon/fonts/remixicon.css'
import Hero from './Hero.jsx'
import Footer from './footer.jsx'
import Skills from './Skills.jsx'
import AboutMe from './AboutMe.jsx'

const page = () => {
  return (
   <>
    <Header />
    <Hero />
    <Footer />
    <AboutMe />
    <Skills />
   </>
  )
}

export default page;