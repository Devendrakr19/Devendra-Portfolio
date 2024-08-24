import React from 'react'
import Navbar from './Navbar'
import Homepage from './pages/Homepage'

const Home = () => {
  return (
    // bg-[#02021e]
    <>
      <div className="bg_img h-[100vh]">        
      <Navbar />
      <Homepage/>
      </div>
     </>
  )
}

export default Home