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
      <div
        id={id}
        className="pb-[110px] mt-[50px] sm:mt-0"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <h1 className="component_title underline">Experience</h1>
        <div className="relative py-[28px] px-[20px] sm:p-[30px]">
          {ExperienceDetails.map((item, index) => (
            <div key={index} className="flex sm:items-center flex-col">
              <span className="w-[15px] h-[15px] block bg-[#3a8b2d] rounded-full"></span>
              {index !== ExperienceDetails.length - 1 ? (
                <span className="w-[2px] h-[150px] block bg-[#3a8b2d] ml-[6px] sm:ml-0"></span>
              ) : (
                ""
              )}
              {/*  .........left line........ */}
              {index % 2 === 0 && (
                <span
                  className={`absolute w-[10.5%] sm:w-[6%] md:w-[4%] lg:w-[8.5%] xl:w-[9.5%] 2xl:w-[10.5%] hidden md:block md:left-[45%] lg:left-[41%] xl:left-[39.5%] 2xl:left-[38.6%] h-[2px] bg-[#3a8b2d]`}
                  style={{ top: `${37 + index * 165}px` }}
                ></span>
              )}

              {/*  .........right line........ */}
              {index % 2 !== 0 && (
                <span
                  className={`absolute w-[10.5%] sm:w-[6%] md:w-[4%] lg:w-[8.5%] xl:w-[9.5%] 2xl:w-[10.5%] hidden md:block md:right-[46%] lg:right-[41%] xl:right-[39.5%] 2xl:right-[38.6%] h-[2px] bg-[#3a8b2d]`}
                  style={{ top: `${37 + index * 165}px` }}
                ></span>
              )}

              {/*  .........left content Div........ */}
              {index % 2 === 0 && (
                <div
                  className={`rtl-desktop absolute flex flex-col w-[80%] sm:w-[48%] md:w-[44%] lg:w-[34%] xl:w-[33%] 2xl:w-[32%] right-[8%] sm:left-[0%] md:left-[0%] lg:left-[6%] xl:left-[6%] 2xl:left-[6%]`}
                  style={{
                    top: `${25 + index * 165}px`,
                  }}
                >
                  <span>
                    <span className="font-bold">{item?.company}</span>
                    <span className="text-[14px]"> ({item?.date})</span>
                  </span>
                  <ul className="list-disc pr-[15px] pl-[15px] sm:pl-[0px] text-[15px] font-thin">
                    <li>{item?.myrole}</li>
                    <li className="">{item?.tecnology}</li>
                    {item?.link && <li>{item?.link}</li>}
                  </ul>
                </div>
              )}
              {/*  .........Right content Div........ */}
              {index % 2 !== 0 && (
                <div
                  className={`absolute flex flex-col w-[70%] sm:w-[47%] md:w-[45%] lg:w-[35%] xl:w-[29%] 2xl:w-[30%] right-[18%] sm:right-[0%] md:right-[0%] lg:right-[5%] xl:right-[10%] 2xl:right-[8%]`}
                  style={{ top: `${25 + index * 165}px` }}
                >
                  <span>
                    {" "}
                    <span className="font-bold">{item?.company}</span>
                    <span className="text-[14px]"> ({item?.date})</span>
                  </span>
                  <ul className="list-disc pl-[15px] text-[15px] font-thin">
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
