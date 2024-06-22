import React from 'react'

function Footer() {
  return (
      <footer>
        <div class="top-footer">
          <p>Saad Akbar .</p>
        </div>
        <div class="middle-footer">
          <ul class="footer-menu">
            <li class="footer_menu_list">
              <a href="#home">Home</a>
            </li>
            <li class="footer_menu_list">
              <a href="#about">About</a>
            </li>
            <li class="footer_menu_list">
              <a href="#projects">Projects</a>
            </li>
            <li class="footer_menu_list">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-social-icons">
          {/* <!-- <a><div class="icon"><i class="uil uil-instagram"></i></div></a> --> */}
          <a
            href="https://www.linkedin.com/in/khawaja-saad-akbar-3a4470265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbckZmnvCQSu90f62%2BLC%2FAQ%3D%3D"
            target="_blank"
            ><div class="icon"><i class="uil uil-linkedin-alt"></i></div
          ></a>
          {/* <!-- <a></a><div class="icon"><i class="uil uil-twitter"></i></div></a> --> */}
          <a href="https://github.com/Xenax33" target="_blank"
            ><div class="icon"><i class="uil uil-github-alt"></i></div
          ></a>
          <a href="https://www.hackerrank.com/profile/saadkbr8" target="_blank"
            ><div class="icon"><i class="uil uil-square-full"></i></div
          ></a>
        </div>
        <div class="bottom-footer">
          <p>
            Copyright &copy;
            <a href="#home" style={{textDecoration: "none"}}>Saad Akbar</a> - All
            rights reserved
          </p>
        </div>
      </footer>
  )
}

export default Footer
