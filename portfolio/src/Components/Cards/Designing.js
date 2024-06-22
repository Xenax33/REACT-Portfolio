import React from 'react'

function Designing({onClose}) {
  return (
    <div class="modal">
    <article class="modal-container">
      <header class="modal-container-header">
        <h1 class="modal-container-title">
          Graphic Designing
        </h1>
        <button class="icon-button" onClick={()=> onClose()}>
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
        <h2>
          My Experience
        </h2>

        <p>
        I am Currently working as a remote graphic designer for Wolkernite Boxing Company, creating event visuals and promotional materials, and also served as the Director of Graphic Designing at the Software Square Society of UET Lahore's Computer Science Department.{" "}
        </p>

        <h2>Some of my Designs</h2>

        <h3>Promotional Posters for a Wolkernite Event</h3>
        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068514/Fighters-Poster_fevbm3.jpg" alt='err'/>

        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068513/Fighter-Poster_o5pugr.jpg" alt='err'/>

        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068512/Poster_hwxpfv.jpg" alt='err'/>

        <h3>Competiton Poster Design</h3>
        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068512/Competition_lfi0j3.png" alt='err'/>


        <h3>Codex 2.0 Query Master Competition</h3>
        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068512/8_s045rq.png" alt='err'/>


        <h3>Shirt Design for Itec 2023</h3>
        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068512/Design1Shirt_mishst.jpg" alt='err'/>


        <h3>Standee Design for Orientation 2023</h3>
        <img className='modal-image' src="https://res.cloudinary.com/djiqxvcin/image/upload/v1719068516/Standee_pwjinf.png" alt='err'/>


      </section>
    </article>
  </div>
  )
}

export default Designing
