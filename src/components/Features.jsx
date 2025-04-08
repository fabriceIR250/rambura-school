import React from 'react';
import './Features.css'; // Import custom CSS for transitions

function Features() {
  return (
    <div className="container-fluid mt-4 mb-5">
      <div className="row text-center g-4"> {/* Added g-4 for consistent gutter spacing */}
        {/* Academic Excellence */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3">
                <i className="bi bi-award"></i> {/* Icon for excellence */}
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold">Academic Excellence</h4>
                <p className="text-muted">
                  Our curriculum focuses on fostering critical thinking and excellence in all subjects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student-Centered Approach */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3">
                <i className="bi bi-person-lines-fill"></i> {/* Icon for student */}
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold">Student-Centered Approach</h4>
                <p className="text-muted">
                  We place our students at the center of their education, encouraging individual growth and learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Facilities */}
        <div className="col-12 col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden animate-card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div className="feature-icon mb-3">
                <i className="bi bi-building"></i> {/* Icon for facilities */}
              </div>
              <div>
                <h4 className="mt-3 fs-5 fw-bold">Modern Facilities</h4>
                <p className="text-muted">
                  Our school is equipped with state-of-the-art facilities for a hands-on and engaging learning experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;