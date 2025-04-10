import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container text-center">
        <div className="row mb-3">
          <div className="col-md-4">
            <h5 className="text-warning">About Us</h5>
            <p>We help you achieve your fitness goals with expert trainers and modern equipment.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About</a></li>
              <li><a href="/gallery" className="text-decoration-none text-light">Gallery</a></li>
              <li><a href="/trainers" className="text-decoration-none text-light">Trainers</a></li>
              <li><a href="/account" className="text-decoration-none text-light">Account</a></li>
              <li><a href="/login" className="text-decoration-none text-light">Login</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-warning">Contact</h5>
            <p><FaPhoneAlt className="me-2 text-primary" /> +91 6369702012</p>
            <p><FaEnvelope className="me-2 text-danger" /> arunmsc63@gmail.com</p>
            <div>
              <a href="https://www.facebook.com/" className="text-light me-3"><FaFacebook size={20} /></a>
              <a href="https://www.instagram.com/" className="text-light me-3"><FaInstagram size={20} /></a>
              <a href="https://web.telegram.org/" className="text-light"><FaTwitter size={20} /></a>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="fw-bold" style={{ color: '#0dcaf0', fontSize: '16px' }}>
          Developed by <span style={{ color: '#ffc107' }}>Arunkumar</span> <span style={{ color: '#fff' }}>&copy; 2025</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
