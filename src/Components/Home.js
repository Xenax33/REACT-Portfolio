import React from "react";
import FeatureBox from "./FeatureBox";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <main className="wrapper">
      <FeatureBox />
      <About />
      <Projects/>
      <Contact/>
    </main>
  );
}

export default Home;
