import React, { useState } from "react";

const Navbar = () => {
  const [NavTab, setNavTab] = useState(0);

  const HandleNav = (index) => {
    setNavTab(index);
  };
  const navContent = [
    { title: "Home" },
    { title: "About" },
    { title: "Contact me" },
    { title: "Projects" },
    { title: "Skills" },
  ];
  return (
    <>   
        <div className="flex justify-center items-center p-[5px]">
          <div
            className="border-t-[1px] border-b-[1px] border-[white] text-[white] flex justify-around items-center gap-[20px] w-[900px] mt-[10px]"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="">
              <img src="/dev.svg" alt="" className="w-[60px]" />
            </div>
            {navContent.map((content, index) => (
              <div
                key={index}
                onClick={() => HandleNav(index)}
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
    </>
  );
};

export default Navbar;
