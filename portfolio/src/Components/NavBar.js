import React, { useState, useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";

function NavBar() {
  const [menuClass, setMenuClass] = useState("nav-menu");
  const navMenuRef = useRef(null);
  const headerRef = useRef(null);

  const myMenuFunction = () => {
    setMenuClass((prevClass) =>
      prevClass === "nav-menu" ? "nav-menu responsive" : "nav-menu"
    );
  };

  useEffect(() => {
    if (navMenuRef.current) {
      navMenuRef.current.className = menuClass;
    }
  }, [menuClass]);

  useEffect(() => {
    const headerShadow = () => {
      if (headerRef.current) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          headerRef.current.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
          headerRef.current.style.height = "70px";
          headerRef.current.style.lineHeight = "70px";
        } else {
          headerRef.current.style.boxShadow = "none";
          headerRef.current.style.height = "90px";
          headerRef.current.style.lineHeight = "90px";
        }
      }
    };

    window.addEventListener("scroll", headerShadow);
    return () => window.removeEventListener("scroll", headerShadow);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });
    sr.reveal('.project-box',{interval: 200})

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });
    srRight.reveal(".form-control", { delay: 100 });
  }, []);

  useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <nav id="header" ref={headerRef}>
      <div className="nav-logo">
        <p className="nav-name">Saad</p>
        <span>.</span>
      </div>
      <div className={menuClass} ref={navMenuRef} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
              Home
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <a
          href="https://drive.google.com/file/d/1VNFrtyfnpLN6VwbAdCcqTiCqd4UShVXX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </button>
        </a>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={myMenuFunction}></i>
      </div>
    </nav>
  );
}

export default NavBar;
