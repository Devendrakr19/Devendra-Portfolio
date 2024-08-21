import React from 'react'
import Navbar from './Navbar'
import Homepage from './pages/Homepage'

const Home = () => {
  return (
    <>
      <div className="bg-[#064369b1] w-[100%] h-[calc(100vh-0px)]">        
      <Navbar />
      <Homepage/>
      </div>
     </>
  )
}

export default Home