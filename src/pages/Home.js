import React from "react";
import Banner from "../components/Sections/Banner";
import Transition1 from "../layout/transitions/Transition1";
import Transition2 from "../layout/transitions/Transition2";
import Transition3 from "../layout/transitions/Transition3";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Contact from "../components/Sections/Contact";
import Portfolio from "../components/Sections/Portfolio";

function Home() {
  return (
    <>
      <Banner />
      <Transition1 />
      <About />
      {/* <Transition2 /> */}
      <Skills />
      {/* <Transition3 /> */}
      <Portfolio />
      <Transition2 />
      <Contact />
    </>
  );
}

export default Home;
