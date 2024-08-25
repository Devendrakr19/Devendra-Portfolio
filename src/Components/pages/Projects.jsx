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
      date: "21/05/2024 - Present",
      aboutprject: `The quick brown fox jumps over the lazy dog.`,
      myrole: "Frontend",
      tecnology: "Html, css , Javascript , React",
      imgs: "/splash.svg",
    },
    {
      projectname: "Uredx",
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
  return (
    <>
      <div id={id} className="mt-[40px]" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center text-[80px]">Projects</h1>
        {ProjectDetails.map((project, index) => (
          <div
            key={index}
            className="flex justify-center relative h-[calc(100vh-100px)] mt-[30px]"
          >
            <div className="bg-[white] flex justify-end ml-[180px] w-[800px] h-[300px] rounded-3xl px-[20px] py-[10px]">
              <div className="w-[520px]">
                <h1 className="text-[black] text-[35px] font-medium">
                  {project.projectname}
                </h1>
                <h1 className="text-[black]">{project.date}</h1>
                <h1 className="text-[black]">{project.aboutprject}</h1>
                <h1 className="text-[black]">Role : {project.myrole}</h1>
                <h1 className="text-[black]">
                  Technologies : {project.tecnology}
                </h1>
              </div>
            </div>
            <div className="project absolute m-auto overflow-hidden top-[10%] left-[13%]">
              <img
                src={project.imgs}
                alt="not available"
                className=" w-[460px] h-[450px] object-cover"
              />
            </div>
            <div className="project absolute top-[70%] left-[35%] inline-block w-[150px] h-[150px] bg-[#9e169c]"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
