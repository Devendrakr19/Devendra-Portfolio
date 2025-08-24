import React from "react";

const Experience = ({ id }) => {
  const ExperienceDetails = [
    {
      company: "Otomashen It Services",
      date: "DEC 2024 - Present",
      myrole: "Front-end Developer",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit, Formik",
      link: "",
    },
    {
      company: "Otomashen It Services",
      date: "Jun 2024 - Nov 2024",
      myrole: "Full-Stack Intern",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit, Formik, Python, Django",
      link: "",
    },
  ];
  return (
    <>
      <div id={id} className="pb-[60px]">
        <h1 className="component_title underline">Experience</h1>
        <div className="relative p-[30px]">
          {ExperienceDetails.map((item, index) => (
            <div key={index} className="flex items-center flex-col">
              <span className="w-[15px] h-[15px] block bg-[#3a8b2d] rounded-full"></span>
              {index !== ExperienceDetails.length - 1 ? (
                <span className="w-[2px] h-[150px] block bg-[#3a8b2d]"></span>
              ) : (
                ""
              )}
              {/*  .........left line........ */}
              {index % 2 === 0 && (
                <span
                  className={`absolute left-[470px] w-[150px] h-[2px] block bg-[#3a8b2d]`}
                  style={{ top: `${37 + index * 165}px` }}
                ></span>
              )}

              {/*  .........right line........ */}
              {index % 2 !== 0 && (
                <span
                  className={`absolute right-[470px] w-[150px] h-[2px] block bg-[#3a8b2d]`}
                  style={{ top: `${37 + index * 165}px` }}
                ></span>
              )}

              {/*  .........left content Div........ */}
              {index % 2 === 0 && (
                <div
                  className={`absolute flex flex-col max-w-[445px]`}
                  style={{
                    top: `${25 + index * 165}px`,
                    left: "20px",
                    direction: "rtl",
                  }}
                >
                  <span>
                    <span className="font-bold">{item?.company}</span>
                    <span className="text-[14px]"> ({item?.date})</span>
                  </span>
                  <ul className="list-disc pr-[15px] text-[15px] font-thin">
                    <li>{item?.myrole}</li>
                    <li className="">{item?.tecnology}</li>
                    {item?.link && <li>{item?.link}</li>}
                  </ul>
                </div>
              )}
              {/*  .........Right content Div........ */}
              {index % 2 !== 0 && (
                <div
                  className={`absolute right-[60px] flex flex-col`}
                  style={{ top: `${25 + index * 165}px` }}
                >
                  <span>
                    {" "}
                    <span className="font-bold">{item?.company}</span>
                    <span className="text-[14px]"> ({item?.date})</span>
                  </span>
                  <ul className="list-disc pl-[15px] max-w-[400px] text-[15px] font-thin">
                    <li>{item?.myrole}</li>
                    <li className="">{item?.tecnology}</li>
                    {item?.link && <li>{item?.link}</li>}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
