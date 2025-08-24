import React, { useState } from "react";

const Skills = ({ id }) => {
  const [BtnTab, setBtnTab] = useState(0);

  const ButtonTab = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "Database" },
    { name: "Language" },
    { name: "Others" },
  ];

  const HandleButtonTab = (index) => {
    setBtnTab(index);
  };

  const Frontend = [
    {
      imgs: "/logo/html.svg",
      name: "HTML5",
    },
    {
      imgs: "/logo/css.svg",
      name: "CSS3",
    },
    {
      imgs: "/logo/javascript.svg",
      name: "Javascript",
    },
    {
      imgs: "/logo/react.svg",
      name: "React js",
    },
      {
      imgs: "/logo/next.svg",
      name: "Next js",
    },
    {
      imgs: "/logo/mui.svg",
      name: "Material ui",
    },
    {
      imgs: "/logo/tailwind.svg",
      name: "Tailwind",
    },
    {
      imgs: "/logo/bootstrap.svg",
      name: "Bootstrap",
    },
    {
      imgs: "/logo/sass.svg",
      name: "Sass",
    },
  ];
  const Backend = [
    {
      imgs: "/logo/nodejs.svg",
      name: "Node & Express js",
    },
    {
      imgs: "/logo/dj.png",
      name: "Django",
    },
  ];
  const Database = [
    {
      imgs: "/logo/mongodb.svg",
      name: "MongoDb",
    },
    {
      imgs: "/logo/mysql.svg",
      name: "Mysql",
    },
  ];
  const Languages = [
    {
      imgs: "/logo/cpp.svg",
      name: "C++",
    },
    {
      imgs: "/logo/python.svg",
      name: "Python",
    },
    {
      imgs: "/logo/javascript.svg",
      name: "Javascript",
    },
  ];
  const Others = [
    {
      imgs: "/logo/git.svg",
      name: "Git",
    },
    {
      imgs: "/logo/github.svg",
      name: "Github",
    },
    {
      imgs: "/logo/aws.svg",
      name: "Aws",
    },
    {
      imgs: "/logo/docker.svg",
      name: "Docker",
    },
    {
      imgs: "/logo/figma.svg",
      name: "Figma",
    },
  ];

  return (
    <>
      <div
        id={id}
        className=""
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="">
          <h1 className="component_title underline">Skills</h1>
          <div className="flex justify-center gap-[5px] sm:gap-[1px] md:gap-[10px] lg:gap-[30px] xl:gap-[50px] 2xl:gap-[70px]">
            {ButtonTab.map((item, index) => (
              <button
                key={index}
                onClick={() => HandleButtonTab(index)}
                className={`text-[13px] sm:text-[14px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[20px] rounded-full
                 px-[8px] sm:px-[20px]  py-[5px]
                ${
                  BtnTab === index
                    ? "border-b-[3px] border-[#1daf81]"
                    : ""
                }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
          {BtnTab === 0 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[15px] sm:px-[60px] sm:py-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex overflow-x-auto scroll-smooth scrollbar_hidden snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {Frontend.map((frontend, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#999898] bg-[#ffffff1a] cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px] shrink-0 snap-start"
                  >
                    <img src={frontend.imgs} alt="" className="w-[150px]" />
                    <p className="text-[black] mt-[15px] font-medium">
                      {frontend.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {BtnTab === 1 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[15px] sm:px-[60px] sm:py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex overflow-x-auto scroll-smooth scrollbar_hidden snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {Backend.map((backend, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#999898] bg-[#ffffff1a] cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px] shrink-0 snap-start"
                  >
                    <img src={backend.imgs} alt="" className="w-[150px]" />
                    <p className="text-[black] mt-[15px] font-medium">
                      {backend.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {BtnTab === 2 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[15px] sm:px-[60px] sm:py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex overflow-x-auto scroll-smooth scrollbar_hidden snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {Database.map((database, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#999898] bg-[#ffffff1a] cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px] shrink-0 snap-start"
                  >
                    <img src={database.imgs} alt="" className="w-[150px]" />
                    <p className="text-[black] mt-[15px] font-medium">
                      {database.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {BtnTab === 3 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[15px] sm:px-[60px] sm:py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex overflow-x-auto scroll-smooth scrollbar_hidden snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {Languages.map((language, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#999898] bg-[#ffffff1a] cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px] shrink-0 snap-start"
                  >
                    <img src={language.imgs} alt="" className="w-[150px]" />
                    <p className="text-[black] mt-[15px] font-medium">
                      {language.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {BtnTab === 4 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[15px] sm:px-[60px] sm:py-[20px]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="flex overflow-x-auto scroll-smooth scrollbar_hidden snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                {Others.map((other, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#999898] bg-[#ffffff1a] cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px] shrink-0 snap-start"
                  >
                    <img src={other.imgs} alt="" className="w-[150px]" />
                    <p className="text-[black] mt-[15px] font-medium">
                      {other.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Skills;
