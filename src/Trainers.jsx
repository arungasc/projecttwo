import React from 'react';
import './Trainer.css';
import img1 from './assets/img7.jpg';
import img2 from './assets/img8.jpg';
import img3 from './assets/img9.jpg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const trainerData = [
  {
    name: "Patrick Cortez",
    role: "Leader",
    img: img1,
  },
  {
    name: "Gregory Powers",
    role: "Gym Coach",
    img: img2,
  },
  {
    name: "Walter Wagner",
    role: "Dance Trainer",
    img: img3,
  },
];

const Trainers = () => {
  return (
    <div className="container py-5 mb-3">
      <h1 className="text-center text-warning mb-4 fw-bold">Expert Trainers</h1>
      <div className="row g-4">
        {trainerData.map((trainer, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div className="card shadow trainer-card h-100 text-center">
              <img src={trainer.img} className="card-img-top trainer-img" alt={trainer.name} />
              <div className="card-body">
                <h5 className="card-title text-dark fw-bold">{trainer.name}</h5>
                <h6 className="text-muted mb-2">{trainer.role}</h6>
                <p className="card-text">
                  Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <FaFacebookF className="text-primary fs-5" />
                  <FaInstagram className="text-danger fs-5" />
                  <FaTwitter className="text-info fs-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
