import { Container } from "@mui/system";
import Lightbox from "../Portfolio/Lightbox";

function Portfolioold2() {

  return (
    <div className="bg-[#64719A] mt-[-5px] pt-[30px] pb-[70px]" id="portfolio">
      <Container>
        <div className="mx-5">
          <div className="bg-primary-50 shadow-lg rounded-xl p-2">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 px-5 md:px-14 shadow-inset-lg rounded-xl">
        {/* <div className="h-auto px-5 flex flex-col items-center md:items-start"> */}
          <div className="h-auto px-5 flex flex-col items-center">
            <h1 className="font-semibold text-primary-800 text-3xl mb-4 md:text-4xl md:text-5xl text-[#eff5ee]">
              My Portfolio
            </h1>
            <hr className="w-full border-primary-100 mb-5" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-5 mt-3 md:mt-5 w-full">
                <div className="shadow-xl">
                  <div className="bg-white p-3 mb-0 rounded-t">
                    <p className="text-gray-800 font-semibold">Harvestly Website Navigation Process Improvement</p>
                    <hr className="border-gray-300"/>
                    <p className="mt-2 leading-tight text-sm">Lean Six Sigma Mini-Project</p>
                    </div>
                      <Lightbox
                        className="bg-lss bg-cover bg-center rounded-b-lg aspect-[15/10] w-full cursor-pointer transition duration-300 ease-in-out hover:brightness-90"
                        largeClass="bg-lss"
                      />
                    </div>
                    <div className="shadow-xl">
                  <div className="bg-white p-3 mb-0 rounded-t">
                    <p className="text-gray-800 font-semibold">Harvestly Customer Development</p>
                    <hr className="border-gray-300"/>
                    <p className="mt-2 leading-tight text-sm">Senior Capstone</p>
                    </div>
                      <Lightbox
                        className="bg-customerdev bg-cover bg-left rounded-b-lg aspect-[15/10] w-full cursor-pointer transition duration-300 ease-in-out hover:brightness-90"
                        largeClass="bg-customerdev"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Portfolioold2;

{/* function Portfolio() {

  return (
    <div className="bg-[#64719A] mt-[-5px]" id="portfolio">
      <Container>
        <div className="lg:pt-[90px] pt-[40px] md:pb-[80px] h-auto px-5 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-3xl mb-4 md:text-4xl md:text-5xl text-[#eff5ee]">
            Portfolio
          </h1>
          <div>
                <div className="flex items-center align-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#64719A"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FFFFFF"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>{" "}
                  <p className="text-white font-bold text-lg leading-tight mt-[3px] ml-1">
                    Hover to see the before!
                  </p>
                </div>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-3 md:mt-5 w-full">
            <div className="shadow-lg">
              <div className="bg-primary-50 p-3 mb-0 rounded-t">
                <p className="text-gray-800 font-semibold">Lean Six Sigma Mini-Project</p>
                <hr className="border-gray-300"/>
                <p className="mt-1">Harvestly Website Navigation Process Improvement</p></div>
                  <Lightbox
                    className="bg-lss bg-cover bg-center rounded-b-lg aspect-[15/10] w-full cursor-pointer transition duration-300 ease-in-out hover:brightness-90"
                    largeClass="bg-lss"
                  />
                </div>
          </div>
          </div>
      </Container>
    </div>
  );
}

export default Portfolio; */}
