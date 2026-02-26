import React from 'react';

function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <img 
              src="/your-photo.jpg" 
              alt="Your Photo" 
              className="rounded-circle mb-3 mb-md-0" 
              style={{ width: '192px', height: '192px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-8">
            <p style={{ fontSize: '1.1em' }}>
              I am a fourth-year BSIT student with a strong interest in software development, database management, and web technologies. I enjoy building systems that solve real-world problems and enhance user experience. Through continuous learning, hands-on projects, and internship experience, I have developed both technical and interpersonal skills essential in the IT industry.

              I am motivated, adaptable, and eager to apply my knowledge in a professional environment while continuously improving my skills in the field of information technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;