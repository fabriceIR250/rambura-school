import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-white">Rambura School</h5>
            <p>We are committed to academic excellence and character development in a safe and supportive learning environment.</p>
          </div>
          {/* Add more footer sections as needed */}
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-md-8">
            <p>© 2025 Rambura School. All rights reserved.</p>
          </div>
          <div className="col-md-4 text-end">
            <p>Made with ❤️ by Dev Fab250</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;