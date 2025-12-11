import React from "react";
import { Container } from "@mui/system";

function Contact() {
  return (
    <div id="contact" className="bg-primary-500">
      <Container className="py-12 pt-[10px] lg:pt-[40px] lg:pb-[80px]">
        <div className="mx-5">
          <h1 className="font-semibold text-4xl md:text-5xl text-white mt-5 lg:mt-0">
            Contact Information
          </h1>
          <hr className="my-5"></hr>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-lg justify-center">
            <div className="py-5 px-4 md:py-7 md:px-7  w-full mb-1 rounded-3xl bg-gradient-to-br from-lavender-50 to-lavender-200 shadow-[2px_2px_2px_#60556b] flex flex-col items-center gap-4">
              <div className="bg-gmaillogo h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full bg-center bg-cover shadow-[1px_1px_1px_#60556b]" />
              <hr className="w-11 border-gray-500" />
              <p className="text-gray-600 font-medium">feliciaj628@gmail.com</p>
            </div>
            <div className="py-5 px-4 md:py-7 md:px-7  w-full mb-1 rounded-3xl bg-gradient-to-br from-lavender-50 to-lavender-200 shadow-[2px_2px_2px_#60556b] flex flex-col  items-center gap-4">
              <div className="bg-phoneicon h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full bg-center bg-cover shadow-[1px_1px_1px_#60556b]" />
              <hr className="w-11 border-gray-500" />
              <p className="text-gray-600 font-medium">(831) 206-3335</p>
            </div>
            <div className="py-5 px-4 md:py-7 md:px-7 w-full mb-1 rounded-3xl bg-gradient-to-br from-lavender-50 to-lavender-200 shadow-[2px_2px_2px_#60556b] flex flex-col items-center gap-4">
              <div className="bg-linkedinicon h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full bg-center bg-cover shadow-[1px_1px_1px_#60556b] " />
              <hr className="w-11 border-gray-500" />
              <p className="font-medium text-gray-600 max-w-[90%] break-words">
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
