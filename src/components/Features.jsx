import React from 'react';

function Features() {
  return (
    <div className="container-fluid mt-5">
      <div className="row text-center">
        {/* Academic Excellence */}
        <div className="col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                <i className="bi bi-award"></i> {/* Icon for excellence */}
              </div>
              <h4 className="mt-3 fs-5 fw-bold">Academic Excellence</h4>
              <p className="text-muted">Our curriculum focuses on fostering critical thinking and excellence in all subjects.</p>
            </div>
          </div>
        </div>

        {/* Student-Centered Approach */}
        <div className="col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                <i className="bi bi-person-lines-fill"></i> {/* Icon for student */}
              </div>
              <h4 className="mt-3 fs-5 fw-bold">Student-Centered Approach</h4>
              <p className="text-muted">We place our students at the center of their education, encouraging individual growth and learning.</p>
            </div>
          </div>
        </div>

        {/* Modern Facilities */}
        <div className="col-md-4">
          <div className="card feature-card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body">
              <div className="feature-icon mb-3" style={{ fontSize: '3rem' }}>
                <i className="bi bi-building"></i> {/* Icon for facilities */}
              </div>
              <h4 className="mt-3 fs-5 fw-bold">Modern Facilities</h4>
              <p className="text-muted">Our school is equipped with state-of-the-art facilities for a hands-on and engaging learning experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
