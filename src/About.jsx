import React from 'react';
import { Link } from 'react-router-dom';
import { GiPlayButton } from "react-icons/gi";
import img1 from "./assets/gym1.webp";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0 position-relative">
          <img src={img1} alt="Gym" className="img-fluid rounded shadow" />
          <Link
            to="https://www.youtube.com/watch?v=SlPhMPnQ58k"
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute top-50 start-50 translate-middle"
          >
            <GiPlayButton style={{ fontSize: '80px', color: 'red' }} />
          </Link>
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h2 className="text-warning mb-4 text-center text-lg-start">About <span className="text-light bg-dark px-2 py-1 rounded">Gym</span></h2>
          <p className="text-muted">
            Welcome to <strong>Gym</strong> — your ultimate destination for fitness transformation. We offer state-of-the-art equipment, personalized training, and a supportive environment to help you achieve your goals.
          </p>
          <p className="text-muted">
            Our certified trainers are committed to helping you with strength training, weight loss, muscle building, and overall well-being. Whether you’re a beginner or a pro, Gym is for everyone!
          </p>
          <p className="text-muted">
            Join us today and become part of a passionate fitness community. 💪 Let’s lift, sweat, and grow stronger together!
          </p>
          <h1 className='text-center'>About</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
