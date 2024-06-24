import React from "react";
import ReactTypingEffect from "react-typing-effect";

function FeatureBox() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Saad Akbar</span>
        </div>
        <div className="featured-name">
          <p>
            I'm a{" "}
            <span className="typedText">
              <ReactTypingEffect text={["Developer.", "Designer." , "Data Science Trainee."]}  speed={50} eraseDelay={1000} eraseSpeed={50}/>
            </span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
          Completed a comprehensive MERN stack internship at Pixel PK and currently working as a remote graphic designer for Wolkernite. Previously served as a Teaching Assistant for the UET Computer Science Department, and now enrolled in a Data Science bootcamp at Atomcamp to enhance skills in data analysis, visualization, and machine learning.
          </p>
        </div>
        <div className="featured-text-btn">
          <a
            href="https://drive.google.com/file/d/1k-d6hmfYvfpc4S2JNvyE67Tu2G15AMGg/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              Download Resume <i className="uil uil-file-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/khawaja-saad-akbar-3a4470265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbckZmnvCQSu90f62%2BLC%2FAQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <i className="uil uil-linkedin-alt"></i>
            </div>
          </a>
          {/* <!-- <a></a><div className="icon"><i className="uil uil-twitter"></i></div></a> --> */}
          <a href="https://github.com/Xenax33" target="_blank" rel="noreferrer">
            <div className="icon">
              <i className="uil uil-github-alt"></i>
            </div>
          </a>
          <a
            href="https://www.hackerrank.com/profile/saadkbr8"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <i className="uil uil-square-full"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068512/Portfolio-Photo_o7532i.jpg" alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
