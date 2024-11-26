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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 px-[20px] gap-[20px] mt-[40px]">
          <div className="flex justify-center items-center">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className="bg-[#00000033] border-[1px] border-[#ffffff7a] w-[400px] h-[400px] shadow-2xl shadow-[#ffffff22] rounded px-[20px] py-[20px]"
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
                <div className="flex justify-center items-center mt-[30px]">
                  <button onClick={()=> window.open("./Devendra_Res.pdf", "_blank")} className="text-[#ffffff] bg-[#16ff8767] px-[10px] py-[4px] rounded transition-all duration-500 ease-in-out hover:text-[black] hover:bg-[#16ff87]">View Resume</button>
                </div>
            </div>
          </div>
          <div className="mt-[30px] sm:mt-[0px]">
            <img
              src="/logo/thought.svg"
              alt=""
              className=" sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] xl:min-w-[620px]
              md:min-h-[300px] lg:min-h-[200px] xl:min-h-[400px] object-contain "
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
