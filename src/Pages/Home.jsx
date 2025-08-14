import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Specialitys from '../Components/Speciality'

import Portfolio from '../Components/Portfolio'
import Coloctions from '../Components/Coloctions'

function Home() {
  return (
    <div>
        <div className="sticky top-0 z-50">
         <Navbar />
       </div>
       <Banner />
       <About/>
       <Specialitys/>
       <Portfolio  />
       <Coloctions/>
    </div>
  )
}

export default Home
