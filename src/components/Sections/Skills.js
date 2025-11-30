// import { Container } from "@mui/material";
// import React from "react";

// function Skills() {
//   return (
//     <div className="bg-primary-500 mt-[-1px]">
//       <Container className="py-[20px] h-auto">
//         <div className="px-5">
//           <div className="bg-lavender-50 shadow-lg rounded-xl p-2">
//             <div className="bg-gradient-to-r from-lavender-300 to-lavender-100 py-11 px-5 md:px-14 shadow-inset-lg rounded-xl">
//               <h1 className="text-3xl md:text-5xl font-bold text-primary-800 text-center">
//                 My Skillset
//               </h1>

//               {/* <div className='grid grid-cols-5 gap-5 text-center justify-between w-[100%] mt-8'>
//               {['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Python'].map(skill => (
//                 <div
//                   key={skill}
//                   className='bg-[linear-gradient(145deg,#FFFFFF,#97A0BB)] px-5 py-6 rounded-xl text-2xl text-gray-700 font-bold shadow-lg text-shadow hover:scale-105 transform transition-transform duration-300'
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div> */}

//               <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 text-center justify-between w-[100%] mt-5 md:mt-8">
//                 {[
//                   "Microsoft Excel",
//                   "SQL",
//                   "Python",
//                   "Power BI",
//                   "Lean/Six Sigma",
//                   "Agile",
//                   "Google Analytics",
//                   "Jira",
//                   "Trello",
//                   "ClickUp"
//                 ].map((skill) => (
//                   <div
//                     key={skill}
//                     className="bg-gradient-to-br from-lavender-700 to-lavender-400 py-4 md:py-5 rounded-xl text-md md:text-xl text-primary-100 font-semibold shadow text-shadow hover:scale-105 transform transition-transform duration-300"
//                   >
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Skills;


import { Container } from "@mui/material";
import React from "react";

function Skills() {
  return (
    <div className="bg-primary-500 mt-[-1px]">
      <Container className="pt-[10px] pb-[100px] h-auto">
        <div className="px-5">
              <h1 className="text-3xl md:text-5xl font-semibold text-primary-50  mb-5">
                My Skillset
              </h1>
              <hr className="w-full border-primary-300 mb-10" />

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

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4 text-center justify-between w-[100%] mt-5">
                {[
                  "Microsoft Excel",
                  "SQL",
                  "Python",
                  "Power BI",
                  "Lean/Six Sigma",
                  "Agile",
                  "Google Analytics",
                  "Jira",
                  "Trello",
                  "ClickUp"
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-br from-lavender-50 to-lavender-300 py-4 md:py-5 rounded-xl text-md md:text-xl text-lavender-800 font-semibold shadow text-shadow hover:scale-105 transform transition-transform duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
      </Container>
    </div>
  );
}

export default Skills;
