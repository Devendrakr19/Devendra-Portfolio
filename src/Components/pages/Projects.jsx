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
      aboutprject: `The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog.`,
      myrole: "Frontend",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit",
      imgs: "/splash.svg",
      url: "https://www.uredx.com/",
    },
    {
      projectname: "Uredx (Educational Website)",
      company: "Uredx",
      date: "13/01/2024 - 01/05/2024",
      aboutprject: "The quick brown fox jumps over the lazy dog.",
      myrole: "Frontend",
      tecnology: "Html, css , Javascript , React",
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
            className="flex justify-center relative sm:h-[calc(100vh-100px)] mt-[30px] px-[150px]"
          >
            <div className="bg-[#204ba7] flex justify-end sm:ml-[150px] md:ml-[160px] lg:ml-[170px] xl:ml-[180px] 2xl:ml-[200px] min-w-[380px] sm:min-w-[500px] md:min-w-[600px] lg:min-w-[700px] xl:min-w-[800px] 2xl:min-w-[900px] h-[350px] rounded-xl sm:rounded-3xl px-[10px] py-[10px]">
              <div className="w-full xl:w-[540px] px-[10px]">
                <h1 className="text-[22px] font-bold">
                  {project.projectname}
                </h1>
                <div className="text-[white]">
                  <div className="font-medium">
                    <span className="font-bold">Company</span> :{" "}
                    {project.company}
                  </div>
                  <h1 className="font-semibold">{project.date}</h1>
                  <div className="font-medium">
                    <span className="font-bold">Role</span> :{" "}
                    {project.myrole}
                  </div>
                  <div className="font-medium">
                    <span className="font-bold">Technologies</span>{" "}
                    : {project.tecnology}
                  </div>
                  <div className="font-medium  text-[14px] leading-[18px]">
                    <span className="font-bold">
                      Responsibility
                    </span>{" "}
                    : {project.aboutprject}
                  </div>
                </div>
                <div className="flex justify-center items-center mt-[30px] sm:hidden">
                <button className="border-[1px] border-[white] px-[20px] py-[5px] font-medium text-[white] rounded" onClick={() => HandleDemo(project.url)}>Site Link</button>
                </div>
              </div>
            </div>
            <div
              className="project absolute hidden sm:block m-auto overflow-hidden top-[250px] sm:top-[100px] md:top-[80px] lg:top-[40px] xl:top-[40px] 2xl:top-[40px]
             left-[5px] sm:left-[10px] md:left-[100px] lg:left-[120px] xl:left-[160px] 2xl-[180px]"
            >
              <img
                src={project.imgs}
                alt="not available"
                className="w-[160px] sm:w-[300px] md:w-[330px] lg:w-[360px] xl:w-[460px] h-[150px] sm:h-[290px] md:h-[320px] lg:h-[350px] xl:h-[450px] object-cover"
              />
            </div>
            <div
              className="project hidden sm:block absolute top-[310px] sm:top-[330px] md:top-[320px] lg:top-[320px] xl:top-[360px] 2xl:top-[310px]
             left-[95px] sm:left-[220px] md:left-[340px] lg:left-[360px]  xl:left-[500px] 2xl:left-[95px]
             sm:w-[100px] md:w-[120px] lg:w-[120px] xl:w-[150px] 2xl:w-[160px] sm:h-[100px] md:h-[120px] lg:h-[120px] xl:h-[150px] 2xl-[160px] bg-[#9e169c]"
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
