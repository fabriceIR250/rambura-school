import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow px-4 py-3 bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Rambura<span className="text-primary">School</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about">
                <i className="bi bi-info-circle"></i> About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/academics">
                <i className="bi bi-book"></i> Academics
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/admissions">
                <i className="bi bi-file-earmark-text"></i> Admissions
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/gallery">
                <i className="bi bi-camera"></i> Gallery
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope"></i> Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <button className="btn btn-outline-primary mx-2">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
