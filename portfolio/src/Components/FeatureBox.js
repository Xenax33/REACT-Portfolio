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
              <ReactTypingEffect text={["Hello.", "World!"]}  speed={50} eraseDelay={1000} eraseSpeed={50}/>
            </span>
          </p>
        </div>
        <div className="featured-text-info">
          <p>
            Experienced full stack MERN developer and a Graphic Designer with a
            passion for creating visually stunning and user-friendly websites
            and eye catching designs.
          </p>
        </div>
        <div className="featured-text-btn">
          {/* <!-- <button className="btn blue-btn">Hire Me</button> --> */}
          <a
            href="https://drive.google.com/file/d/1VNFrtyfnpLN6VwbAdCcqTiCqd4UShVXX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              Download CV <i className="uil uil-file-alt"></i>
            </button>
          </a>
        </div>
        <div className="social_icons">
          {/* <!-- <a><div className="icon"><i className="uil uil-instagram"></i></div></a> --> */}
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
          <img src="./profile.png" alt="avatar" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
}

export default FeatureBox;
