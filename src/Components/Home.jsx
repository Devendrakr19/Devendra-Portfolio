import React from "react";
import Navbar from "./Navbar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const Home = () => {
  return (
    // bg-[#02021e]
    <>
      <div className="bg-[#02021e]">
        <div className="bg_img px-[10px] py-[10px]">
          <Navbar />
          <Homepage />
        </div>
        <About />
      </div>
    </>
  );
};

export default Home;
