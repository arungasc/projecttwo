import React from 'react';
import { CgGym } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md custom-navbar">
      <div className="container py-2 px-3">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <CgGym className="gym-logo me-2" />
          <span className="brand-name">GymZone</span>
        </div>

        {/* Toggler Button */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end mt-2 mt-md-0" id="navbarNav">
          <ul className="navbar-nav gap-3 text-center">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trainers" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>Trainers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/account" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>Account</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link custom-link"}>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
