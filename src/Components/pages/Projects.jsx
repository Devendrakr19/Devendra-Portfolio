import React, { useEffect, useState } from "react";

const Projects = ({ id }) => {
  //   const [ImgSlide, setImgSlide] = useState(0);
  //   const Images = ["/html_css.webp", "/dev.webp", '/splash.svg'];
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setImgSlide((prvIndex) => (prvIndex + 1) % Images.length);
  //     }, 3000);
  //     return () => clearInterval(timer);
  //   }, [Images.length]);

  const ProjectDetails = [
    {
      projectname: "Applicant Tracking system(ATS)",
      company: "Otomashen It Services Pvt. Ltd.",
      date: "21/05/2024 - Present",
      aboutprject: `Developed and enhanced dashboards for an Applicant Tracking System (ATS) platform, focusing on the front-end
      after initially working on back-end development. Gained hands-on experience with Material UI, Redux Toolkit, and Django Framework, contributing to both
      front-end and back-end aspects. Implemented key features, improving the platform’s overall user experience and functionality.`,
      myrole: "Full-Stack",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit, Python(Django), PostgreSQL.",
      imgs: "/splash.svg",
      url: "https://www.uredx.com/",
    },
    {
      projectname: "Uredx (Educational Website)",
      company: "Uredx",
      date: "13/01/2024 - 01/05/2024",
      aboutprject:`I was pivotal in developing various dashboards for an educational-based platform.
      I crafted user-friendly interfaces for student, teacher, and admin dashboards, ensuring seamless navigation and
      functionality. My internship experience provided valuable insights into front-end development in a real-world setting, honing
      my web development and teamwork skills.`,
      myrole: "Frontend",
      tecnology: "HTML5, CSS3, JavaScript, React.js, Tailwind, Node.js, Express.js, MongoDB",
      imgs: "/html_css.webp",
    },
    // {
    //   projectname: "ATS",
    //   date: "13/010/2024",
    //   aboutprject: "The quick brown fox jumps over the lazy dog.",
    //   myrole: "Frontend",
    //   tecnology: "Html, css , Javascript , React",
    //   imgs: "/splash.svg",
    // },
    // {
    //   projectname: "ATS",
    //   date: "13/010/2024",
    //   aboutprject: "The quick brown fox jumps over the lazy dog.",
    //   myrole: "Frontend",
    //   tecnology: "Html, css , Javascript , React",
    // },
  ];

  const HandleDemo = (urls) => {
    window.open(urls, "_blank");
  };

  return (
    <>
      <div
        id={id}
        className="mt-[50px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="component_title">Projects</h1>
        {ProjectDetails.map((project, index) => (
          <div
            key={index}
             data-aos="zoom-in"
             data-aos-duration="2000"
            className="flex justify-center relative sm:h-[calc(100vh-100px)] mt-[30px] px-[150px]"
          >
            <div className="project_info flex justify-end sm:ml-[150px] md:ml-[160px] lg:ml-[170px] xl:ml-[180px] 2xl:ml-[200px] min-w-[350px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px] 2xl:min-w-[900px] sm:h-[350px] rounded-xl sm:rounded-3xl">
              <div className="w-full sm:w-[330px] md:w-[360px] lg:w-[500px] xl:w-[520px] px-[10px] py-[10px]">
                <h1 className="text-[20px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] font-bold">
                  {project.projectname}
                </h1>
                <div className="text-[#eae8e8]">
                  <div className="font-bold">
                    Company :{" "}
                    <span className="font-medium text-[#ffffffca] text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 2xl:text-[20px]">
                      {project.company}
                    </span>
                  </div>
                  <h1 className="font-semibold text-[#f2d2d2]">{project.date}</h1>
                  <div className="font-bold">
                    Role :{" "}
                    <span className="font-medium text-[#ffffffd9]">
                      {project.myrole}
                    </span>
                  </div>
                  <div className="font-bold leading-[20px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] xl:leading-[18px] 2xl:leading-[20px]">
                    Technologies:{" "}
                    <span className="font-medium text-[#ffffffd9] text-[16px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]">
                      {project.tecnology}
                    </span>
                  </div>
                  <div className="font-bold mt-[5px] leading-[18px] sm:leading-[16px] md:leading-[17px] lg:leading-[17px] xl:leading-[18px] 2xl:leading-[20px]">
                    Responsibility :{" "}
                    <span className="font-medium text-[#ffffffd9] text-[16px] sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]">
                      {project.aboutprject}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-[20px] sm:hidden">
                  <button
                    className="border-[1px] border-[white] px-[20px] py-[5px] font-medium text-[white] rounded"
                    onClick={() => HandleDemo(project.url)}
                  >
                    Site Link
                  </button>
                </div>
              </div>
            </div>
            <div
              className="project absolute hidden sm:block m-auto overflow-hidden top-[250px] sm:top-[100px] md:top-[100px] lg:top-[80px] xl:top-[40px] 2xl:top-[40px]
             left-[5px] sm:left-[10px] md:left-[70px] lg:left-[90px] xl:left-[160px] 2xl-[180px]"
            >
              <img
                src={project.imgs}
                alt="not available"
                className="w-[160px] sm:w-[300px] md:w-[330px] lg:w-[360px] xl:w-[460px] h-[150px] sm:h-[290px] md:h-[320px] lg:h-[350px] xl:h-[450px] object-cover"
              />
            </div>
            <div
              className="project hidden sm:block absolute top-[310px] sm:top-[330px] md:top-[340px] lg:top-[360px] xl:top-[360px] 2xl:top-[310px]
             left-[95px] sm:left-[220px] md:left-[300px] lg:left-[320px]  xl:left-[500px] 2xl:left-[95px]
             sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[150px] 2xl:w-[160px] sm:h-[100px] md:h-[120px] lg:h-[120px] xl:h-[150px] 2xl-[160px] bg-[#9e169c]"
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
