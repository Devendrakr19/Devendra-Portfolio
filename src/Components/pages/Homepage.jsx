import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-[90px] p-[10px]">
        <div className="col-span-1">
          <div className="flex justify-center items-center relative">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="bg_img w-[65%] z-10 overflow-hidden rounded inset_shadow"
            >
              <div className="bg-[#0000007e]">
              <img src="/dev.webp" alt="" className="object-cover" />
              </div>
            </div>
            <div
              data-aos="fade-down-left"
              data-aos-duration="1000"
              className="inset_shadow absolute top-[-70px] right-[50px] bg-[#abc4c0] w-[400px] h-[300px]"
            ></div>
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="inset_shadow absolute top-[180px] left-[50px] inline-block bg-[#abc4c0] w-[400px] h-[300px]"
            ></div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="pr-[10px]">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="name text-[70px] font-bold text-[#fff] text-center">𝓓𝓮𝓿𝓮𝓷𝓭𝓻𝓪 𝓚𝓾𝓶𝓪𝓻 𝓟𝓪𝓷𝓭𝓲𝓽</h1>
            {/* <h1 className="name text-[70px] font-bold text-[#fff] text-center">Devendra Kumar Pandit</h1> */}
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-[60px] text-[white] text-center mt-[10px]">
            ₛₒ<span className="text-[yellow]">f</span>ₜ<span className="text-[#00f7ff]">w</span>ₐᵣₑ <span className="text-[#00ffaa]">D</span>ₑᵥₑₗₒₚₑᵣ  
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
