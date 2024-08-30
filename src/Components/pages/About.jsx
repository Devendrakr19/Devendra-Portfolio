import React from "react";

const About = ({ id }) => {
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

  const hobby = [
    { name: "Playing Cricket" },
    { name: "Listening Music" },
    { name: "Movies/Webseries" },
    { name: "Cooking" },
  ];
  const language = [
    { name: "Hindi" },
    { name: "English" },
    { name: "Bhojpuri" },
  ];
  const softskill = [
    { name: "Positive Attitude" },
    { name: "Adaptability" },
    { name: "Teamwork" },
    { name: "Patience" },
  ];
  const address = [
    { title: "Village : ", name: "Parsauna" },
    { title: "Post Office : ", name: "Parsauna" },
    { title: "Police Station : ", name: "Parsa" },
    { title: "District : ", name: "Saran" },
    { title: "Pin Code : ", name: "841219" },
    { title: "State : ", name: "Bihar" },
  ];
  return (
    <>
      <div
        id={id}
        className="bg-[#02021e] pb-[20px] mt-[50px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="mt-[20px] px-[20px]">
          <h1 className="component_title">About</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-[30px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {AboutCard.map((about, index) => (
                <div
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  className={`about_card border-[1px] min-w-[250px] border-[#03cd799e] cursor-pointer ${
                    index === 0 ? "border-[1px] border-[#03cd799e] mca_card" : ""
                  } 
                  ${index === 1 ? "border-[1px] border-[#ffff00ae] bsc_card" : ""}
                  ${index === 2 ? "border-[1px] border-[#ffffffae] isc_card" : ""}
                  ${index === 3 ? "border-[1px] border-[#ff1f93ae] matric_card" : ""}
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

            <div className="">
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="intro_card border-[1px] border-[#03cd799e]"
              >
                <h1 className="text-[20px] font-medium">Hobbies & Interests</h1>
                <div className="flex flex-wrap items-center gap-[10px] mt-[10px] mb-[10px]">
                  {hobby.map((item, index) => (
                    <button key={index} className="btn">
                      {item.name}
                    </button>
                  ))}
                </div>

                <h1 className="text-[20px] font-medium">Languages</h1>
                <div className="flex flex-wrap items-center gap-[10px] mt-[10px] mb-[10px]">
                  {language.map((item, index) => (
                    <button key={index} className="btn">
                      {item.name}
                    </button>
                  ))}
                </div>

                <h1 className="text-[20px] font-medium">
                  Interpersonal Skills
                </h1>
                <div className="flex flex-wrap items-center gap-[10px] mt-[10px] mb-[10px]">
                  {softskill.map((item, index) => (
                    <button key={index} className="btn">
                      {item.name}
                    </button>
                  ))}
                </div>

                <h1 className="text-[20px] font-medium">Permanent Address</h1>
                <div className="mt-[2px]">
                  {address.map((add, index) => (
                    <div key={index} className="">
                      <span className="text-[white]">{add.title}</span>
                      <span className="text-[#c5c5c5]">{add.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
