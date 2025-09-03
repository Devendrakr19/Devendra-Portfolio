"use client"
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Aos from "aos";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const HandleNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navContent = [
    { title: "Home", id: "homepage" },
    { title: "Experience", id: "experience" },
    { title: "Project", id: "project" },
    { title: "Skills", id: "skills" },
    { title: "About", id: "about" },
  ];

  const handleSidebar = () => {
    setSidebarOpen(true);
  }
  const handleClose = (index) => {
    setSidebarOpen(index);
  }

  useEffect(() =>{
    const handleResize = () => {
      if(window.innerWidth > 769){
        setSidebarOpen(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);
    return ()=> window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      Aos.refresh();
    }
  }, [sidebarOpen]);



  return (
    <>
      <div className="pt-[20px] pb-[15px] flex justify-between items-center w-[100%] px-[15px] sm:px-[15px] md:px-[25px] lg:px-[30px] xl:px-[35px] 2xl:px-[40px]">
        <div
          className="text-[#1daf81] text-[26px] font-extrabold font-mono"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Portfolio
        </div>

        <div
          className={`md:flex items-center ${sidebarOpen === true ? "flex items-center flex-col text-[#ffffff] bg-[#000000d7] absolute top-[0px] left-0 w-[100%] py-[40px]" : "hidden"} sm:gap-[10px] md:gap-[10px] lg:gap-[15px] xl:gap-[25px] 2xl:gap-[30px]`}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="md:hidden text-[30px] absolute top-[10px] right-[10px]">
            <RxCross2 onClick={() => setSidebarOpen(false)}/>
          </span>
          {navContent.map((content, index) => (
            <div
              key={index}
              onClick={() => {HandleNav(content.id); handleClose(index)}}
              className={`${sidebarOpen === true ? "mb-[20px]":""} text-[16px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium relative cursor-pointer px-[10px] py-[6px]}`}
            >
              <span className="after:contents-[''] after:mt-[-6px] after:absolute after:top-[30px] after:left-[0px] after:rounded after:w-0 after:h-[5px] after:bg-gradient-to-r after:from-blue-500 after:to-[#a2c7bc] after:transition-all after:duration-300 hover:after:w-[100%] ">
                {content.title}
              </span>
            </div>
          ))}
        </div>
        <div
          className="md:flex hidden items-center justify-center gap-[15px] text-[20px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link to="">
            <FaInstagram className="cursor-pointer hover:text-[red] transition-all ease-in-out delay-75 hover:scale-125" />
          </Link>
          <Link to="">
            <FaGithub className="cursor-pointer hover:text-[black] transition-all ease-in-out delay-75 hover:scale-125" />
          </Link>
          <Link to="">
            <FaLinkedin className="cursor-pointer hover:text-[blue] transition-all ease-in-out delay-75 hover:scale-125" />
          </Link>
        </div>
          <span className="md:hidden text-[22px]">
            <RxHamburgerMenu onClick={handleSidebar}/>
          </span>
      </div>
    </>
  );
};

export default Navbar;
