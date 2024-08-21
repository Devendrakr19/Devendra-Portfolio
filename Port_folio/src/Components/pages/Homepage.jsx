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
                          className="w-[70%] max-h-[400px] z-10 overflow-hidden rounded shadow-2xl shadow-[#ffffff14]">
                          <img src="/bishu.jpg" alt="" className="w-[100%] object-cover" />
                          
                      </div>
                      <div
                          data-aos="fade-down-left"
                          data-aos-duration="1000"
                          className="absolute top-[-60px] right-[50px] rounded bg-[#2e4b62] w-[400px] h-[300px]"></div>
                      <div
                          data-aos="fade-up-right"
                          data-aos-duration="1000"
                          className="absolute top-[160px] left-[50px] rounded inline-block bg-[#2e4b62] w-[400px] h-[300px]"></div>
                  </div>
              </div>
              <div className="col-span-1">
                  <div className="">
                      <h1>Devendra Kumar Pandit</h1>
                  </div>
              </div>
      </div>
    </>
  );
};

export default Homepage;
