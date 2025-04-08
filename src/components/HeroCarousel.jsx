import React from 'react';
import './HeroCarousel.css'; // Import custom CSS for transitions

function HeroCarousel() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="container hero-section mt-5">
            <div className="row align-items-center">
              <div className="col-md-6 hero-content">
                <p className="text-primary animate-text">Welcome to Rambura School</p>
                <h1 className="animate-text">Empowering Students for a Brighter Future</h1>
                <p className="animate-text">
                  Rambura School is committed to nurturing academic excellence, creativity,
                  and strong values for every student.
                </p>
                <button className="btn btn-primary hero-btn">Learn More</button>
              </div>
              <div className="col-md-6 text-center hero-image">
                <img
                  src="https://thepienews.com/wp-content/uploads/2024/09/Indians-Germany.jpg"
                  className="img-fluid animate-image"
                  style={{ maxHeight: '400px' }}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <div className="container hero-section mt-5">
            <div className="row align-items-center">
              <div className="col-md-6 hero-content">
                <p className="text-primary animate-text">Unlock Potential</p>
                <h1 className="animate-text">Building Future Leaders Today</h1>
                <p className="animate-text">
                  We offer a supportive learning environment that encourages
                  leadership, innovation, and community engagement.
                </p>
                <button className="btn btn-primary hero-btn">Explore</button>
              </div>
              <div className="col-md-6 text-center hero-image">
                <img
                  src="https://s3.youthkiawaaz.com/wp-content/uploads/2014/11/06091631/college-edu.jpg"
                  className="img-fluid animate-image"
                  style={{ maxHeight: '400px' }}
                  alt="Future Leaders"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroCarousel;