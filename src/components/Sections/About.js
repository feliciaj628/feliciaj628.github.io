import { Container } from "@mui/system";
import React from "react";

function About() {
  return (
    <div className="bg-primary-500 mt-[-1px]" id="about">
      <Container className="py-5 pt-[40px] lg:pt-[130px] lg:pb-[30px]">
        <div className="px-5">
          {/* <div className="h-auto py-[50px] px-[60px] lg:px-[180px] shadow-none mb-[-5px]"> */}
          {/* <hr className="mb-14" /> */}
          <h1 className="font-semibold text-3xl md:text-4xl md:text-5xl text-primary-50 mt-5 mb-4 lg:mt-0">
            About Me
          </h1>
          <hr className="w-full border-primary-300 mb-8" />
          <div className="flex flex-wrap md:flex-nowrap gap-[6vw] mt-4 lg:mt-5">
            <div>
              <p className="text-lg lg:text-xl font-medium text-white ">
                Hi! My name is Felicia Jones, and I'm an aspiring business analyst.
                I received my BS in Business Administration at California Polytechnic State University, San Luis Obispo, with a concentration
                in entrepreneurship, which gives me a unique perspective and hands-on experience in figuring out customers' needs.
                <br /> <br />
                My portfolio includes some projects I've done in preparation for my first business analyst role.
              </p>
            </div>
            <div>
              <div className="bg-webimage bg-cover bg-center hidden md:block md:h-[180px] md:w-[180px] lg:h-[25vh] lg:w-[15vw] rounded-xl shadow-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
