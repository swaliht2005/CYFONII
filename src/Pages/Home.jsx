import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import About from '../Components/About'

function Home() {
  return (
    <div>
        <div className="sticky top-0 z-50">
         <Navbar />
       </div>
       <Banner />
       <About/>
    </div>
  )
}

export default Home
