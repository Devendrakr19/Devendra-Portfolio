import React, { useEffect, useState } from "react";

const Projects = ({ id }) => {
  const [openPopup, setOpenPopup] = useState(null);
  const ProjectDetails = [
    {
      projectname: "Oats.otomashen.com",
      company: "Otomashen It Services Pvt. Ltd.",
      date: "Jun 2024 - Nov 2024",
      aboutproject: `An ATS (Applicant Tracking System) with dedicated
                        modules for jobs, candidates, and clients. It features
                        an AI-powered matching engine that intelligently
                        connects the best-suited candidates with relevant job
                        openings and vice versa. The system streamlines the
                        recruitment process by automating resume screening,
                        enhancing collaboration, and ensuring efficient hiring
                        decisions through smart recommendations and real-time
                        data insights.`,
      myrole: "Full-Stack Intern",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit, Python(Django), PostgreSQL.",
      imgs: "/splash.svg",
      link: "not available",
    },
    {
      projectname: "GetHome (Personal Project)",
      aboutproject: ` Contributed to developing a web application for home rentals,        
      enhancing user experience.
      Implemented features that allowed users to search for PGs and
      Flats across various locations.
      Collaborated with the team to integrate front-end components
      with back-end functionalities.`,
      tecnology:
        " HTML5, CSS3, SCSS, JavaScript, React.js, Node.js, Express.js, MongoDB",
      imgs: "/gethome.webp",
      url: "https://github.com/Devendrakr19",
    },
  ];

  const HandleDemo = (urls) => {
    window.open(urls, "_blank");
  };
  const handlePopup = (index) => {
    // setOpenPopup((prev) => (prev === index ? null : index));
    setOpenPopup(index);

  };
  const handleClosePopup = () => {
    setOpenPopup(null);
  };
  return (
    <>
      <div id={id} className="pb-[60px]">
        <h1 className="component_title underline">Experience</h1>
        <div className="flex items-center justify-center flex-wrap gap-[80px] p-[30px]">
          {ProjectDetails.map((project, index) => (
            <div
              key={index}
              className="w-[300px] h-[300px] bg-[#bdbeb8] flex justify-center flex-col border-[1px] border-[#504e4e]  font-mono"
            >
              <div className="w-[100%] p-[10px] truncate text-[20px]">
                {project?.projectname}
              </div>
              <div className=" px-[10px] text-[18px] relative font-bold">
                <p className="truncate">
                  Company:{" "}
                  <span className="text-[16px] font-normal">{project?.company || "N/A"}</span>
                </p>
                <p className="truncate">
                  Role: <span className="text-[16px] font-normal">{project?.myrole || "N/A"}</span>
                </p>
                <p className="truncate"> 
                  Duration:{" "}
                  <span className="text-[16px] font-normal"> {project?.date || "N/A"}</span>
                </p>
                <p className="">
                  Technology:{" "}
                  <span className="text-[14px] font-normal">
                    {project?.tecnology || "N/A"}
                  </span>
                </p>
                <div className="flex justify-center items-center mt-[20px]">
                  <button
                    className="bg-[#1a9a47] py-[5px] px-[30px] hover:bg-[green] hover:text-[#e9e6e6] transition-all ease-in-out delay-75"
                    onClick={() => handlePopup(index)}
                  >
                    About
                  </button>
                </div>

                {openPopup === index && (
                  <div className="w-[250px] h-[200px] rounded absolute top-[-100px] left-[25px] z-40">
                    <div className="bg-[#829b8b] p-[20px] text-[12px] relative rounded ">
                      <span
                        className="absolute top-[5px] right-[10px] text-[18px] cursor-pointer hover:text-[#f63232]"
                        onClick={handleClosePopup}
                      >
                        X
                      </span>
                      <p>{project?.aboutproject}</p>
                    </div>
                  </div>
                )}
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
