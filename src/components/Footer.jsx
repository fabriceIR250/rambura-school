import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* About School */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-book-half me-2"></i>
              Rambura School
            </h5>
            <p className="mb-4">
              We are committed to academic excellence and character development in a safe and supportive learning environment.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="bg-white text-primary p-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="bg-white text-primary p-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="bg-white text-primary p-2 rounded-circle d-flex align-items-center justify-content-center" style={{width: '36px', height: '36px'}}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-lightning-charge me-2"></i>
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                  <i className="bi bi-chevron-right me-2"></i>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                  <i className="bi bi-chevron-right me-2"></i>
                  Academics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                  <i className="bi bi-chevron-right me-2"></i>
                  Admissions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                  <i className="bi bi-chevron-right me-2"></i>
                  Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none d-flex align-items-center hover-white">
                  <i className="bi bi-chevron-right me-2"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i>
              Contact Us
            </h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-geo-alt me-2 mt-1"></i>
                <span>123 Education Way, Rambura District</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i className="bi bi-telephone me-2 mt-1"></i>
                <span>+250 782 123 456</span>
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-envelope me-2 mt-1"></i>
                <span>info@ramburaschool.rw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase mb-4 fw-bold d-flex align-items-center">
              <i className="bi bi-newspaper me-2"></i>
              Newsletter
            </h5>
            <p className="text-white-50 mb-4">Subscribe to our newsletter for updates on school events and news.</p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
                aria-label="Your email"
              />
              <button 
                className="btn btn-light" 
                type="button"
              >
                <i className="bi bi-send text-primary"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-light" />
        
        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-8 mb-3 mb-md-0">
            <p className="mb-0 text-white-50">
              © 2025 Rambura School. All rights reserved.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <p className="mb-0 text-white-50 d-flex justify-content-md-end align-items-center">
              Made with 
              <i className="bi bi-heart-fill text-danger mx-1"></i>
              by Dev Fab250
            </p>
          </div>
        </div>
      </div>

      {/* Bootstrap Icons CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
      />
      
      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .hover-white:hover {
          color: white !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
}

export default Footer;