import React , {useState} from "react";
import Websites from "./Cards/Websites";
import Data from "./Cards/Data";
import Designing from "./Cards/Designing";

function Projects() {
  const [Development , setDevelopment] = useState(false)
  const [GDesigning , setDesigning] = useState(false)
  const [DataScience , setData] = useState(false)

  const handleDevelopmentClick = () => {
    setDevelopment(true);
    setDesigning(false);
    setData(false);
  };

  // Function to handle click on Designing project box
  const handleDesigningClick = () => {
    setDesigning(true);
    setDevelopment(false);
    setData(false);
  };

  // Function to handle click on Data project box
  const handleDataClick = () => {
    setData(true);
    setDevelopment(false);
    setDesigning(false);
  };

  const CloseDevelopment = () => {
    setDevelopment(false);
  };
  const CloseData = () => {
    setData(false);
  };
  const CloseDesign = () => {
    setDesigning(false);
  };

  return (
    <section class="section" id="projects">
      <div class="top-header">
        <h1>Projects</h1>
        <p>Click on the cards to view my work</p>
      </div>
      <div class="project-container">
        <div class="project-box" onClick={handleDevelopmentClick}>
          <i class="uil uil-atom"></i>
          <h3>Development</h3>
          <label>MERN Stack</label>
        </div>
        <div class="project-box" onClick={handleDesigningClick}>
          <i class="uil uil-palette"></i>
          <h3>Graphic Designing</h3>
          <label>Illustrator + Photoshop + Canva</label>
        </div>
        <div class="project-box" onClick={handleDataClick}>
          <i class="uil uil-database-alt"></i>
          <h3>Data Analytics</h3>
          <label>Atomcamp</label>
        </div>
      </div>
      {Development && <Websites onClose={CloseDevelopment} />}
      {DataScience && <Data onClose={CloseData} />}
      {GDesigning && <Designing onClose={CloseDesign} />}
    </section>
  );
}

export default Projects;
