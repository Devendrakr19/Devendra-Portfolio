import React from 'react'
import Navbar from './Navbar'
import Homepage from './pages/Homepage'

const Home = () => {
  return (
    <>
      <div className="bg-[#064369b1] h-[100vh]">        
      <Navbar />
      <Homepage/>
      </div>
     </>
  )
}

export default Home