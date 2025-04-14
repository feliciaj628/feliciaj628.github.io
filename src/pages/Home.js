import React from "react";
import Banner from "../components/Home/Banner";
import Transition1 from "../layout/transitions/Transition1";
import Transition2 from "../layout/transitions/Transition2";
import Transition3 from "../layout/transitions/Transition3";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Portfolio from "../components/Home/Portfolio";
import Contact from "../components/Home/Contact";

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
