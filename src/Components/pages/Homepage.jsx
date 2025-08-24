import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects  from "./Projects";
import Skills from "./Skills";

const Homepage = () => {
  return (
    <>
        <div className="bg-[#bec0b5] pt-[20px] overflow-hidden" id="homepage"> 
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 relative flex justify-end items-end h-[580px]">
              <div
                className="circle-text-wrapper will-change-transform"
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
                <div class="center-icon">🎯</div>
              </div>
              <div className="flex justify-around w-[100%] h-[450px]">
                <div
                  className="mt-[200px]"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="flex items-center gap-[5px]">
                    <span className="text-[#323131]">HI THERE</span>
                    <span className="block w-[100px] h-[1px] bg-[#323131]"></span>
                  </div>
                  <p className="text-[black] text-[50px] font-mono">
                    lets think
                  </p>
                  <p className="text-[76px] leading-[40px] text-[#1daf81] font-bold">
                    creative
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="w-[270px] h-[300px] object-contain relative z-20"
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
                    className="absolute top-[100px] right-[80px] w-[270px] h-[300px] bg-[#3a8b2d] z-10"
                    data-aos="zoom-out-up"
                    data-aos-duration="2000"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center flex-col h-full">
              <div
                className="mt-[-120px] pr-[50px]"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h1 className="text-[26px]">
                  I'm <span className="underline">Devendra Kumar Pandit</span>
                </h1>
                <p className="mt-[10px] text-[#323131]">
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
