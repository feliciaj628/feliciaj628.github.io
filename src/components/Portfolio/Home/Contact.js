import React from "react";
import { Container } from "@mui/system";

function Contact() {
  return (
    <div>
      <Container className="py-12 pt-[10px] lg:pt-[60px] lg:pb-[100px]">
        <div className="px-5">
          <h1 className="font-bold text-4xl md:text-5xl text-primary-500 mt-5 lg:mt-0">
            Contact Information
          </h1>
          <hr className="my-5"></hr>
          <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-lg">
            <div className="p-5 mb-1 rounded-md bg-primary-500">
              <p className="text-white">feliciaj628@gmail.com</p>
            </div>
            <div className="p-5 mb-1 rounded-md bg-primary-500">
              <p className="text-white">(831) 206-3335</p>
            </div>
            <div className="p-5 mb-1 rounded-md bg-primary-500">
              <p className="text-white">
                https://www.linkedin.com/in/felicialjones/
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
