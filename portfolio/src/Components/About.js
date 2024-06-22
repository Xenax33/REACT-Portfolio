import React from "react";

function About() {
  return (
    <>
      <section className="section" id="about">
        <div className="top-header">
          <h1>About Me</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="about-info">
              <h3>My introduction</h3>
              <p>
                I breathe life into web applications using the MERN stack and
                channel creativity into visually stunning designs. Let's bring
                ideas to life!
              </p>
              <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/1VNFrtyfnpLN6VwbAdCcqTiCqd4UShVXX/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn">
                    Download CV <i className="uil uil-import"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="skills-box">
              <div className="skills-header">
                <h3>Frontend</h3>
              </div>
              <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>JavaScript</span>
                <span>React</span>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Backend</h3>
              </div>
              <div className="skills-list">
                <span>NodeJs</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="skills-box">
              <div className="skills-header">
                <h3>Database</h3>
              </div>
              <div className="skills-list">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="skills-box">
              <div className="skills-header">
                <h3>Designing Tools</h3>
              </div>
              <div className="skills-list">
                <span>Adobe Illustrator</span>
                <span>Canva</span>
                <span>Adobe Photoshop</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
