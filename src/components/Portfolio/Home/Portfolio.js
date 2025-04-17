import { Container } from "@mui/system";
import React, { useState } from "react";

function Portfolio() {
  const [active, setActive] = useState("scratch");
  const handleSectionChange = (section) => {
    setActive(section);
  };

  return (
    <div className="bg-[#64719A] mt-[-5px]" id="portfolio">
      <Container>
        {/* <hr className="mb-5" /> */}
        <div className="lg:pt-[90px] pt-[40px] md:pb-[80px] h-auto px-5 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-3xl md:text-4xl md:text-5xl text-[#eff5ee]">
            Portfolio
          </h1>
          <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-3 md:mt-5">
            <button
              onClick={() => handleSectionChange("scratch")}
              className={`${
                active === "improvements"
                  ? "bg-primary-100 text-gray-900 "
                  : "bg-primary-50 text-gray-800 shadow-light-button"
              } px-6 py-3 rounded-md font-bold text-gray-800 leading-tight`}
            >
              Made from Scratch
            </button>
            <button
              onClick={() => handleSectionChange("improvements")}
              className={`${
                active === "scratch"
                  ? "bg-primary-100 text-gray-900"
                  : "bg-primary-50 text-gray-800 shadow-light-button"
              } px-6 py-3 rounded-md font-bold text-gray-800 leading-tight`}
            >
              Design Improvements
            </button>
            <br />
            {active === "improvements" && (
              <div>
                <div className="flex items-center align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#47506D"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>{" "}
                  <p className="text-white font-bold text-lg leading-tight">
                    Click to see the before!
                  </p>
                </div>
              </div>
            )}
          </div>
          <div>
            {active === "scratch" && (
              <div className="flex flex-col sm:flex-row items-center sm:flex-wrap mt-[50px] gap-5 lg:gap-10">
                <div className="bg-portfolio bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                <a href="https://crystalsmagickcorner.com">
                  <div className="bg-tarot bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                </a>
                <div className="bg-drops bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                <div className="bg-userlist bg-cover bg-top h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
              </div>
            )}
            {active === "improvements" && (
              <>
                <div className="flex flex-col md:flex-row items-center md:flex-wrap mt-[50px] gap-10">
                  <a href="https://sustainablelandinitiative.netlify.app/">
                    <div className="bg-sli hover:bg-slibefore bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                  </a>
                  <a href="https://sustainablelandinitiative.netlify.app/login">
                    <div className="bg-slilogin hover:bg-sliloginbefore bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                  </a>
                  <div className="bg-harvestlyhome hover:bg-harvestlyhomebefore bg-cover bg-top h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                  <div className="bg-reviews hover:bg-reviewsbefore bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                  <div className="bg-ponte hover:bg-pontebefore bg-cover bg-center h-[220px] w-[350px] md:h-[210px] md:w-[350px] lg:h-[320px] lg:w-[530px] rounded-lg shadow-xl" />
                </div>
              </>
            )}
          </div>
          {/* 
        <h1 className="font-bold text-5xl text-[#eff5ee] mt-[90px]">
          Design Improvements
        </h1>
        <h2 className="font-bold text-3xl text-[#eff5ee] mt-[10px]">
          Hover to see the before!
        </h2>
        <div className="flex flex-wrap mt-[50px] gap-10">
          <div className="bg-ponte hover:bg-pontebefore bg-cover bg-center h-[320px] w-[530px] rounded-lg shadow-xl" />
          <a href="https://sustainablelandinitiative.netlify.app/">
            <div className="bg-sli hover:bg-slibefore bg-cover bg-center h-[320px] w-[530px] rounded-lg shadow-xl" />
          </a>
        </div> */}
        </div>
      </Container>
    </div>
  );
}

export default Portfolio;
