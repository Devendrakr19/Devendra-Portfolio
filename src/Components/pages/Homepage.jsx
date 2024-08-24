import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[70px] gap-[20px]">
        <div className="col-span-1 mb-[200px]">
          <div className="flex justify-center items-center">
            <div className="max-w-[550px]">
              {/* <div className="bg-[#0000007e]"> */}
              <img
                src="/dev.webp"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                alt=""
                className="bg_img1 object-cover rounded-3xl"
              />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="col-span-1 mb-[80px]">
          <div className="">
            <h1
              data-aos="fade-left"
              data-aos-duration="1000"
              className="name text-[70px] font-bold text-center"
            >
              𝑫𝒆𝒗𝒆𝒏𝒅𝒓𝒂 𝑲𝒖𝒎𝒂𝒓 𝑷𝒂𝒏𝒅𝒊𝒕
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="name1 text-[100px] text-[white] text-center mt-[60px]"
            >
              ₛₒ<span className="text-[yellow]">f</span>ₜ
              <span className="text-[#00f7ff]">w</span>ₐᵣₑ{" "}
              <span className="text-[#00ffaa]">D</span>ₑᵥₑₗₒₚₑᵣ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
