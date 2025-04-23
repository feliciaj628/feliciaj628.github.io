import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  const resumeUrl = "/resume.pdf";
  return (
    <>
      <Container className="pt-10 md:pt-[110px]" id="home">
        {/* <div className="py-[50px] px-[60px] lg:px-[180px] md:px-[80px] md:py-[110px] md:min-h-[49vh] h-[25vh] max-w-[100vw]"> */}
        <div className="px-5">
          <div className="flex gap-12">
            <div className="relative inline-block hidden h-[180px] w-[150px] md:h-[200px] md:w-[180px] lg:h-[39vh] lg:w-[15vw] md:block">
              <div className="absolute inset-0 bg-primary-500 rounded-xl transform -translate-x-4 translate-y-4" />
              <div className="bg-me bg-cover bg-center h-full w-full rounded-xl shadow-xl filter brightness-95" />
            </div>

            <div className="animate-slide-in lg:ml-5 mr-5">
              {/* <h1 className="font-bold text-4xl md:text-5xl text-gray-800 max-w-[65vw] md:max-w-[55vw] "> */}
              <h1 className="serif-500 text-left text-[31px] md:text-4xl lg:text-[56px] leading-[1] text-gray-800">
                Frontend Web Developer and Designer
              </h1>
              <ul className="list-disc md:text-left font-semibold leading-tight md:leading-normal text-gray-700 pt-[8px] list-outside px-5 md:pl-5 text-lg lg:text-[1.3rem] md:max-w-[55vw] lg:max-w-[45vw]">
                <li className="pt-3">
                  Experienced in HTML, CSS, JavaScript, and ReactJS
                </li>
                <li className="pt-3">
                  Strong understanding of UX/UI principles and implementation
                </li>
                <li className="pt-3">
                  Prioritizes your brand identity and vision for the website
                </li>
              </ul>
              <div className="flex gap-3  sm:justify-start text-md md:text-xl leading-tight md:leading-normal mb-5">
                <a href="#portfolio">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white h-auto w-auto py-2 px-2 md:py-3 md:px-5 font-bold rounded-lg mt-5 border-1 border-[#DDE7DF]">
                    View my Portfolio
                  </button>
                </a>
                <a href={resumeUrl} download="MyResume.pdf">
                  <button className="bg-primary-500 hover:bg-primary-600 text-white h-auto w-auto py-2 px-2 md:py-3 md:px-5 font-bold rounded-lg mt-5 border-1 border-[#DDE7DF]">
                    Download my Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Banner;
