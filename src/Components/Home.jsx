import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar"; 

const Home = () => {

  return (
    <>
      <div className="bg-[#64861c] p-[60px]">
         <div className="sticky top-0 z-[999] bg-[#bec0b5]">
          <Navbar/> 
         </div>
        <Homepage/> 
      </div>
    </>
  );
};

export default Home;
