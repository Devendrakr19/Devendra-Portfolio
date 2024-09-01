import React from "react";
import Navbar from "../Navbar";

const Homepage = ({id}) => {
  return (
    <>
      <div id={id} className="bg_img">
        <Navbar/>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[60px] md:mt-[40px] gap-[20px] px-[20px] pt-[20px] pb-[80px] md:pb-[200px]">
          <div className="col-span-1">
            <div className="flex justify-center items-center">
              <div className="max-w-[550px]">
                <img
                  src="/dev.webp"
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                  alt=""
                  className="box_shodow object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="">
              <h1
                data-aos="fade-left"
                data-aos-duration="1000"
                className="name text-[40px] sm:text-[50px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[100px] font-bold text-center"
              >
                𝑫𝒆𝒗𝒆𝒏𝒅𝒓𝒂 𝑲𝒖𝒎𝒂𝒓 𝑷𝒂𝒏𝒅𝒊𝒕
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="job_title text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] text-[white] text-center mt-[30px] md:mt-[60px]"
              >
                ₛₒ<span className="text-[yellow]">f</span>ₜ
                <span className="text-[#00f7ff]">w</span>ₐᵣₑ{" "}
                <span className="text-[#00ffaa]">D</span>ₑᵥₑₗₒₚₑᵣ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
