import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [openSidebar, setopenSidebar] = useState(false);
  // const [NavTab, setNavTab] = useState(0);

  const HandleNav = (index, id) => {
    // setNavTab(index);
    // setopenSidebar(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navContent = [
    { title: "Home", id: "homepage" },
    { title: "Work", id: "projects" },
    { title: "Skills", id: "skills" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];

  // const HandleDropdown = () => {
  //   setopenSidebar(true);
  // };
  // const Handleclose = () => {
  //   setopenSidebar(false);
  // };

  return (
    <>
      <div className="flex justify-center">
        <div className="mt-[20px] flex justify-between items-center w-[100%] px-[40px]">
          <div
            className="text-[#1daf81] text-[26px] font-extrabold font-mono"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Portfolio
          </div>

          <div
            className="flex items-center gap-[30px]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {navContent.map((content, index) => (
              <div
                key={index}
                onClick={() => HandleNav(index, content.id)}
                className={`text-[16px] md:text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium relative cursor-pointer px-[10px] py-[6px]}`}
              >
                <span className="after:contents-[''] after:mt-[-6px] after:absolute after:top-[30px] after:left-[0px] after:rounded after:w-0 after:h-[5px] after:bg-gradient-to-r after:from-blue-500 after:to-[#a2c7bc] after:transition-all after:duration-300 hover:after:w-[100%] ">
                  {content.title}
                </span>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-center gap-[15px] text-[20px]"
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
