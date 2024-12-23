import React from 'react'
import Navbar from './Components/Navbar'
import HealthLanding from './Components/HealthLanding'
import Part from './Components/Part'
import Banner1 from './Components/Banner1'
import Banner2 from './Components/Banner2'
import Faq from './Components/Faq'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <HealthLanding/>
      <Part/>
      <Banner1/>
      <Banner2/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App