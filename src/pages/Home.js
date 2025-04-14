import React from "react";
import Banner from "../components/Portfolio/Home/Banner";
import Transition1 from "../layout/transitions/Transition1";
import Transition2 from "../layout/transitions/Transition2";
import Transition3 from "../layout/transitions/Transition3";
import About from "../components/Portfolio/Home/About";
import Skills from "../components/Portfolio/Home/Skills";
import Portfolio from "../components/Portfolio/Home/Portfolio";
import Contact from "../components/Portfolio/Home/Contact";

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
