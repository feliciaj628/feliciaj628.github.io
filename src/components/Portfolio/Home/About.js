import { Container } from "@mui/system";
import React from "react";

function About() {
  return (
    <div className="bg-primary-500 mt-[-1px]" id="about">
      <Container className="py-5 pt-[40px] lg:pt-[130px] lg:pb-[90px]">
        <div className="px-5">
          {/* <div className="h-auto py-[50px] px-[60px] lg:px-[180px] shadow-none mb-[-5px]"> */}
          {/* <hr className="mb-14" /> */}
          <h1 className="font-bold text-3xl md:text-4xl md:text-5xl text-[#eff5ee] mt-5 lg:mt-0">
            About Me
          </h1>
          <div className="flex flex-wrap md:flex-nowrap gap-[6vw] mt-4 lg:mt-5">
            <div>
              <p className="text-lg md:text-lg lg:text-2xl font-semibold text-white ">
                My name is Felicia Jones, and I am a frontend web developer and
                designer who specializes in startups and growing businesses. I
                currently study business and entrepreneurship at Cal Poly, which
                gives me a unique perspective in understanding what customers
                want and need. I combine UX/UI principles with an understanding
                of brand archetypes to create websites that draw in customers
                and induce sales. <br /> <br />
                My portfolio includes some websites I have made from scratch as
                well as existing startups I have worked with to improve their
                design and overall user experience.
              </p>
            </div>
            <div>
              <div className="bg-webimage bg-cover bg-center hidden md:block md:h-[180px] md:w-[180px] lg:h-[40vh] lg:w-[22vw] rounded-xl shadow-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
