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
              <h3>MERN Stack</h3>
              <p>
                Completed a comprehensive MERN stack internship at Pixel PK,
                gaining hands-on experience in developing full-stack web
                applications using MongoDB, Express.js, React, and Node.js.
              </p>
              <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/13OPtHai3S5VpXe--j0bD8HvteXlVZujZ/view"
                  target="_blank"
                >
                  <button className="btn">View Certificate</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="about-info">
              <h3>Teaching Assistant</h3>
              <p>
                Served as a Teaching Assistant for the UET Computer Science
                Department, supporting Programming Fundamentals and
                Object-Oriented Programming (OOP) courses.
              </p>
              <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/1PXyTffdx1KeId6XNYsKdgt43FgCx0Qnh/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn">View Certificate</button>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>Graphic Designing</h3>
              <p>
              Currently working as a remote graphic designer for Wolkernite Boxing Company, creating event visuals and promotional materials, and served as the Director of Graphic Designing at the Software Square Society of UET's Computer Science Department.
              </p>
              {/* <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/1VNFrtyfnpLN6VwbAdCcqTiCqd4UShVXX/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn">View Certificate</button>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col">
            <div className="about-info">
              <h3>Data Analytics</h3>
              <p>
                Currently enrolled in a Data Analytics bootcamp at Atomcamp,
                enhancing my skills in data analysis and visualization.
              </p>
              {/* <div className="about-btn">
                <a
                  href="https://drive.google.com/file/d/1VNFrtyfnpLN6VwbAdCcqTiCqd4UShVXX/view?usp=sharing"
                  target="_blank"
                >
                  <button className="btn">View Certificate</button>
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className="col">
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
          </div> */}
        </div>
      </section>
    </>
  );
}

export default About;
