import React from "react";

const About = () => {
  const AboutCard = [
    {
      coursetitle: "MCA",
      coursename: "(Master of Computer Applications)",
      address: "Chandigarh Univesity, Mohali, Punjab",
      session: "Session : 2022-2024",
      grade: "CGPA : 6.96",
    },
    {
      coursetitle: "Bsc",
      coursename: "(Bachlor of Science)",
      address: "Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur",
      session: "Session : 2018-2022",
      grade: "Percentage : 72",
    },
    {
      coursetitle: "Isc",
      coursename: "(Intermediate of Science)",
      address: "M.L College, Marar, Parsa (Saran)",
      session: "Session : 2016-2018",
      grade: "Percentage : 51.4",
    },
    {
      coursetitle: "Matriculation",
      coursename: "(Matriculation)",
      address: "BDS Public School, Madarpur, Basantpur (Siwan)",
      session: "Session : 2015-2016",
      grade: "CGPA : 8.2",
    },
  ];
  return (
    <>
      <div className="bg-[#02021e] h-[100vh]">
        <div className="mt-[20px]">
          <h1 className="text-center text-[80px]">About</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] px-[20px] mt-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] p-[5px]">
              {AboutCard.map((about, index) => (
                <div
                  key={index}
                  className={`about-card border-[1px] min-w-[250px] border-[#03cd799e] cursor-pointer ${
                    index === 0 ? "border-[1px] border-[#03cd799e]" : ""
                  } 
                  ${index === 1 ? "border-[1px] border-[#ffff00ae]" : ""}
                  ${index === 2 ? "border-[1px] border-[#ffffffae]" : ""}
                  ${index === 3 ? "border-[1px] border-[#ff1f93ae]" : ""}
                `}
                >
                  <h1 className="text-[32px]">{about.coursetitle}</h1>
                  <h5
                    className={`text-[12px] text-center 
                  ${index === 0 ? "text-[#03cd799e]" : ""}
                  ${index === 1 ? "text-[#ffff00ae]" : ""}
                  ${index === 2 ? "text-[#ffffffae]" : ""}
                  ${index === 3 ? "text-[#ff1f93ae]" : ""}
                  `}
                  >
                    {about.coursename}
                  </h5>
                  <p className="text-[14px]">{about.address}</p>
                  <p className="text-[16px]">{about.session}</p>
                  <p className="text-[16px]">{about.grade}</p>
                </div>
              ))}
            </div>
            <div className="border-[#0062ff] border">
              <h1 className="text-center text-[40px]">Introduction</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
