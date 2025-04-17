import React from "react";
import { Container } from "@mui/system";

function Contact() {
  return (
    <div>
      <Container className="py-12 pt-[10px] lg:pt-[60px] lg:pb-[100px]">
        <div className="px-5">
          <h1 className="font-bold text-4xl text-center md:text-5xl text-primary-800 mt-5 lg:mt-0">
            Contact Information
          </h1>
          <hr className="my-5"></hr>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-lg justify-center">
            <div className="py-5 px-4 md:py-9 md:px-7  w-full mb-1 rounded-3xl bg-primary-500 shadow-[2px_2px_0px_#47506D] flex flex-col items-center gap-5">
              <div className="bg-gmaillogo h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full bg-center bg-cover shadow-[1px_1px_0px_#47506D]" />
              <hr className="w-11" />
              <p className="text-white font-bold">feliciaj628@gmail.com</p>
            </div>
            <div className="py-5 px-4 md:py-9 md:px-7  w-full mb-1 rounded-3xl bg-primary-500 shadow-[2px_2px_0px_#47506D] flex flex-col  items-center gap-5">
              <div className="bg-phoneicon h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full bg-center bg-cover shadow-[1px_1px_0px_#47506D]" />
              <hr className="w-11" />
              <p className="text-white font-bold">(831) 206-3335</p>
            </div>
            <div className="py-5 px-4 md:py-9 md:px-7 w-full mb-1 rounded-3xl bg-primary-500 shadow-[2px_2px_0px_#47506D] flex flex-col items-center gap-5">
              <div className="bg-linkedinicon h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full bg-center bg-cover shadow-[1px_1px_0px_#47506D] " />
              <hr className="w-11" />
              <p className="font-bold text-white max-w-[90%] break-words">
                linkedin.com/in/felicialjones/
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
