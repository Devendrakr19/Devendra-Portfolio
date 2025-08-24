import React from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./Navbar";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";
// import Footer from "./pages/Footer";

const Home = () => {

  return (
    <>
      <div className="bg-[#64861c] p-[60px]">
         <div className="sticky top-0 z-[999] bg-[#bec0b5]">
          <Navbar/> 
         </div>
        <Homepage/>
        {/* <Projects id="projects" /> */}
        {/* <About id="about" /> */}
        {/* <Skills id="skills" /> */}
        {/* <Contact id="contact" /> */}
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
