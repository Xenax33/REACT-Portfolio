import React from "react";
import "./Cards.css";

function Websites({ onClose }) {
  return (
    <>
      <div class="modal">
        <article class="modal-container">
          <header class="modal-container-header">
            <h1 class="modal-container-title">MERN Stack Projects</h1>
            <button class="icon-button" onClick={() => onClose()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                />
              </svg>
            </button>
          </header>
          <section class="modal-container-body rtf">
            <h2>My Experience</h2>
            <p>
              Completed a comprehensive MERN stack internship at PixelPK
              Technologies and have gained over a year of hands-on experience
              with MongoDB, Express.js, React, and Node.js. Developed and
              maintained full-stack web applications, demonstrating strong
              proficiency in creating dynamic, user-friendly solutions.
            </p>

            <h2>Some of my Projects</h2>
              <h3>Library Management System</h3>
            <p>
              {" "}
              Managed all library operations, including book handling, lending,
              and returning processes. Oversaw user management and implemented a
              fine system to ensure compliance and smooth operation. Developed
              and maintained a system to track and manage all library
              activities, ensuring efficient service for users. Additionally,
              provided data analytics to monitor library usage patterns and
              improve resource allocation and decision-making.
            </p>
            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719069758/Screenshot_2023-12-20_202309_kzkz6n.png"
              alt="err"
            />

            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719069757/Screenshot_2023-12-20_201511_t2lu3o.png"
              alt="err"
            />

            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719069759/Screenshot_2023-12-20_202141_nluute.png"
              alt="err"
            />
            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719069758/Screenshot_2023-12-20_201825_hvuwtz.png"
              alt="err"
            />
            <a
              href="https://github.com/Xenax33/Library-Management-System"
              target="_blank"
              rel="noreferrer"
            >
              Click here to see the code.
            </a>
            <h3>SafePass</h3>
            <p>
              {" "}
              A password storage and generator website where users can securely store and generate strong passwords, incorporating advanced security measures to ensure the safety and confidentiality of user data.
            </p>
            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719071784/Screenshot_2024-06-22_204516_pu21b0.png"
              alt="err"
            />

            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719071784/Screenshot_2024-06-22_204929_nxbmqq.png"
              alt="err"
            />

            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719071784/Screenshot_2024-06-22_204952_vdgmmj.png"
              alt="err"
            />
            <img
              className="modal-image-website"
              src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719071784/Screenshot_2024-06-22_205007_odmlma.png"
              alt="err"
            />
            <a
              href="https://github.com/Xenax33/SafePass-Frontend"
              target="_blank"
              rel="noreferrer"
            >
              Click here to see the code.
            </a>          
          </section>
        </article>
      </div>
    </>
  );
}

export default Websites;
