import React from "react";

const About = ({ id }) => {
  const EducationDetails = [
    {
      coursetitle: "Master's of Computer Applications",
      address: "Chandigarh Univesity, Mohali, Punjab",
      session: "2022-2024",
      grade: "CGPA : 6.96",
    },
    {
      coursetitle: "Bachlor's of Science",
      address: "Babasaheb Bhimrao Ambedkar Bihar University, Muzaffarpur",
      session: "2018-2022",
      grade: "Percentage : 72",
    },
    {
      coursetitle: "Higher Secondary (12th)",
      address: "M.L College, Marar, Parsa (Saran)",
      session: "2016-2018",
      grade: "Percentage : 51.4",
    },
    {
      coursetitle: "Secondary (10th)",
      address: "BDS Public School, Madarpur, Basantpur (Siwan)",
      session: "2015-2016",
      grade: "CGPA : 8.2",
    },
  ];

  const personalDetails = [
    { title: "Address", name: "Parsauna, Parsa, Saran(Bihar), 841219" },
    { title: "Contact", name: "+91 7371034132,  devendra34132@gmail.com" },
    { title: "Language", name: "Hindi, English, Bhojpuri" },
    {
      title: "Soft Skill",
      name: "Positive Attitude, Adaptability, Teamwork, Patience",
    },
    {
      title: "Hobby & Interest",
      name: "Playing Cricket, Listening Music, Movies/Webseries",
    },
  ];

  return (
    <>
      <div
        id={id}
        className="pb-[20px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="component_title underline">About</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] mt-[30px] pl-[100px]">
          <div className=""> 
            {EducationDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-l-[3px] border-[green] mb-[15px] px-[10px]"
              >
                <span className="font-bold">{item?.coursetitle}</span>
                <span>{item?.session}</span>
                <span>{item?.address}</span>
                <span>{item?.grade}</span>
              </div>
            ))}
          </div>
          <div>
            {personalDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-l-[3px] border-[green] mb-[15px] px-[10px]"
              >
                <span className="font-bold"> {item?.title}</span>
                <span>{item?.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
