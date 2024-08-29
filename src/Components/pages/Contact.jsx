import React from "react";

const Contact = ({ id }) => {
  const contact = [
    { logo: "/logo/call.svg", link: "+91 9608950496" },
    { logo: "/logo/gmail.svg", link: "devendraku18956@gmail.com" },
    { logo: "/logo/instagram.svg", link: "devendrapandit1517" },
    { logo: "/logo/linke_din.svg", link: "Devendra Kumar Pandit" },
  ];
  return (
    <>
      <div
        id={id}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mt-[50px]"
      >
        <h1 className="component_title">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px]">
          <div className="flex justify-center items-center">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className="bg-[#00000033] border-[1px] border-[#ffffff7a] w-[400px] shadow-2xl shadow-[#ffffff22] rounded h-[400px] px-[20px] py-[20px]"
            >
              {contact.map((item, index) => (
                <div
                  key={index}
                  className="border-b-[1px] border-dashed border-b-[white] px-[10px] py-[10px] cursor-pointer gap-[20px] flex items-center"
                >
                  <img
                    src={item.logo}
                    alt=""
                    className={`${index === 0 ? "w-[55px] ml-[-5px]" : ""}
                    ${index === 1 ? "w-[45px]" : ""}
                    ${index === 2 ? "w-[45px] mt-[6px] mb-[6px]" : ""}
                    ${index === 3 ? "w-[55px] ml-[-5px]" : ""}`}
                  />
                  <p className="text-[#ffffff]">{item.link}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {/* <img src="/logo/world.svg" alt="" className="" /> */}
            <img
              src="/logo/thought.svg"
              alt=""
              className="ml-[-90px]"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
