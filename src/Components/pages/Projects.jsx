const Projects = ({ id }) => {
  const ProjectDetails = [
    {
      title: "Knowledge.All",
      tecnology:
        "HTML5, CSS3, JavaScript, React.js, Tailwind, Material UI, Redux Toolkit, Formik, Node.js, Express.js, MongoDb",
      img: "/kAll.png",
      demo: "https://knowledge-all-kn0s.onrender.com",
      github: "https://github.com/Devendrakr19/edu_frontend",
    },
    {
      title: "PrepZone",
      tecnology:
        "HTML5, CSS3, JavaScript, Next.Js, React.js, Tailwind, Zustand, Formik",
      img: "",
      demo: "",
      github: "",
    },
    {
      title: "Renting House Application ",
      tecnology: "HTML5, CSS3, SCSS, JavaScript, React.js",
      img: "/gethome.webp",
      demo: "",
      github: "",
    },
    // {
    //   title: "Renting House Application ",
    //   tecnology: "HTML5, CSS3, SCSS, JavaScript, React.js",
    //   img: "/gethome.webp",
    //   demo: "",
    //   github: "",
    // },
    // {
    //   title: "Renting House Application ",
    //   tecnology: "HTML5, CSS3, SCSS, JavaScript, React.js",
    //   img: "/gethome.webp",
    //   demo: "",
    //   github: "",
    // },
  ];

  const handleDemo = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Demo link not available");
    }
  };
  const handleGithub = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("GitHub link not available");
    }
  };

  return (
    <>
      <div id={id} className="pb-[60px]">
        <h1 className="component_title underline">Projects</h1>
        <div
          className={`flex flex-wrap items-center gap-[20px] mt-[20px] px-[110px] ${
            ProjectDetails.length === 3 ? "justify-center" : ""
          }`}
        >
          {ProjectDetails.map((item, index) => (
            <div key={index} className="relative z-50">
              <div className="p-[20px] w-[280px] h-[280px] border-[1px] border-[#999898] bg-[#ffffff1a] z-20 rounded hover:bg-[#75937538] transition-all delay-75">
                <h1 className="text-[18px] font-bold truncate">{item?.title}</h1>
                <div className="relative group w-fit">
                  <p className="truncate max-w-[200px] cursor-pointer">
                    {item.tecnology}
                  </p>
                  {/* Tooltip */}
                  <span className="absolute left-[0px] bottom-full mb-1 hidden group-hover:block bg-[#000000d5] text-white text-xs px-2 py-1 rounded shadow-lg z-50">
                    {item.tecnology}
                  </span>
                </div>
                <div className="w-[100%] h-[110px] mt-[10px] overflow-hidden">
                  <img
                    src={item?.img}
                    alt="img"
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-full flex items-center justify-between mt-[20px]">
                  <button
                    className="border-none bg-[#cbcaca] shadow hover:bg-[#c1d6c4] transition-all delay-75 px-[15px] py-[5px] rounded"
                    onClick={() => handleDemo(item?.demo)}
                  >
                    Live Demo
                  </button>
                  <button
                    className="border-none bg-[#cbcaca] shadow hover:bg-[#c1d6c4] transition-all delay-75 px-[15px] py-[5px] rounded"
                    onClick={() => handleGithub(item?.github)}
                  >
                    GitHub
                  </button>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
