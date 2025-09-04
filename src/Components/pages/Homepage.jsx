import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects  from "./Projects";
import Skills from "./Skills";

const Homepage = () => {
  return (
    <>
        <div className="bg-[#bec0b5] overflow-hidden" id="homepage"> 
          <div className="grid grid-cols-1 md:grid-cols-3 pt-[20px]">
            <div className="col-span-2 relative flex justify-end items-end sm:h-[580px]">
              <div
                className="circle-text-wrapper will-change-transform hidden sm:block"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="2000"
              >
                <svg viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      fill="none"
                    />
                  </defs>
                  <text textLength="500" lengthAdjust="spacing">
                    <textPath href="#circlePath" startOffset="0%">
                      &nbsp;WORK HARD, SUCCESS, DREAM BIG,
                    </textPath>
                  </text>
                </svg>
                <div className="center-icon">🎯</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-around w-[100%] h-[450px]">
                <div
                  className="pl-[18px] sm:pl-0 sm:mt-[200px]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[#323131]">HI THERE</span>
                    <span className="block w-[100px] h-[1px] bg-[#323131]"></span>
                  </div>
                  <p className="text-[black] whitespace-nowrap text-[40px] md:text-[36px] lg:text-[42px] xl:text-[46px] 2xl:text-[50px] font-mono">
                    lets think
                  </p>
                  <p className="text-[56px] md:text-[62px] lg:text-[68px] xl:text-[72px] 2xl:text-[76px] leading-[40px] text-[#1daf81] font-bold">
                    creative
                  </p>
                </div>
                <div className="flex justify-center items-center sm:block relative pt-[40px] sm:pt-0">
                  <div
                    className="w-[300px] sm:w-[250px] md:w-[210px] lg:w-[230px] xl:w-[250px] 2xl:w-[270px] h-[280px] sm:h-[240px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[300px] object-contain relative z-20"
                    data-aos="zoom-out-down"
                    data-aos-duration="2000"
                  >
                    <img
                      src="/selfimg.jpeg"
                      alt="no img"
                      className="w-full h-full object-cover object-top filter brightness-75"
                    />
                  </div>
                  <div
                    className="absolute hidden sm:block top-[0px] sm:top-[30px] md:top-[30px] lg:top-[40px] xl:top-[60px] 2xl:top-[80px] right-[0px] sm:right-[30px] md:right-[30px] lg:right-[40px] xl:right-[60px] 2xl:right-[80px] w-[300px] sm:w-[250px] md:w-[210px] lg:w-[230px] xl:w-[250px] 2xl:w-[270px] h-[280px] sm:h-[240px] md:h-[240px] lg:h-[260px] xl:h-[280px] 2xl:h-[300px] bg-[#3a8b2d] z-10"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center flex-col h-full">
              <div
                className="px-[30px] md:mt-[-120px] pr-[50px] sm:mt-[-90px] sm:px-[30px] md:pr-[20px] lg:pr-[30px] xl:pr-[40px] 2xl:pr-[50px]"
                data-aos="fade-left" 
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h1 className="text-[22px] mt-[15px] sm:mt-0 sm:text-[30px] md:text-[15px] lg:text-[21px] xl:text-[24px] 2xl:text-[26px]">
                  I'm <span className="underline">Devendra Kumar Pandit</span>
                </h1>
                <p className="mt-[10px] sm:mt-[5px] text-[#323131] leading-[20px] md:leading-[20px] xl:leading-none 2xl:leading-none">
                  A software developer who creates, builds, and maintains web
                  applications that solve real-world problems using code. I work
                  with modern technologies and frameworks to develop
                  user-friendly, scalable, and efficient interfaces. I work in
                  groups, troubleshoot problems, and keep learning how to adjust
                  to changing user requirements and technological advancements.
                </p>
              </div>
            </div>
          </div>
          <Experience id="experience"/>
          <Projects id="project" />
          <Skills id="skills" />
          <About id="about" />
          <Footer/>
        </div> 
    </>
  );
};

export default Homepage;
