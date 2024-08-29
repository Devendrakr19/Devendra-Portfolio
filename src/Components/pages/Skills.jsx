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
        className="mt-[50px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="">
          <h1 className="component_title">Skills</h1>
          <div className="text-[white] flex justify-center gap-[30px]">
            {ButtonTab.map((item, index) => (
              <button
                key={index}
                onClick={() => HandleButtonTab(index)}
                className={`text-[20px] rounded-full px-[20px] py-[5px]
                ${BtnTab === index ? "border-b-[3px] border-[red] text-[yellow]" : ""}
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
          {BtnTab === 0 && (
            <div
              className="mt-[20px] flex justify-center items-center px-[60px] py-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-4 gap-[20px]">
                {Frontend.map((frontend, index) => (
                  <div
                    key={index}
                    className="bg-[#ffffff] skills cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px]"
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
              className="mt-[20px] flex justify-center items-center px-[60px] py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-4 gap-[20px]">
                {Backend.map((backend, index) => (
                  <div
                    key={index}
                    className="bg-[#ffffff] skills cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px]"
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
              className="mt-[20px] flex justify-center items-center px-[60px] py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-4 gap-[20px]">

              {Database.map((database, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] skills cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px]"
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
              className="mt-[20px] flex justify-center items-center px-[60px] py-[20px]"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-4 gap-[20px]">
              {Languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] skills cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px]"
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
              className="mt-[20px] flex justify-center items-center px-[60px] py-[20px]"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="grid grid-cols-4 gap-[20px]">
              {Others.map((other, index) => (
                <div
                  key={index}
                  className="bg-[#ffffff] skills cursor-pointer rounded flex justify-center items-center flex-col w-[220px] h-[200px]"
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
