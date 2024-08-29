import React, { useState } from "react";

const Navbar = () => {
  const [openSidebar, setopenSidebar] = useState(false);
  const [NavTab, setNavTab] = useState(0);

  const HandleNav = (index, id) => {
    setNavTab(index);
    setopenSidebar(false);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  const navContent = [
    { title: "Home", id: "homepage" },
    { title: "About", id: "about" },
    { title: "Projects", id: "projects" },
    { title: "Skills", id: "skills" },
    { title: "Contact", id: "contact" },
  ];

  const HandleDropdown = () => {
    setopenSidebar(true);
  };
  const Handleclose = () => {
    setopenSidebar(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          className="block absolute top-[10px] left-[10px] z-[0] md:hidden"
          onClick={HandleDropdown}
        >
          <img src="/logo/hamburger.svg" alt="" className="w-[60px]" />
        </button>
        <div
          className="border-t-[1px] border-b-[1px] mt-[20px] border-[white] hidden text-[white] md:flex justify-around items-center min-w-[700px]"
          // data-aos="fade-down"
          // data-aos-duration="1000"
        >
          <div className="">
            <img src="/dev.svg" alt="" className="max-w-[60px]" />
          </div>
          {navContent.map((content, index) => (
            <div
              key={index}
              onClick={() => HandleNav(index, content.id)}
              className={`text-[16px] relative font-medium cursor-pointer px-[10px] py-[6px] flex items-center ${
                NavTab === index ? "text-[yellow]" : "text-[white]"
              }`}
            >
              <span className="after:contents-[''] after:absolute after:top-[30px] after:left-[0px] after:rounded after:w-0 after:h-[5px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-[100%] ">
                {content.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile view sidbar  */}

      {openSidebar && (
        <div className="absolute min-w-[250px] h-full bg-[#02021e] md:hidden z-[30] px-[10px] pb-[10px]">
          <div className="flex items-center justify-between">
            <img src="/dev.svg" alt="" className="max-w-[60px]" />
            <span
              className="text-[28px] font-semibold cursor-pointer text-[white]"
              onClick={Handleclose}
            >
              X
            </span>
          </div>
          {navContent.map((content, index) => (
            <div
              key={index}
              onClick={() => HandleNav(index, content.id)}
              className={`text-[16px] font-medium cursor-pointer px-[10px] py-[6px] flex items-center ${
                NavTab === index ? "text-[yellow]" : "text-[white]"
              }`}
            >
              {content.title}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
