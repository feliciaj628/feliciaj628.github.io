// import { Container } from '@mui/material'
// import React from 'react'

// function Skills() {
//   return (
//     <div>
//         <Container className='py-[40px] h-[55vh]'>
//             <div className='px-5'>
//                 <h1 className='text-5xl font-bold text-gray-800 text-center mt-10'> Skills</h1>
//                 <div className='grid grid-cols-5 gap-5 text-center justify-between w-[100%] mt-8 justify-center'>
//                     <div className='green px-5 py-10 rounded-xl text-2xl text-white font-bold'>HTML</div>
//                     <div className='green px-5 py-10 rounded-xl text-2xl text-white font-bold'>CSS</div>
//                     <div className='green px-5 py-10 rounded-xl text-2xl text-white font-bold'>Javascript</div>
//                     <div className='green px-5 py-10 rounded-xl text-2xl text-white font-bold'>ReactJS</div>
//                     <div className='green px-5 py-10 rounded-xl text-2xl text-white font-bold'>Python</div>
//                     </div>
//                     </div>
//         </Container>
//     </div>
//   )
// }

// export default Skills

import { Container } from "@mui/material";
import React from "react";

function Skills() {
  return (
    <div className="bg-primary-500 mt-[-1px]">
      <Container className="py-[30px] h-auto">
        <div className="px-5">
          <div className="bg-primary-100 shadow-lg rounded-xl p-2">
            <div className="bg-gradient-to-r from-primary-300 to-primary-100 py-8 px-5 md:px-12 shadow-inset-lg rounded-xl">
              <h1 className="text-3xl md:text-[40px] font-bold text-primary-800 text-center">
                My Skillset
              </h1>

              {/* <div className='grid grid-cols-5 gap-5 text-center justify-between w-[100%] mt-8'>
              {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Python'].map(skill => (
                <div
                  key={skill}
                  className='bg-[linear-gradient(145deg,#FFFFFF,#97A0BB)] px-5 py-6 rounded-xl text-2xl text-gray-700 font-bold shadow-lg text-shadow hover:scale-105 transform transition-transform duration-300'
                >
                  {skill}
                </div>
              ))}
            </div> */}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 text-center justify-between w-[100%] mt-5 md:mt-8">
                {["HTML", "CSS", "JavaScript", "ReactJS", "Python"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-br from-primary-700 to-primary-500 py-5 md:py-10 rounded-xl text-lg md:text-2xl text-primary-100 font-semibold shadow-custom-light text-shadow hover:scale-105 transform transition-transform duration-300"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
